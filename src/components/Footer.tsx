"use client";

import { siteConfig } from "~/config/site";
import { useToggleTheme } from "~/hooks/use-toggle-theme";
import Image from "next/image";
import { TbMoonStars, TbRss, TbSun } from "react-icons/tb";
import { Button, IconButton } from "./ui/button";
import { H4, Link } from "./ui/typography";
import NextLink from "next/link";

export const Footer = () => {
  const toggleTheme = useToggleTheme();

  return (
    <div className="container mb-8 mt-4">
      <div className="grid grid-cols-1 gap-3 rounded-2xl border-2 border-zinc-200 bg-white p-2 transition-all duration-150 animate-in fade-in slide-out-to-bottom-8 hover:border-brand-200 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-purple-400/30 md:grid-cols-2 lg:grid-cols-4">
        <div className="col-span-1 rounded-xl bg-yellow-50 p-3 animate-in slide-in-from-bottom-8 dark:bg-yellow-100/20">
          <div className="mb-3 flex items-center justify-start gap-2">
            <Image
              width={32}
              height={32}
              src={siteConfig.avatar}
              alt="Vincent Dusautoir"
            />
            <H4 className="mt-0 font-extrabold leading-none">
              Vincent Dusautoir
            </H4>
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className="text-sm">
              Whether you&apos;re looking for an expert for a cool digital
              project - or have a full-time job opportunity, you can easily
              reach me by email.
            </p>
            <Button
              leftIcon={
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
              }
              size="xs"
              className="w-fit text-[0.6rem] uppercase tracking-widest"
              asChild
            >
              <NextLink href={siteConfig.links.email}>
                Available for work
              </NextLink>
            </Button>
          </div>
        </div>
        <div className="col-span-1 rounded-xl p-3 animate-in slide-in-from-bottom-8">
          <H4 className="m-0 mb-3 font-extrabold leading-none">Links</H4>
          <div className="flex flex-col gap-2">
            <Link className="no-underline hover:underline" href="/">
              Home
            </Link>
            <Link className="no-underline hover:underline" href="/posts">
              Posts
            </Link>
            <Link className="no-underline hover:underline" href="/about">
              About
            </Link>
          </div>
        </div>
        <div className="col-span-1 rounded-xl p-3 animate-in slide-in-from-bottom-8">
          <H4 className="m-0 mb-3 font-extrabold leading-none">Social</H4>
          <div className="flex flex-col gap-2">
            <Link
              className="no-underline hover:underline"
              href={siteConfig.links.twitter}
            >
              Twitter
            </Link>
            <Link
              className="no-underline hover:underline"
              href={siteConfig.links.instagram}
            >
              Instagram
            </Link>
            <Link
              className="no-underline hover:underline"
              href={siteConfig.links.youtube}
            >
              Youtube
            </Link>
            <Link
              className="no-underline hover:underline"
              href={siteConfig.links.github}
            >
              Github
            </Link>
          </div>
        </div>
        <div className="col-span-1 rounded-xl p-3 animate-in slide-in-from-bottom-8">
          <div className="flex flex-wrap gap-2">
            <IconButton
              aria-label="Toggle Theme"
              variant="subtle"
              onClick={toggleTheme}
            >
              <TbMoonStars className="hidden dark:block" />
              <TbSun className="dark:hidden" />
            </IconButton>
            <IconButton aria-label="RSS" variant="subtle" asChild>
              <NextLink href="/rss">
                <TbRss />
              </NextLink>
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};
