import { cn } from "~/utils/tailwind";
import type { ReactNode } from "react";

export const Card = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl border border-b-2 border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-700 dark:bg-neutral-800",
        className,
      )}
    >
      {children}
    </div>
  );
};
