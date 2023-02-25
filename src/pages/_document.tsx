import { cn } from "@/utils/tailwind";
import { Html, Head, Main, NextScript } from "next/document";

const MyDocument = () => {
  return (
    <Html>
      <Head />
      <body
        className={cn(
          "min-h-screen bg-white font-sans text-zinc-900 antialiased dark:bg-zinc-900 dark:text-zinc-50"
        )}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
