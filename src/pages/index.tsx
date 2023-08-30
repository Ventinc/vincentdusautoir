import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { QuoteCard } from "@/components/QuoteCard";
import { SpotifyCard } from "@/components/SpotifyCard";
import { Button, IconButton } from "@/components/ui/Button";
import { H1, H2, H3, Link } from "@/components/ui/Typography";
import NextLink from "next/link";
import { siteConfig } from "@/config/site";
import { useToggleTheme } from "@/hooks/useToggleTheme";
import { appRouter } from "@/server/api/root";
import { createInnerTRPCContext } from "@/server/api/trpc";
import { Post } from "@/utils/content";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { createServerSideHelpers } from "@trpc/react-query/server";
import { format } from "date-fns";
import { type InferGetServerSidePropsType } from "next";
import Image from "next/image";
import { SiGithub, SiInstagram, SiTwitter, SiYoutube } from "react-icons/si";
import { TbMoonStars, TbSun } from "react-icons/tb";
import superjson from "superjson";
import { type NextPageWithLayout } from "./_app";

export async function getServerSideProps() {
  const helpers = createServerSideHelpers({
    router: appRouter,
    ctx: createInnerTRPCContext({}),
    transformer: superjson,
  });

  await helpers.spotify.nowPlaying.prefetch();
  await helpers.spotify.topTracks.prefetch({ count: 12 });
  await helpers.quote.random.prefetch();

  const latestPosts = Post.getLatest().map((post) => {
    return {
      id: post._id,
      title: post.title,
      description: post.description,
      image: post.image,
      date: post.date,
      slug: post.slug,
    };
  });

  return {
    props: {
      trpcState: helpers.dehydrate(),
      latestPosts,
    },
  };
}

const HomePage: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ latestPosts }) => {
  const toggleTheme = useToggleTheme();

  return (
    <>
      <main className="container grid grid-cols-8 gap-4 md:grid-flow-row">
        <div className="col-span-full flex min-h-[200px] flex-col rounded-2xl bg-gradient-to-tr from-brand-50 to-brand-300 p-8 animate-in fade-in slide-in-from-left-8 dark:from-brand-500/5 dark:to-brand-500/30 md:col-span-5 lg:col-span-6">
          <div className="mb-12 flex-1">
            <H1 className="mt-0 font-extrabold">
              I&apos;m Vincent Dusautoir - Software Engineer
            </H1>
            <p className="mb-3 mt-3 max-w-xl text-lg font-medium leading-7 text-slate-700 dark:text-slate-300">
              I love building tools, learning new things or share my perspective
              on different topics. I really like to overcome tech challenges.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <Button rounded="full" asChild>
              <NextLink href={siteConfig.links.email}>Contact me</NextLink>
            </Button>
            <div className="flex gap-3">
              <IconButton rounded="full" aria-label="Twitter" asChild>
                <NextLink href={siteConfig.links.twitter} target="_blank">
                  <SiTwitter />
                </NextLink>
              </IconButton>
              <IconButton rounded="full" aria-label="Instagram" asChild>
                <NextLink href={siteConfig.links.instagram} target="_blank">
                  <SiInstagram />
                </NextLink>
              </IconButton>
              <IconButton rounded="full" aria-label="Youtube" asChild>
                <NextLink href={siteConfig.links.youtube} target="_blank">
                  <SiYoutube />
                </NextLink>
              </IconButton>
              <IconButton rounded="full" aria-label="Github" asChild>
                <NextLink href={siteConfig.links.github} target="_blank">
                  <SiGithub />
                </NextLink>
              </IconButton>
            </div>
          </div>
        </div>
        <div className="relative order-first col-span-full flex w-[150px] place-self-start overflow-hidden rounded-2xl bg-brand-200 p-2 transition-all duration-200 animate-in fade-in slide-in-from-right-8 dark:bg-brand-500/30 md:order-none md:col-span-3 md:w-auto md:place-self-auto md:hover:rotate-3 lg:col-span-2">
          <AspectRatio ratio={1}>
            <Image
              className="rounded-xl object-cover"
              src={siteConfig.myself}
              sizes="20vw"
              priority
              fill
              alt="Vincent Dusautoir"
            />
          </AspectRatio>
        </div>
        <div className="col-span-full row-span-2 rounded-2xl bg-gradient-to-b from-zinc-100 to-zinc-50 p-4 animate-in fade-in slide-in-from-left-8 dark:from-zinc-800/30 dark:to-zinc-900 md:col-span-4">
          <H2 className="mb-2 mt-0 font-extrabold">Latest posts</H2>
          <div className="flex flex-col gap-2">
            {latestPosts.map((post) => {
              return (
                <div
                  key={post.id}
                  className="group relative flex overflow-hidden rounded-xl bg-white p-2 pr-[110px] transition-all duration-200 hover:shadow-sm hover:ring-2 hover:ring-brand-400 hover:ring-offset-2 hover:ring-offset-slate-100 dark:bg-zinc-900 dark:ring-offset-zinc-900"
                >
                  <div className="z-10 flex flex-col">
                    <Link
                      href={post.slug}
                      unstyled
                      className="font-medium before:absolute before:inset-0 before:content-['']"
                    >
                      {post.title}
                    </Link>
                    <p className="line-clamp-2 whitespace-normal text-zinc-800 dark:text-zinc-100 md:line-clamp-1">
                      {post.description}
                    </p>
                    <time
                      className="text-xs text-zinc-500 dark:text-zinc-300"
                      dateTime={post.date}
                    >
                      {format(new Date(post.date), "MMMM, dd yyyy")}
                    </time>
                  </div>
                  <div className="after:content-['' absolute right-0 top-0 h-full w-[150px] after:absolute after:inset-0 after:bg-gradient-to-r after:from-white after:to-white/0 group-hover:block dark:after:from-zinc-900 dark:after:to-zinc-900/0 md:hidden md:group-hover:animate-in md:group-hover:fade-in md:group-hover:slide-in-from-right-4">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-span-2 flex flex-col items-center justify-center gap-1 rounded-2xl bg-cyan-50 animate-in fade-in slide-in-from-bottom-8 slide-in-from-right-8 dark:bg-cyan-600/20 lg:col-span-1">
          <span className="text-3xl">🇫🇷</span>
          <H3 className="m-0 font-serif font-extrabold tracking-wide">Lille</H3>
        </div>
        <div className="col-span-2 rounded-2xl animate-in fade-in slide-in-from-right-8 slide-in-from-top-8 lg:col-span-1">
          <Button
            onClick={toggleTheme}
            variant="unstyled"
            className="aspect-1 h-full w-full rounded-2xl bg-blue-50  text-4xl hover:bg-blue-100 dark:bg-blue-500/20 dark:hover:bg-blue-500/30"
            aria-label="Toggle Theme"
          >
            <TbMoonStars className="hidden dark:block" />
            <TbSun className="dark:hidden" />
          </Button>
        </div>
        <div className="col-span-full md:col-span-4">
          <QuoteCard />
        </div>
        <div className="col-span-full">
          <SpotifyCard />
        </div>
      </main>
    </>
  );
};

HomePage.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>;

export default HomePage;
