import { buttonVariants } from './variants';
import { baseButtonVariants } from './base';
import { cn } from '#/utils/tailwind';

const Buttons: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className="flex items-end gap-2">
      <button className={cn(baseButtonVariants({ size: 'xs' }), className)}>
        Button xs
      </button>
      <button className={cn(baseButtonVariants({ size: 'sm' }), className)}>
        Button sm
      </button>
      <button className={cn(baseButtonVariants({ size: 'md' }), className)}>
        Button md
      </button>
      <button className={cn(baseButtonVariants({ size: 'lg' }), className)}>
        Button lg
      </button>
      <button className={cn(baseButtonVariants({ size: 'xl' }), className)}>
        Button xl
      </button>
    </div>
  );
};

export function ButtonsSolid() {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <Buttons className={buttonVariants({ variant: 'default' })} />
      <Buttons className={buttonVariants({ variant: 'brand' })} />
      <Buttons className={buttonVariants({ variant: 'destructive' })} />
    </div>
  );
}
