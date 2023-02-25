import Link, { type LinkProps } from "next/link";
import React from "react";

export type Props = React.ComponentPropsWithoutRef<"button"> &
  (React.ComponentPropsWithoutRef<"a"> & Partial<LinkProps>);

export const ButtonOrLink = React.forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  Props
>(({ href, ...props }, ref) => {
  const isLink = typeof href !== "undefined";

  if (isLink) {
    return (
      <Link href={href} passHref legacyBehavior>
        <a ref={ref as React.Ref<HTMLAnchorElement>} {...props} />
      </Link>
    );
  }

  return <button ref={ref as React.Ref<HTMLButtonElement>} {...props} />;
});

ButtonOrLink.displayName = "ButtonOrLink";
