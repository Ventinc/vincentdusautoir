import { cva } from 'class-variance-authority';

const solidVariants = cva('hover:bg-opacity-90', {
  variants: {
    variant: {
      default: 'bg-neutral-900 text-white ',
      brand: 'bg-indigo-600 text-white ',
      destructive: 'bg-red-600 text-white ',
      success: 'bg-green-600 text-white ',
    },
  },
});

const outlineVariants = cva('border-2', {
  variants: {
    variant: {
      default: 'text-neutral-950 hover:bg-neutral-100 border-neutral-950/80 ',
      brand: 'text-indigo-500 hover:bg-indigo-500/10 border-indigo-500 ',
      destructive: 'text-red-500 hover:bg-red-500/10 border-red-500 ',
      success: 'text-green-500 hover:bg-green-500/10 border-green-500 ',
    },
  },
});

const subtleVariants = cva('', {
  variants: {
    variant: {
      default: 'text-neutral-900 bg-neutral-200 hover:bg-neutral-300 ',
      brand: 'text-indigo-500 bg-indigo-500/10 hover:bg-indigo-500/20 ',
      destructive: 'text-red-500 bg-red-500/10 hover:bg-red-500/20 ',
      success: 'text-green-500 bg-green-500/10 hover:bg-green-500/20 ',
    },
  },
});

const ghostVariants = cva('', {
  variants: {
    variant: {
      default: 'text-neutral-900 hover:bg-neutral-200 ',
      brand: 'text-indigo-500 hover:bg-indigo-400/10 ',
      destructive: 'text-red-500 hover:bg-red-400/10 ',
      success: 'text-green-500 hover:bg-green-400/10 ',
    },
  },
});

export const buttonVariants = cva(
  'focus-visible:ring-2 focus-visible:ring-neutral-300 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer',
  {
    variants: {
      variant: {
        default: solidVariants({ variant: 'default' }),
        brand: solidVariants({ variant: 'brand' }),
        destructive: solidVariants({ variant: 'destructive' }),
        success: solidVariants({ variant: 'success' }),
        outline: outlineVariants({ variant: 'default' }),
        'outline-indigo': outlineVariants({ variant: 'brand' }),
        'outline-destructive': outlineVariants({ variant: 'destructive' }),
        'outline-success': outlineVariants({ variant: 'success' }),
        ghost: ghostVariants({ variant: 'default' }),
        'ghost-indigo': ghostVariants({ variant: 'brand' }),
        'ghost-destructive': ghostVariants({ variant: 'destructive' }),
        'ghost-success': ghostVariants({ variant: 'success' }),
        subtle: subtleVariants({ variant: 'default' }),
        'subtle-indigo': subtleVariants({ variant: 'brand' }),
        'subtle-destructive': subtleVariants({ variant: 'destructive' }),
        'subtle-success': subtleVariants({ variant: 'success' }),
        link: 'bg-transparent underline-offset-4 hover:underline text-neutral-900 ',
        unstyled: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);
