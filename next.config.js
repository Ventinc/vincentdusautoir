// @ts-check
import { withContentlayer } from "next-contentlayer";

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.scdn.co",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/rss",
        destination: "/api/rss",
      },
    ];
  },
  output: "standalone",
};

export default withContentlayer(config);
