import { cn } from '#/utils/tailwind';
import { cva, type VariantProps } from 'class-variance-authority';
import React, { useMemo } from 'react';
import { Slot } from 'radix-ui';
import { Loader2Icon } from 'lucide-react';

export type IconProps = React.ComponentProps<'svg'> & {
  asChild?: boolean;
};

export function Icon({ asChild, className, ...props }: IconProps) {
  const Comp = (asChild ? Slot.Slot : 'svg') as 'svg';

  return (
    <Comp
      className={cn(
        'inline-block h-[1em] w-[1em] shrink-0 align-middle leading-[1em]',
        className
      )}
      {...props}
    />
  );
}

export const baseButtonVariants = cva(
  'font-medium text-center relative whitespace-nowrap align-middle outline-none inline-flex items-center justify-center',
  {
    variants: {
      size: {
        xs: 'text-xs h-6 min-w-6 px-2',
        sm: 'text-sm h-8 min-w-8 px-3',
        md: 'text-base h-10 min-w-10 px-4',
        lg: 'text-lg h-12 min-w-12 px-6',
        xl: 'text-xl h-14 min-w-14 px-8',
      },
      rounded: {
        none: 'rounded-none',
        md: 'rounded-md',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      size: 'md',
      rounded: 'md',
    },
  }
);

export type BaseButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof baseButtonVariants> & {
    isLoading?: boolean;
    leftIcon?: React.ReactElement;
    rightIcon?: React.ReactElement;
    asChild?: boolean;
  };

export function BaseButton({
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
}: BaseButtonProps) {
  const Comp = (asChild ? Slot.Slot : 'button') as 'button';

  const { icon, iconPlacement } = useMemo(() => {
    let icon = rightIcon ? rightIcon : leftIcon;

    if (isLoading) {
      icon = <Loader2Icon className="animate-spin-slow" />;
    }

    return {
      icon,
      iconPlacement: rightIcon ? ('right' as const) : ('left' as const),
    };
  }, [isLoading, leftIcon, rightIcon]);

  return (
    <Comp
      className={cn(baseButtonVariants({ size, rounded, className }))}
      disabled={disabled ?? isLoading}
      data-state={isLoading ? 'loading' : undefined}
      {...props}
    >
      {icon && iconPlacement === 'left' ? (
        <span
          className={cn(
            { 'mr-2': !!children },
            'inline-flex shrink-0 self-center'
          )}
        >
          <Icon asChild>{icon}</Icon>
        </span>
      ) : null}
      <Slot.Slottable>{children}</Slot.Slottable>
      {icon && iconPlacement === 'right' ? (
        <span
          className={cn(
            { 'ml-2': !!children },
            'inline-flex shrink-0 self-center'
          )}
        >
          <Icon asChild>{icon}</Icon>
        </span>
      ) : null}
    </Comp>
  );
}
