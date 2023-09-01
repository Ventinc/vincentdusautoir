import { cn } from "@/utils/tailwind";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { BaseButton } from "./BaseButton";

const solidVariants = cva("hover:bg-opacity-90 dark:hover:bg-opacity-90", {
  variants: {
    variant: {
      default:
        "bg-neutral-900 text-white dark:bg-neutral-50 dark:text-neutral-950",
      brand: "bg-brand-600 text-white dark:bg-brand-500",
      destructive: "bg-red-600 text-white dark:bg-red-500",
      success:
        "bg-green-600 text-white dark:text-neutral-950 dark:bg-green-500",
    },
  },
});

const outlineVariants = cva("border-2", {
  variants: {
    variant: {
      default:
        "text-neutral-950 hover:bg-neutral-100 border-neutral-950/80 dark:text-white dark:border-white/80 dark:hover:bg-white/10",
      brand:
        "text-brand-500 hover:bg-brand-500/10 border-brand-500 dark:text-brand-400 dark:border-brand-400/80 dark:hover:bg-brand-400/10",
      destructive:
        "text-red-500 hover:bg-red-500/10 border-red-500 dark:text-red-400 dark:border-red-400/80 dark:hover:bg-red-400/10",
      success:
        "text-green-500 hover:bg-green-500/10 border-green-500 dark:text-green-400 dark:border-green-400/80 dark:hover:bg-green-400/10",
    },
  },
});

const subtleVariants = cva("", {
  variants: {
    variant: {
      default:
        "text-neutral-900 bg-neutral-200 hover:bg-neutral-300 dark:text-white dark:border-white dark:bg-white/10 dark:hover:bg-white/20",
      brand:
        "text-brand-500 bg-brand-500/10 hover:bg-brand-500/20 dark:text-brand-400 dark:bg-brand-400/10 dark:hover:bg-brand-400/20",
      destructive:
        "text-red-500 bg-red-500/10 hover:bg-red-500/20 dark:text-red-400 dark:bg-red-400/10 dark:hover:bg-red-400/20",
      success:
        "text-green-500 bg-green-500/10 hover:bg-green-500/20 dark:text-green-400 dark:bg-green-400/10 dark:hover:bg-green-400/20",
    },
  },
});

const ghostVariants = cva("", {
  variants: {
    variant: {
      default:
        "text-neutral-900 hover:bg-neutral-200 dark:text-white dark:border-white dark:hover:bg-white/10",
      brand:
        "text-brand-500 hover:bg-brand-400/10 dark:text-brand-400 dark:hover:bg-brand-400/10",
      destructive:
        "text-red-500 hover:bg-red-400/10 dark:text-red-400 dark:hover:bg-red-400/10",
      success:
        "text-green-500 hover:bg-green-400/10 dark:text-green-400 dark:hover:bg-green-400/10",
    },
  },
});

export const buttonVariants = cva(
  "focus-visible:ring-2 focus-visible:ring-neutral-300 focus-visible:ring-offset-2 disabled:opacity-50 dark:focus:ring-neutral-600 disabled:cursor-not-allowed dark:focus-visible:ring-offset-neutral-900 dark:focus-visible:ring-neutral-600 active:translate-y-[0.0625rem] disabled:active:translate-y-0 cursor-pointer",
  {
    variants: {
      variant: {
        default: solidVariants({ variant: "default" }),
        brand: solidVariants({ variant: "brand" }),
        destructive: solidVariants({ variant: "destructive" }),
        success: solidVariants({ variant: "success" }),
        outline: outlineVariants({ variant: "default" }),
        "outline-brand": outlineVariants({ variant: "brand" }),
        "outline-destructive": outlineVariants({ variant: "destructive" }),
        "outline-success": outlineVariants({ variant: "success" }),
        ghost: ghostVariants({ variant: "default" }),
        "ghost-brand": ghostVariants({ variant: "brand" }),
        "ghost-destructive": ghostVariants({ variant: "destructive" }),
        "ghost-success": ghostVariants({ variant: "success" }),
        subtle: subtleVariants({ variant: "default" }),
        "subtle-brand": subtleVariants({ variant: "brand" }),
        "subtle-destructive": subtleVariants({ variant: "destructive" }),
        "subtle-success": subtleVariants({ variant: "success" }),
        link: "bg-transparent underline-offset-4 hover:underline text-neutral-900 dark:text-neutral-100 hover:bg-transparent dark:hover:bg-transparent",
        unstyled: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export const Button = React.forwardRef<
  React.ElementRef<typeof BaseButton>,
  React.ComponentPropsWithoutRef<typeof BaseButton> &
    VariantProps<typeof buttonVariants>
>(({ className, variant, ...props }, ref) => (
  <BaseButton
    className={cn(buttonVariants({ variant, className }))}
    {...props}
    ref={ref}
  />
));

Button.displayName = "Button";

export const IconButton = React.forwardRef<
  React.ElementRef<typeof Button>,
  Omit<React.ComponentPropsWithoutRef<typeof Button>, "leftIcon" | "rightIcon">
>(({ className, children, ...props }, ref) => (
  <Button {...props} className={cn("p-0", className)} ref={ref}>
    {props.isLoading ? null : children}
  </Button>
));

IconButton.displayName = "IconButton";
