// @ts-check
import { withContentlayer } from "next-contentlayer";
import withPlaiceholder from "@plaiceholder/next";

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env/server.mjs"));

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["i.scdn.co"],
  },
  async rewrites() {
    return [
      {
        source: "/rss",
        destination: "/api/rss",
      },
    ];
  },
};

export default withPlaiceholder(withContentlayer(config));
