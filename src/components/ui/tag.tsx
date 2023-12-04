import { type VariantProps, cva } from "class-variance-authority";
import React from "react";
import { cn } from "~/utils/tailwind";

const tagVariants = cva(
  "flex items-center gap-1 rounded-lg px-2 py-1 font-medium",
  {
    variants: {
      size: {
        md: "text-md",
        sm: "text-sm",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export const Tag = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span"> & VariantProps<typeof tagVariants>
>(({ className, size, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn(tagVariants({ size }), className)}
      {...props}
    />
  );
});

Tag.displayName = "Tag";
