import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { PageTitle } from "@/components/PageTitle";
import { AspectRatio } from "@/components/ui/AspectRatio";
import { Post } from "@/utils/content";
import { format } from "date-fns";
import { type InferGetStaticPropsType } from "next";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import { type NextPageWithLayout } from "../_app";

export function getStaticProps() {
  const posts = Post.getAll().map((post) => ({
    ...post,
    body: null,
  }));

  return { props: { posts } };
}

const BlogPage: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ posts }) => {
  return (
    <>
      <NextSeo
        title="Posts"
        description="Ideas, stories, and things that I want to share."
      />
      <main className="container">
        <PageTitle
          title="Posts"
          description="Ideas, stories, and things that I want to share."
          type="Blog"
        />
        <div className="my-12 grid grid-flow-row grid-cols-2 gap-4 md:grid-cols-[repeat(auto-fit,minmax(16rem,1fr))]">
          {posts.map((post) => (
            <div
              key={post._id}
              className="group relative flex w-full flex-col gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-2 transition-all duration-150 hover:ring-2 hover:ring-purple-400 hover:ring-offset-2 dark:border-zinc-700 dark:bg-zinc-800 dark:ring-offset-zinc-900"
            >
              <div className="overflow-hidden rounded-xl">
                <AspectRatio ratio={4 / 5}>
                  <Image
                    src={post.image}
                    className="object-cover transition-all duration-200 group-hover:scale-105"
                    alt={post.title}
                    fill
                  />
                </AspectRatio>
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="mb-2 text-xl font-bold md:text-2xl">
                  <Link
                    href={post.slug}
                    className="after:absolute after:inset-0 after:content-['']"
                  >
                    {post.title}
                  </Link>
                </h2>

                <p className="mb-3 text-base line-clamp-2">
                  {post.description}
                </p>
                <time
                  dateTime={new Date(post.date).toISOString()}
                  className="text-right text-sm text-zinc-500 dark:text-zinc-300"
                >
                  {format(new Date(post.date), "dd MMM yyyy")}
                </time>
              </div>
            </div>
          ))}
          {/* TODO: Remove those useless div when 4 articles exist */}
          <div></div>
          <div></div>
          <div></div>
        </div>
      </main>
    </>
  );
};

BlogPage.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>;

export default BlogPage;
