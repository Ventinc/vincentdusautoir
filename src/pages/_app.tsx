import { type AppProps, type AppType } from "next/app";
import { Bricolage_Grotesque, Inter as FontSans } from "next/font/google";

import { api } from "../utils/api";

import "../styles/globals.css";
import { Devtools } from "@/components/Devtools";
import { type NextPage } from "next";
import { cn } from "@/utils/tailwind";
import { DefaultSeo } from "next-seo";
import { seoConfig } from "@/config/seo";
import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/Tooltip";
import { ConfirmDialogProvider } from "@/components/ui/ConfirmDialog";
import { Toaster } from "@/components/ui/Toaster";
import { Analytics } from "@/components/Analytics";

const fontSans = FontSans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const bricolageGrotesqueFont = Bricolage_Grotesque({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-bricolage-grotesque",
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
        <DefaultSeo {...seoConfig} />
        <main
          className={cn(
            fontSans.variable,
            bricolageGrotesqueFont.variable,
            "font-sans",
          )}
        >
          <TooltipProvider>
            <ConfirmDialogProvider>
              {getLayout(<Component {...pageProps} />)}
              <Toaster />
            </ConfirmDialogProvider>
            <Devtools />
          </TooltipProvider>
        </main>
      </ThemeProvider>
      <Analytics />
    </>
  );
};

export default api.withTRPC(MyApp);
