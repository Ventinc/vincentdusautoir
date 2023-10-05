import { cn } from "@/utils/tailwind";
import NextLink from "next/link";

export const H1 = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"h1">) => (
  <h1
    className={cn(
      "font-display mt-2 scroll-m-20 text-3xl font-bold tracking-tight md:text-4xl",
      className,
    )}
    {...props}
  />
);

export const H2 = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"h2">) => (
  <h2
    className={cn(
      "font-display mt-10 scroll-m-20 pb-1 text-2xl font-semibold tracking-tight first:mt-0 md:text-3xl",
      className,
    )}
    {...props}
  />
);

export const H3 = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"h3">) => (
  <h3
    className={cn(
      "font-display mt-8 scroll-m-20 text-xl font-semibold tracking-tight md:text-2xl",
      className,
    )}
    {...props}
  />
);

export const H4 = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"h4">) => (
  <h4
    className={cn(
      "font-display mt-8 scroll-m-20 text-lg font-semibold tracking-tight md:text-xl",
      className,
    )}
    {...props}
  />
);

export const H5 = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"h5">) => (
  <h5
    className={cn(
      "font-display mt-8 scroll-m-20 text-base font-semibold tracking-tight md:text-lg",
      className,
    )}
    {...props}
  />
);

export const H6 = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"h6">) => (
  <h6
    className={cn(
      "font-display mt-8 scroll-m-20 text-base font-semibold tracking-tight",
      className,
    )}
    {...props}
  />
);

export const Text = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"p">) => (
  <p
    className={cn(
      "leading-7 text-zinc-800 dark:text-zinc-100 [&:not(:first-child)]:mt-5",
      className,
    )}
    {...props}
  />
);

export const Link = ({
  className,
  linkOverlay = false,
  unstyled = false,
  ...props
}: React.ComponentPropsWithoutRef<typeof NextLink> & {
  linkOverlay?: boolean;
  unstyled?: boolean;
}) => {
  return (
    <NextLink
      className={cn(
        { "font-medium underline underline-offset-4": !unstyled },
        { "after:absolute after:inset-0 after:content-['']": linkOverlay },
        className,
      )}
      {...props}
    />
  );
};
