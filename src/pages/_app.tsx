import { type AppProps, type AppType } from "next/app";
import { Inter as FontSans } from "next/font/google";

import { api } from "../utils/api";

import "../styles/globals.css";
import { Devtools } from "@/components/Devtools";
import { type NextPage } from "next";
import { cn } from "@/utils/tailwind";
import { DefaultSeo } from "next-seo";
import { seoConfig } from "@/config/seo";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import { TooltipProvider } from "@/components/ui/Tooltip";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-inter",
});

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactNode) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp: AppType = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <TooltipProvider>
          <DefaultSeo {...seoConfig} />
          <main className={cn(fontSans.variable, "font-sans")}>
            {getLayout(<Component {...pageProps} />)}
          </main>
          <Devtools />
        </TooltipProvider>
      </ThemeProvider>
      <Analytics />
    </>
  );
};

export default api.withTRPC(MyApp);
