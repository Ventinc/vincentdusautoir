import { Slot } from "@radix-ui/react-slot";
import React, { Children } from "react";
import { cn } from "@/utils/tailwind";

export type IconProps = React.ComponentPropsWithoutRef<"svg"> & {
  asChild?: boolean;
};

export const Icon = React.forwardRef<React.ElementRef<"svg">, IconProps>(
  ({ asChild, className, ...props }, ref) => {
    const Comp = (asChild ? Slot : "svg") as "svg";

    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-block h-[1em] w-[1em] shrink-0 align-middle leading-[1em]",
          className,
        )}
        {...props}
      />
    );
  },
);

Icon.displayName = "Icon";

interface CreateIconOptions {
  /**
   * The icon `svg` viewBox
   * @default "0 0 24 24"
   */
  viewBox?: string;
  /**
   * The `svg` path or group element
   * @type React.ReactElement | React.ReactElement[]
   */
  path?: React.ReactElement | React.ReactElement[];
  /**
   * If the `svg` has a single path, simply copy the path's `d` attribute
   */
  d?: string;
  /**
   * The display name useful in the dev tools
   */
  displayName?: string;
  /**
   * Default props automatically passed to the component; overwritable
   */
  defaultProps?: IconProps;
}

export function createIcon(options: CreateIconOptions) {
  const {
    viewBox = "0 0 24 24",
    d: pathDefinition,
    displayName,
    defaultProps = {},
  } = options;
  const path = Children.toArray(options.path);

  const Comp = React.forwardRef<React.ElementRef<typeof Icon>, IconProps>(
    (props, ref) => (
      <Icon ref={ref} viewBox={viewBox} {...defaultProps} {...props}>
        {path.length ? path : <path fill="currentColor" d={pathDefinition} />}
      </Icon>
    ),
  );

  Comp.displayName = displayName;

  return Comp;
}
