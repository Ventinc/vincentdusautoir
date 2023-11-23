import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import { cookies } from "next/headers";
import { type ReactNode } from "react";
import { Analytics } from "~/components/analytics";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import { AppProviders } from "~/components/providers";
import { env } from "~/env/client.mjs";
import "~/styles/globals.css";
import { TRPCReactProvider } from "~/trpc/react";
import { cn } from "~/utils/tailwind";
import { absoluteUrl } from "~/utils/url";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const bricolageGrotesqueFont = Bricolage_Grotesque({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-bricolage-grotesque",
});

export const metadata: Metadata = {
  metadataBase: new URL(`${env.NEXT_PUBLIC_URL}`),
  title: {
    default: "Vincent Dusautoir",
    template: "%s - Vincent Dusautoir",
  },
  creator: "Vincent Dusautoir",
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.jpg",
      sizes: "180x180",
    },
    {
      rel: "manifest",
      url: "/site.webmanifest",
    },
  ],
  description:
    "I love building tools, learning new things or share my perspective on different topics. I really like to overcome tech challenges.",
  openGraph: {
    type: "website",
    title: "Vincent Dusautoir",
    siteName: "Vincent Dusautoir",
    description:
      "I love building tools, learning new things or share my perspective on different topics. I really like to overcome tech challenges.",
    locale: "en_US",
    url: "https://vincentdusautoir.com",
    images: [{ url: absoluteUrl(`/og.png`), width: 1200, height: 630 }],
  },
  twitter: {
    title: "Vincent Dusautoir",
    description:
      "I love building tools, learning new things or share my perspective on different topics. I really like to overcome tech challenges.",
    // If you add an twitter-image.(jpg|jpeg|png|gif) image to the /app folder, you don't need the code below
    images: [absoluteUrl(`${env.NEXT_PUBLIC_URL}/og.png`)],
    card: "summary_large_image",
    creator: "@vincent_dstr",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.variable,
          bricolageGrotesqueFont.variable,
          "font-sans",
        )}
      >
        <TRPCReactProvider cookies={cookies().toString()}>
          <AppProviders>
            <Header />
            {children}
            <Footer />
          </AppProviders>
        </TRPCReactProvider>
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
