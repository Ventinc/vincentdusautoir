import { cn } from "@/utils/tailwind";
import { cva, type VariantProps } from "class-variance-authority";
import React, { type ComponentPropsWithoutRef, useMemo } from "react";
import { TbLoader } from "react-icons/tb";
import { Slot, Slottable } from "@radix-ui/react-slot";

export const baseButtonVariants = cva(
  "font-medium text-center relative whitespace-nowrap align-middle outline-none inline-flex items-center justify-center",
  {
    variants: {
      size: {
        xs: "text-xs h-6 min-w-6 px-2",
        sm: "text-sm h-8 min-w-8 px-3",
        md: "text-base h-10 min-w-10 px-4",
        lg: "text-lg h-12 min-w-12 px-6",
        xl: "text-xl h-14 min-w-14 px-8",
      },
      rounded: {
        none: "rounded-none",
        md: "rounded-md",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      size: "md",
      rounded: "md",
    },
  },
);

export type BaseButtonProps = ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof baseButtonVariants> & {
    isLoading?: boolean;
    leftIcon?: React.ReactElement;
    rightIcon?: React.ReactElement;
    asChild?: boolean;
  };

export const BaseButton = React.forwardRef<HTMLButtonElement, BaseButtonProps>(
  (
    {
      className,
      size,
      rounded,
      leftIcon,
      rightIcon,
      children,
      isLoading,
      disabled,
      asChild,
      ...props
    },
    ref,
  ) => {
    const Comp = (asChild ? Slot : "button") as "button";

    const { icon, iconPlacement } = useMemo(() => {
      let icon = rightIcon ? rightIcon : leftIcon;

      if (isLoading) {
        icon = <TbLoader className="animate-spin-slow" />;
      }

      return {
        icon,
        iconPlacement: rightIcon ? ("right" as const) : ("left" as const),
      };
    }, [isLoading, leftIcon, rightIcon]);

    return (
      <Comp
        className={cn(baseButtonVariants({ size, rounded, className }))}
        ref={ref}
        disabled={disabled || isLoading}
        data-state={isLoading ? "loading" : undefined}
        {...props}
      >
        {icon && iconPlacement === "left" ? (
          <span
            className={cn(
              { "mr-2": !!children },
              "inline-flex shrink-0 self-center",
            )}
          >
            {icon}
          </span>
        ) : null}
        <Slottable>{children}</Slottable>
        {icon && iconPlacement === "right" ? (
          <span
            className={cn(
              { "ml-2": !!children },
              "inline-flex shrink-0 self-center",
            )}
          >
            {icon}
          </span>
        ) : null}
      </Comp>
    );
  },
);

BaseButton.displayName = "BaseButton";
