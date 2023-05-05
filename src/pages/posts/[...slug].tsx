import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { Mdx } from "@/components/Mdx";
import { AspectRatio } from "@/components/ui/AspectRatio";
import { IconButton } from "@/components/ui/Button";
import { H1, Link } from "@/components/ui/Typography";
import { siteConfig } from "@/config/site";
import { env } from "@/env/client.mjs";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { type NextPageWithLayout } from "@/pages/_app";
import { Post } from "@/utils/content";
import { format, parseISO } from "date-fns";
import { type GetStaticPropsContext, type InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { SiTwitter } from "react-icons/si";
import { TbCheck, TbCopy } from "react-icons/tb";
import NextLink from "next/link";

export function getStaticPaths() {
  const paths = Post.getAll().map((post) => ({
    params: {
      slug: post.slugAsParams.split("/"),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export function getStaticProps({
  params,
}: GetStaticPropsContext<{ slug: string[] }>) {
  const slug = params?.slug.join("/") ?? "";
  const post = Post.getAll().find((post) => post.slugAsParams === slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
}

const PostPage: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ post }) => {
  const { copy, isCopied } = useCopyToClipboard();

  return (
    <>
      <NextSeo
        title={post.title}
        description={post.description}
        openGraph={{
          type: "article",
          article: {
            authors: ["Vincent Dusautoir"],
            publishedTime: post.date,
          },
          images: [
            {
              url: `${env.NEXT_PUBLIC_URL}${post.image}`,
            },
          ],
        }}
      />
      <article className="grid grid-cols-blog [&>*:not([class^='col-blog'])]:col-blog-main">
        <div className="col-blog-wide mb-4 animate-in fade-in slide-in-from-top-8 md:mb-12">
          <AspectRatio
            ratio={16 / 9}
            className="overflow-hidden rounded-2xl border-2 border-slate-100 dark:border-zinc-800 md:border-4"
          >
            <Image src={post.image} alt={post.title} fill />
          </AspectRatio>
        </div>
        <div className="mb-6">
          <H1 className="font-extrabold">{post.title}</H1>
          <time
            dateTime={post.date}
            className="text-sm text-zinc-600 dark:text-zinc-300"
          >
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
        </div>
        <Mdx code={post?.body.code} />
        <div className="mb-16 mt-8 flex flex-col gap-2 rounded-2xl bg-cyan-400/20 p-4 md:flex-row">
          <div className="flex-1">
            <p className="mb-2 text-xl font-extrabold">Any feedback ?</p>
            <p>
              If there is any problem of comprehension, typo or formulation, do
              not hesitate to reach me on{" "}
              <Link href={siteConfig.links.twitter}>Twitter</Link>. I&apos;ll
              fix the problem as soon as possible. My english is probably not
              very good yet, but what computer science taught me is that we
              can&apos;t learn without practice.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm font-bold uppercase tracking-tighter">
              Share
            </p>
            <div className="flex items-center gap-2 md:flex-col">
              <IconButton asChild rounded="full" size="sm">
                <NextLink
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    `Read "${post.title}" by @vincent_dstr here: ${env.NEXT_PUBLIC_URL}${post.slug}`
                  )}`}
                  target="_blank"
                >
                  <SiTwitter />
                </NextLink>
              </IconButton>
              <IconButton
                onClick={() => copy(`${env.NEXT_PUBLIC_URL}${post.slug}`)}
                rounded="full"
                variant={isCopied ? "success" : "default"}
                size="sm"
              >
                {isCopied ? <TbCheck /> : <TbCopy />}
              </IconButton>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

PostPage.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>;

export default PostPage;
