/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,md,mdx}"],
  darkMode: ["class"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
      },
      minWidth: {
        ...defaultTheme.spacing,
      },
      colors: {
        spotify: "#1DB954",
        twitter: "#1DA1F2",
        instagram: "#E4405F",
        github: "#181717",
        youtube: "#FF0000",
        brand: colors.indigo,
      },
      keyframes: {
        "spotify-tracks": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc((200px + 2rem) * -10))" },
        },
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
        "spotify-tracks": "spotify-tracks 60s linear infinite",
      },
      gridTemplateColumns: {
        blog: "[full-start] minmax(max(4vmin,20px),auto) [wide-start] minmax(auto,240px) [main-start] min(720px,calc(100% - max(8vmin, 40px))) [main-end] minmax(auto,240px) [wide-end] minmax(max(4vmin,20px),auto) [full-end]",
      },
      gridColumn: {
        "blog-main": "main-start / main-end",
        "blog-wide": "wide-start / wide-end",
        "blog-full": "full-start / full-end",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-animate"),
  ],
};
