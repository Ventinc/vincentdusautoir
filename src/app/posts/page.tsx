import { format } from "date-fns";
import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageTitle } from "~/components/page-title";
import { AspectRatio } from "~/components/ui/aspect-ratio";
import { H2 } from "~/components/ui/typography";
import { Post } from "~/utils/content";

export const metadata: Metadata = {
  title: "Posts",
  description: "Ideas, stories, and thing that I want to share.",
};

const BlogPage = () => {
  const posts = Post.getAll();

  return (
    <>
      <main className="container">
        <PageTitle
          title="Posts"
          description="Ideas, stories, and things that I want to share."
          type="Blog"
        />
        <div className="my-12 grid grid-flow-row grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post._id}
              className="group relative flex w-full flex-col gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-2 transition-shadow hover:shadow-md dark:border-zinc-700 dark:bg-zinc-800 dark:shadow-white/10 dark:ring-offset-zinc-900"
            >
              <div className="overflow-hidden rounded-xl">
                <AspectRatio ratio={21 / 9}>
                  <Image
                    src={post.image}
                    className="object-cover transition-transform duration-200 group-hover:scale-105"
                    alt={post.title}
                    fill
                  />
                </AspectRatio>
              </div>
              <div className="flex flex-col justify-center">
                <H2 className="mb-0 pb-0 text-lg font-semibold md:text-xl">
                  <Link
                    href={post.slug}
                    className="after:absolute after:inset-0 after:content-['']"
                  >
                    {post.title}
                  </Link>
                </H2>

                <p className="line-clamp-2 text-base">{post.description}</p>
                <time
                  dateTime={new Date(post.date).toISOString()}
                  className="text-sm text-zinc-600 dark:text-zinc-300"
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

export default BlogPage;
