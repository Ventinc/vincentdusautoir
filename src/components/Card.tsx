import { cn } from "@/utils/tailwind";
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
        "rounded-2xl border border-neutral-300 bg-gray-50 p-4 dark:border-neutral-600 dark:bg-neutral-800",
        className,
      )}
    >
      {children}
    </div>
  );
};
