import { cn } from "@/utils/tailwind";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { BaseButton } from "./BaseButton";

const solidVariants = cva("", {
  variants: {
    variant: {
      default:
        "bg-zinc-900 text-white hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200",
      brand:
        "outline-none bg-gradient-to-r from-brand-600 via-brand-400 to-brand-600 text-white hover:outline-2 outline-offset-0 hover:outline-zinc-900 transition-all bg-left hover:bg-right bg-[size:200%]",
      destructive:
        "bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600",
      success:
        "bg-green-500 text-white hover:bg-green-600 dark:hover:bg-green-600",
    },
  },
});

const outlineVariants = cva("border-2", {
  variants: {
    variant: {
      default:
        "text-zinc-900 hover:bg-zinc-200 border-zinc-900 dark:text-white dark:hover:bg-zinc-200 dark:border-white dark:hover:bg-white/20",
      brand: "text-brand-500 hover:bg-brand-400/20 border-brand-500",
      destructive: "text-red-500 hover:bg-red-400/20 border-red-500",
    },
  },
});

const subtleVariants = cva("", {
  variants: {
    variant: {
      default:
        "text-zinc-900 bg-zinc-200 hover:bg-zinc-300 border-zinc-900 dark:text-white dark:hover:bg-zinc-200 dark:border-white dark:bg-white/20 dark:hover:bg-white/30",
      brand:
        "text-brand-500 bg-brand-400/20 hover:bg-brand-400/30 border-brand-500",
      destructive:
        "text-red-500 bg-red-400/20 hover:bg-red-400/30 border-red-500",
    },
  },
});

const ghostVariants = cva("", {
  variants: {
    variant: {
      default:
        "text-zinc-900 hover:bg-zinc-200 border-zinc-900 dark:text-white dark:hover:bg-zinc-200 dark:border-white dark:hover:bg-white/20",
      brand: "text-brand-500 hover:bg-brand-400/20 border-brand-500",
      destructive: "text-red-500 hover:bg-red-400/20 border-red-500",
    },
  },
});

export const buttonVariants = cva(
  "focus:ring-2 focus:ring-zinc-300 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-zinc-600 disabled:pointer-events-none dark:focus:ring-offset-zinc-900 transition-all duration-150 active:scale-95",
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
        ghost: ghostVariants({ variant: "default" }),
        "ghost-brand": ghostVariants({ variant: "brand" }),
        "ghost-destructive": ghostVariants({ variant: "destructive" }),
        subtle: subtleVariants({ variant: "default" }),
        "subtle-brand": subtleVariants({ variant: "brand" }),
        "subtle-destructive": subtleVariants({ variant: "destructive" }),
        link: "bg-transparent underline-offset-4 hover:underline text-zinc-900 dark:text-zinc-100 hover:bg-transparent dark:hover:bg-transparent",
        unstyled: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
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
