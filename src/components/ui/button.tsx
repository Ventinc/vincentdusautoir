import { cn } from '#/utils/tailwind';

function Button({ className, ...props }: React.ComponentProps<'button'>) {
  return (
    <button
      className={cn(
        'h-7 rounded-lg text-sm bg-indigo-100 text-indigo-600 px-3 cursor-pointer hover:bg-indigo-200',
        className
      )}
      {...props}
    />
  );
}

export { Button };
