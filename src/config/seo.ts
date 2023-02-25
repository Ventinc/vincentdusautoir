import { env } from "@/env/client.mjs";
import { type DefaultSeoProps } from "next-seo";

export const seoConfig: DefaultSeoProps = {
  defaultTitle: "Vincent Dusautoir",
  titleTemplate: "%s - Vincent Dusautoir",
  description:
    "I love building tools, learning new things or share my perspective on different topics. I really like to overcome tech challenges.",
  defaultOpenGraphImageWidth: 1200,
  defaultOpenGraphImageHeight: 630,
  openGraph: {
    type: "website",
    siteName: "Vincent Dusautoir",
    images: [{ url: `${env.NEXT_PUBLIC_URL}/og.png` }],
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.jpg",
      sizes: "180x180",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
  ],
};
