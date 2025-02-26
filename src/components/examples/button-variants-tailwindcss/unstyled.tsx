import { baseButtonVariants } from './base';
import { cn } from '#/utils/tailwind';

export function ButtonsUnstyled() {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className="flex items-end gap-2">
        <button
          className={cn(baseButtonVariants({ size: 'xs' }), 'bg-cyan-400')}
        >
          Button xs
        </button>
        <button
          className={cn(baseButtonVariants({ size: 'sm' }), 'bg-cyan-400')}
        >
          Button sm
        </button>
        <button
          className={cn(baseButtonVariants({ size: 'md' }), 'bg-cyan-400')}
        >
          Button md
        </button>
        <button
          className={cn(baseButtonVariants({ size: 'lg' }), 'bg-cyan-400')}
        >
          Button lg
        </button>
        <button
          className={cn(baseButtonVariants({ size: 'xl' }), 'bg-cyan-400')}
        >
          Button xl
        </button>
      </div>

      <div className="flex items-end gap-2">
        <button
          className={cn(
            baseButtonVariants({ size: 'xs', rounded: 'none' }),
            'bg-cyan-400'
          )}
        >
          Button xs
        </button>
        <button
          className={cn(
            baseButtonVariants({ size: 'sm', rounded: 'none' }),
            'bg-cyan-400'
          )}
        >
          Button sm
        </button>
        <button
          className={cn(
            baseButtonVariants({ size: 'md', rounded: 'none' }),
            'bg-cyan-400'
          )}
        >
          Button md
        </button>
        <button
          className={cn(
            baseButtonVariants({ size: 'lg', rounded: 'none' }),
            'bg-cyan-400'
          )}
        >
          Button lg
        </button>
        <button
          className={cn(
            baseButtonVariants({ size: 'xl', rounded: 'none' }),
            'bg-cyan-400'
          )}
        >
          Button xl
        </button>
      </div>

      <div className="flex items-end gap-2">
        <button
          className={cn(
            baseButtonVariants({ size: 'xs', rounded: 'full' }),
            'bg-cyan-400'
          )}
        >
          Button xs
        </button>
        <button
          className={cn(
            baseButtonVariants({ size: 'sm', rounded: 'full' }),
            'bg-cyan-400'
          )}
        >
          Button sm
        </button>
        <button
          className={cn(
            baseButtonVariants({ size: 'md', rounded: 'full' }),
            'bg-cyan-400'
          )}
        >
          Button md
        </button>
        <button
          className={cn(
            baseButtonVariants({ size: 'lg', rounded: 'full' }),
            'bg-cyan-400'
          )}
        >
          Button lg
        </button>
        <button
          className={cn(
            baseButtonVariants({ size: 'xl', rounded: 'full' }),
            'bg-cyan-400'
          )}
        >
          Button xl
        </button>
      </div>
    </div>
  );
}
