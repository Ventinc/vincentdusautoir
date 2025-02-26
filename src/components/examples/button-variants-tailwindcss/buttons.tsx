import { cn } from '#/utils/tailwind';
import { BaseButton } from './base';
import { buttonVariants } from './variants';
import type { VariantProps } from 'class-variance-authority';

export function Button({
  className,
  variant,
  ...props
}: React.ComponentProps<typeof BaseButton> &
  VariantProps<typeof buttonVariants>) {
  return (
    <BaseButton
      className={cn(buttonVariants({ variant, className }))}
      {...props}
    />
  );
}

export function IconButton({
  className,
  children,
  ...props
}: Omit<React.ComponentProps<typeof Button>, 'leftIcon' | 'rightIcon'>) {
  return (
    <Button {...props} className={cn('p-0', className)}>
      {props.isLoading ? null : children}
    </Button>
  );
}
