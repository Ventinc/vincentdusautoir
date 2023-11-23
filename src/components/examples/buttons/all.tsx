import { buttonVariants } from "~/components/ui/button";
import { baseButtonVariants } from "~/components/ui/button/base-button";
import { cn } from "~/utils/tailwind";

const Buttons: React.FC<{ className?: string; text: string }> = ({
  className,
  text,
}) => {
  return (
    <div className="flex items-end gap-2">
      <button className={cn(baseButtonVariants({ size: "xs" }), className)}>
        {text} xs
      </button>
      <button className={cn(baseButtonVariants({ size: "sm" }), className)}>
        {text} sm
      </button>
      <button className={cn(baseButtonVariants({ size: "md" }), className)}>
        {text} md
      </button>
      <button className={cn(baseButtonVariants({ size: "lg" }), className)}>
        {text} lg
      </button>
      <button className={cn(baseButtonVariants({ size: "xl" }), className)}>
        {text} xl
      </button>
    </div>
  );
};

export const ButtonsAll = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <Buttons
        text="Solid"
        className={buttonVariants({ variant: "default" })}
      />

      <Buttons
        text="Outline"
        className={buttonVariants({ variant: "outline" })}
      />

      <Buttons text="Ghost" className={buttonVariants({ variant: "ghost" })} />

      <Buttons
        text="Subtle"
        className={buttonVariants({ variant: "subtle" })}
      />
    </div>
  );
};
