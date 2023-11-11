import { cn } from "@/utils/tailwind";
import React, { type ReactNode } from "react";

export const Marquee = ({
  children,
  pauseOnHover = false,
  className,
  reverse,
}: {
  children: ReactNode[];
  pauseOnHover?: boolean;
  reverse?: boolean;
  className?: string;
}) => {
  return (
    <div className={cn(`flex w-full overflow-hidden`, className)}>
      <div
        className={cn(`animate-marquee flex w-max gap-[--gap]`, {
          "hover:[animation-play-state:paused]": pauseOnHover,
          "[animation-direction:reverse]": reverse,
        })}
      >
        {children}
        {children}
      </div>
    </div>
  );
};
