import { cn } from "@/utils/tailwind";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import * as React from "react";
import { Callout } from "./Callout";
import { ComponentExample } from "./ComponentExample";
import examples from "./examples";
import { H1, H2, H3, H4, H5, H6, Text } from "./ui/Typography";

const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  a: ({ className, ...props }: React.ComponentPropsWithoutRef<"a">) => (
    <a
      className={cn("font-medium underline underline-offset-4", className)}
      {...props}
    />
  ),
  p: Text,
  ul: ({ className, ...props }: React.ComponentPropsWithoutRef<"ul">) => (
    <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.ComponentPropsWithoutRef<"ol">) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: React.ComponentPropsWithoutRef<"li">) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  blockquote: ({
    className,
    ...props
  }: React.ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className={cn(
        "mt-6 border-l-2 border-zinc-300 pl-6 italic text-zinc-800 dark:border-zinc-700 dark:text-zinc-500 [&>*]:text-zinc-600 dark:[&>*]:text-zinc-300",
        className,
      )}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ComponentPropsWithoutRef<"img">) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={cn(
        "rounded-md border border-zinc-200 dark:border-zinc-700",
        className,
      )}
      alt={alt}
      {...props}
    />
  ),
  hr: ({ ...props }) => (
    <hr className="my-4 border-zinc-200 md:my-8" {...props} />
  ),
  table: ({ className, ...props }: React.ComponentPropsWithoutRef<"table">) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.ComponentPropsWithoutRef<"tr">) => (
    <tr
      className={cn(
        "m-0 border-t border-zinc-300 p-0 even:bg-zinc-100 dark:border-zinc-700 dark:even:bg-zinc-800",
        className,
      )}
      {...props}
    />
  ),
  th: ({ className, ...props }: React.ComponentPropsWithoutRef<"th">) => (
    <th
      className={cn(
        "border border-zinc-200 px-4 py-2 text-left font-bold dark:border-zinc-700 [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.ComponentPropsWithoutRef<"td">) => (
    <td
      className={cn(
        "border border-zinc-200 px-4 py-2 text-left dark:border-zinc-700 [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: React.ComponentPropsWithoutRef<"pre">) => (
    <pre
      className={cn(
        "relative mb-4 mt-6 overflow-x-auto rounded-lg bg-zinc-900 p-4 before:absolute before:left-1 before:top-1 before:text-xs before:text-zinc-500 before:content-[attr(data-language)] before:animate-in before:fade-in before:slide-in-from-top-8 hover:before:block dark:bg-zinc-800 lg:before:hidden",
        className,
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: React.ComponentPropsWithoutRef<"code">) => (
    <code
      className={cn(
        "relative rounded border bg-zinc-300 bg-opacity-25 px-[0.3rem] py-[0.2rem] font-mono text-sm text-zinc-600 dark:border-zinc-600 dark:bg-zinc-700 dark:text-zinc-300",
        className,
      )}
      {...props}
    />
  ),
  Image,
  Callout,
  ComponentExample,
  ...examples,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <>
      <Component components={components} />
    </>
  );
}
