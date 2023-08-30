import { cn } from "@/utils/tailwind";
import { Html, Head, Main, NextScript } from "next/document";

const MyDocument = () => {
  return (
    <Html>
      <Head />
      <body
        className={cn(
          "min-h-screen bg-white font-sans text-neutral-900 antialiased dark:bg-neutral-900 dark:text-zinc-50",
        )}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
