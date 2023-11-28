import { format, parseISO } from "date-fns";
import { TwitterIcon } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import NextLink from "next/link";
import { notFound } from "next/navigation";
import { ShareCopyButton } from "~/app/posts/[...slug]/_component/share-copy-button";
import { Mdx } from "~/components/mdx";
import { AspectRatio } from "~/components/ui/aspect-ratio";
import { IconButton } from "~/components/ui/button";
import { Icon } from "~/components/ui/icon";
import { H1, Link } from "~/components/ui/typography";
import { siteConfig } from "~/config/site";
import { env } from "~/env/client.mjs";
import { Post } from "~/utils/content";
import { absoluteUrl } from "~/utils/url";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

// eslint-disable-next-line @typescript-eslint/require-await
async function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = Post.getAll().find((post) => post.slugAsParams === slug);

  if (!post) {
    null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  const ogUrl = absoluteUrl(post.image);

  return {
    title: post.title,
    description: post.description,
    authors: [
      { name: "Vincent Dusautoir", url: "https://twitter.com/vincent_dstr" },
    ],
    publisher: "Vincent Dusautoir",
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: absoluteUrl(post.slug),
      images: [
        {
          url: ogUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogUrl],
    },
  };
}

// eslint-disable-next-line @typescript-eslint/require-await
export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return Post.getAll().map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

const PostPage = async ({ params }: { params: { slug: string[] } }) => {
  const post = await getPostFromParams(params);

  if (!post) notFound();

  return (
    <>
      {/* <NextSeo
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
      /> */}
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
                    `Read "${post.title}" by @vincent_dstr here: ${env.NEXT_PUBLIC_URL}${post.slug}`,
                  )}`}
                  target="_blank"
                >
                  <Icon asChild>
                    <TwitterIcon />
                  </Icon>
                </NextLink>
              </IconButton>
              <ShareCopyButton value={`${env.NEXT_PUBLIC_URL}${post.slug}`} />
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default PostPage;
