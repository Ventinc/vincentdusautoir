import { cn } from "@/utils/tailwind";

interface CalloutProps {
  icon?: string;
  children?: React.ReactNode;
  type?: "default" | "warning" | "danger";
  className?: string;
}

export function Callout({
  children,
  icon,
  type = "default",
  className,
  ...props
}: CalloutProps) {
  return (
    <div
      className={cn(
        "my-6 flex items-start rounded-2xl border border-l-4 bg-gradient-to-r p-4",
        {
          "border-zinc-200 from-zinc-100 to-zinc-50 dark:border-zinc-500 dark:from-zinc-500/30 dark:to-zinc-500/10":
            type === "default",
          "border-red-200 from-red-100 to-red-50 dark:border-red-500 dark:from-red-500/30 dark:to-red-500/10":
            type === "danger",
          "border-yellow-200 from-yellow-100 to-yellow-50 dark:border-yellow-500 dark:from-yellow-500/30 dark:to-yellow-500/10":
            type === "warning",
        },
        className
      )}
      {...props}
    >
      {icon && <span className="mr-4 text-2xl">{icon}</span>}
      <div>{children}</div>
    </div>
  );
}
