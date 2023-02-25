import { env } from "@/env/server.mjs";
import querystring from "node:querystring";

const basic = Buffer.from(
  env.SPOTIFY_CLIENT_ID + ":" + env.SPOTIFY_CLIENT_SECRET
).toString("base64");

interface AccessToken {
  access_token: string;
  token_type: string;
  scope: string;
  expires_in: number;
}

export const getAccessToken = async () => {
  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token: env.SPOTIFY_REFRESH_TOKEN,
    }),
  });

  return (await res.json()) as AccessToken;
};

export const getTopTracks = async (accessToken: string) => {
  return fetch(
    "https://api.spotify.com/v1/me/top/tracks?time_range=short_term",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};

export const getNowPlaying = async (accessToken: string) => {
  return fetch("https://api.spotify.com/v1/me/player/currently-playing", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
