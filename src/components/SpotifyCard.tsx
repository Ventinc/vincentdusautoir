import { api } from "@/utils/api";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import Link from "next/link";
import { SiSpotify } from "react-icons/si";

export const SpotifyCard = () => {
  const { data: nowPlaying } = api.spotify.nowPlaying.useQuery();
  const { data: topTracks } = api.spotify.topTracks.useQuery({ count: 12 });

  return (
    <div className="rounded-2xl bg-slate-800 p-6 transition-all animate-in slide-in-from-bottom-8 duration-200 hover:ring-4 hover:ring-spotify hover:ring-offset-4 dark:ring-offset-zinc-900">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="relative mb-2 h-6 w-6 md:mr-4 md:mb-0 md:h-10 md:w-10">
            {nowPlaying?.isPlaying ? (
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-spotify opacity-75"></span>
            ) : null}
            <SiSpotify className="relative h-full w-full text-spotify" />
          </div>
          <p className="text-sm text-zinc-300 md:text-base">TOP THIS MONTH</p>
        </div>
        {nowPlaying?.isPlaying ? (
          <div className="group relative flex items-center justify-end animate-in fade-in slide-in-from-right-8">
            <div className="w-12 animate-spin-slow overflow-hidden rounded-full border-4 border-zinc-900">
              <AspectRatio ratio={1}>
                <Image
                  src={nowPlaying.image ?? ""}
                  alt={nowPlaying.title ?? "Now playing on my spotify"}
                  blurDataURL={nowPlaying.imageBlur}
                  placeholder="blur"
                  fill
                  className="object-cover"
                />
              </AspectRatio>
            </div>
            <div className="ml-3 flex flex-col">
              <Link
                href={nowPlaying.songUrl ?? ""}
                target="_blank"
                className="text-xs font-bold text-white transition-all duration-200 before:absolute before:inset-0 before:content-[''] group-hover:text-spotify"
              >
                {nowPlaying.title}
              </Link>
              <p className="text-xs text-zinc-300">{nowPlaying.artist}</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="grid-row-flow grid grid-cols-3 items-stretch gap-4 md:grid-cols-4 lg:grid-cols-6">
        {topTracks?.tracks.map((track) => (
          <div
            key={track.songUrl}
            className="group relative flex w-full flex-1 flex-col justify-start overflow-hidden transition-all"
          >
            <AspectRatio className="overflow-hidden rounded-lg" ratio={1}>
              <Image
                src={track.image ?? ""}
                alt={track.title}
                sizes="400px"
                placeholder="blur"
                blurDataURL={track.imageBlur}
                fill
                className=" bg-zinc-600 object-cover filter transition-all duration-200 group-hover:scale-110"
              />
            </AspectRatio>
            <div className="mt-1">
              <Link
                href={track.songUrl}
                target="_blank"
                className="text-xs font-bold text-white transition-all line-clamp-1 duration-200 before:absolute before:inset-0 before:content-[''] group-hover:text-spotify md:text-sm"
              >
                {track.title}
              </Link>
              <p className="text-xs text-zinc-300 line-clamp-1 md:text-sm">
                {track.artist}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
