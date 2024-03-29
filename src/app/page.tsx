import { format } from "date-fns";
import {
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import Image from "next/image";
import NextLink from "next/link";
import { Card } from "~/components/card";
import { QuoteCard } from "~/components/quote-card";
import { SpotifyCard } from "~/components/spotify-card";
import { AspectRatio } from "~/components/ui/aspect-ratio";
import { Button, IconButton } from "~/components/ui/button";
import { H1, H2, Link, Text } from "~/components/ui/typography";
import { projects } from "~/config/projects";
import { siteConfig } from "~/config/site";
import { Post } from "~/utils/content";

const IndexPage = () => {
  const latestPosts = Post.getLatest();

  return (
    <div className="container grid grid-cols-8 gap-4 md:grid-flow-row">
      <Card className="col-span-full flex flex-col gap-4 rounded-2xl bg-gradient-to-br from-brand-200 to-neutral-50 p-4 animate-in fade-in slide-in-from-top-8 dark:from-brand-950 dark:to-neutral-800 md:flex-row">
        <div className="relative h-[200px] w-[300px] self-center overflow-hidden rounded-xl md:h-full md:w-[300px] md:self-start lg:w-[250px]">
          <Image
            className="object-cover"
            src={siteConfig.myself}
            sizes="20vw"
            priority
            fill
            alt="Vincent Dusautoir"
          />
        </div>
        <div className="flex-3 flex flex-col p-0 md:p-4">
          <div className="mb-12 flex-1">
            <H1 className="mt-0 font-extrabold">I&apos;m Vincent Dusautoir</H1>
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
                  <TwitterIcon className="h-5 w-5" />
                </NextLink>
              </IconButton>
              <IconButton rounded="full" aria-label="Instagram" asChild>
                <NextLink href={siteConfig.links.instagram} target="_blank">
                  <InstagramIcon className="h-5 w-5" />
                </NextLink>
              </IconButton>
              <IconButton rounded="full" aria-label="Youtube" asChild>
                <NextLink href={siteConfig.links.youtube} target="_blank">
                  <YoutubeIcon className="h-5 w-5" />
                </NextLink>
              </IconButton>
              <IconButton rounded="full" aria-label="Github" asChild>
                <NextLink href={siteConfig.links.github} target="_blank">
                  <GithubIcon className="h-5 w-5" />
                </NextLink>
              </IconButton>
            </div>
          </div>
        </div>
      </Card>
      <div className="col-span-full animate-in fade-in slide-in-from-left-8 sm:col-span-4 lg:col-span-3">
        <H2 className="mb-2 mt-0 px-8 font-extrabold">Projects</H2>
        <div className="flex flex-col gap-4">
          {projects.map((project) => (
            <Link
              key={project.name}
              href={`${project.href}?ref=vincentdusautoir`}
              target="_blank"
              unstyled
            >
              <Card className="flex flex-row items-center justify-center gap-2.5 p-2.5 transition-shadow hover:shadow-md dark:bg-neutral-800 dark:shadow-white/10">
                <div className="relative h-14 w-14 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-500">
                  <Image
                    src={`/images/projects/${project.icon}`}
                    alt="SculptEmail Icon"
                    fill
                  />
                </div>
                <div className="flex-1">
                  <p className="font-bold">{project.name}</p>
                  <p className="line-clamp-2 text-sm">{project.description}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
      <div className="col-span-full animate-in fade-in slide-in-from-right-8 lg:col-span-5">
        <H2 className="mb-2 mt-0 px-8 font-extrabold">Latest posts</H2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {latestPosts.map((post) => {
            return (
              <Card
                key={post._id}
                className="group relative flex flex-col overflow-hidden rounded-xl p-3 transition-shadow hover:shadow-md dark:bg-neutral-800 dark:shadow-white/10"
              >
                <div className="relative mb-1 w-full overflow-hidden rounded-lg">
                  <AspectRatio ratio={21 / 9}>
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-200 group-hover:scale-105"
                    />
                  </AspectRatio>
                </div>
                <Link
                  href={post.slug}
                  unstyled
                  className="font-semibold before:absolute before:inset-0 before:content-['']"
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
              </Card>
            );
          })}
        </div>
      </div>
      <div className="col-span-full lg:col-span-5 lg:row-span-2">
        <SpotifyCard />
      </div>
      <Card className="aspect-video relative col-span-full flex min-h-[200px] flex-col items-center justify-center gap-1 overflow-hidden rounded-2xl bg-cyan-50 p-0 animate-in fade-in slide-in-from-right-8 dark:bg-cyan-600/20 sm:col-span-4 lg:col-span-3">
        <Image
          src="/images/montreal-map.png"
          alt="Current location"
          fill
          className="overflow-hidden object-cover"
        />
        <Text className="absolute bottom-2 left-2 z-10 m-0 rounded-xl bg-white/40 px-2 font-bold tracking-wide backdrop-blur-sm dark:bg-neutral-900/40">
          Montreal, QC, Canada
        </Text>
        <span className="relative z-10 h-6 w-6">
          <span className="absolute inset-0 animate-ping rounded-full bg-brand-400 dark:bg-brand-500"></span>
          <span className="relative inline-flex h-6 w-6 rounded-full border-4 border-white bg-brand-400 dark:bg-brand-500"></span>
        </span>
      </Card>
      <div className="col-span-full sm:col-span-4 lg:col-span-3">
        <QuoteCard />
      </div>
    </div>
  );
};

export default IndexPage;
