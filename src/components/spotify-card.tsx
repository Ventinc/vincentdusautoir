"use client";
import { Card } from "~/components/card";
import { Marquee } from "~/components/ui/marquee";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import type { RouterOutput } from "~/server/api/trpc";
import { api } from "~/utils/api";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Disc3Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SiSpotify } from "react-icons/si";

type Track = RouterOutput["spotify"]["topTracks"]["tracks"][0];

const SpotifyAlbum = ({ track }: { track: Track }) => {
  return (
    <div className="group relative flex w-[200px] flex-1 shrink-0 flex-col justify-start overflow-hidden transition-all">
      <AspectRatio className="overflow-hidden rounded-lg" ratio={1}>
        <Image
          src={track.image ?? ""}
          alt={track.title}
          sizes="400px"
          fill
          className=" bg-zinc-600 object-cover filter transition-all duration-200 group-hover:scale-110"
        />
      </AspectRatio>
      <div className="mt-1">
        <Link
          href={track.songUrl}
          target="_blank"
          className="line-clamp-1 text-xs font-bold text-white transition-all duration-200 before:absolute before:inset-0 before:content-[''] group-hover:text-spotify md:text-sm"
        >
          {track.title}
        </Link>
        <p className="line-clamp-1 text-xs text-zinc-300 md:text-sm">
          {track.artist}
        </p>
      </div>
    </div>
  );
};

const SpotifyAlbumSkeleton = () => {
  return (
    <div className="group relative flex w-[200px] flex-1 animate-pulse flex-col justify-start overflow-hidden transition-all">
      <AspectRatio className="rounded-lg bg-spotify" ratio={1}></AspectRatio>
      <div className="mt-1">
        <div className="mb-1 h-4 w-16 rounded-full bg-white/70"></div>
        <div className="h-3 w-24 rounded-full bg-neutral-300/70"></div>
      </div>
    </div>
  );
};

export const SpotifyCard = () => {
  const { data: nowPlaying } = api.spotify.nowPlaying.useQuery();
  const { data: topTracks } = api.spotify.topTracks.useQuery({ count: 12 });

  const skeletonTracks = Array(20)
    .fill(0)
    .map((x, idx) => <SpotifyAlbumSkeleton key={idx} />);

  return (
    <Card className="relative overflow-hidden rounded-2xl bg-neutral-800 p-6 transition-all duration-200 animate-in slide-in-from-left-8">
      <div className="mb-6 flex items-center justify-between">
        <div className="z-10 flex flex-col md:flex-row md:items-center">
          <div className="relative mb-2 h-6 w-6 md:mb-0 md:mr-4 md:h-10 md:w-10">
            {nowPlaying?.isPlaying ? (
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-spotify opacity-75"></span>
            ) : null}
            <SiSpotify className="relative h-full w-full text-spotify" />
          </div>
          <p className="text-sm text-zinc-300 md:text-base">TOP THIS MONTH</p>
        </div>
        {nowPlaying?.isPlaying ? (
          <Tooltip>
            <TooltipContent side="left">Now Playing</TooltipContent>
            <TooltipTrigger>
              <div className="group relative z-10 flex items-center justify-end rounded-xl bg-neutral-700 p-1 pr-2 animate-in fade-in slide-in-from-right-8">
                <div className="w-12 overflow-hidden rounded-lg border-2 border-neutral-50">
                  <AspectRatio ratio={1}>
                    <Image
                      src={nowPlaying.image ?? ""}
                      alt={nowPlaying.title ?? "Now playing on my spotify"}
                      fill
                      sizes="200px"
                      className="object-cover"
                    />
                  </AspectRatio>
                </div>
                <div className="mx-3 flex flex-col">
                  <Link
                    href={nowPlaying.songUrl ?? ""}
                    target="_blank"
                    className="text-xs font-bold text-white transition-all duration-200 before:absolute before:inset-0 before:content-[''] group-hover:text-spotify"
                  >
                    {nowPlaying.title}
                  </Link>
                  <p className="text-xs text-neutral-200">
                    {nowPlaying.artist}
                  </p>
                </div>
                <Disc3Icon className="animate-spin-slow text-spotify" />
              </div>
            </TooltipTrigger>
          </Tooltip>
        ) : null}
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 z-10">
          <div className="absolute left-0 top-0 h-full w-[10%] bg-gradient-to-r from-neutral-800 to-neutral-800/0"></div>
          <div className="absolute bottom-0 right-0 h-full w-[10%] bg-gradient-to-l from-neutral-800 to-neutral-800/0"></div>
        </div>
        <Marquee className="my-14" duration="90s" gap="2rem" pauseOnHover>
          {!topTracks ? skeletonTracks : null}
          {topTracks
            ? topTracks.tracks.map((track, idx) => (
                <SpotifyAlbum key={`${track.songUrl}-${idx}`} track={track} />
              ))
            : null}
        </Marquee>
      </div>
    </Card>
  );
};
