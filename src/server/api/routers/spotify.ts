import { z } from "zod";
import { getNowPlaying, getTopTracks } from "../external/spotify";
import { getPlaiceholder } from "plaiceholder";

import { createTRPCRouter, spotifyProcedure } from "../trpc";

export const spotifyRouter = createTRPCRouter({
  nowPlaying: spotifyProcedure.query(async ({ ctx }) => {
    const res = await getNowPlaying(ctx.accessToken);

    if (res.status === 204 || res.status > 400) {
      return { isPlaying: false };
    }

    const data = (await res.json()) as SpotifyApi.CurrentlyPlayingResponse;

    if (data.item?.type !== "track") {
      return {
        isPlaying: false,
      };
    }

    const image = data.item.album.images[0]?.url;
    const imageBlur = image ? (await getPlaiceholder(image)).base64 : undefined;

    return {
      isPlaying: data.is_playing,
      title: data.item.name,
      artist: data.item.artists.map((artist) => artist.name).join(", "),
      image,
      imageBlur,
      songUrl: data.item.external_urls.spotify,
    };
  }),
  topTracks: spotifyProcedure
    .input(
      z
        .object({
          count: z.number(),
        })
        .optional()
    )
    .query(async ({ ctx, input }) => {
      const res = await getTopTracks(ctx.accessToken);
      const count = input?.count ?? 10;

      const data = (await res.json()) as SpotifyApi.UsersTopTracksResponse;

      const tracks = await Promise.all(
        data.items.slice(0, count).map(async (item) => {
          const image = item.album.images[0]?.url;
          const imageBlur = image
            ? (await getPlaiceholder(image)).base64
            : undefined;

          return {
            artist: item.artists.map((artist) => artist.name).join(", "),
            songUrl: item.external_urls.spotify,
            title: item.name,
            image,
            imageBlur,
          };
        })
      );

      return { tracks };
    }),
});
