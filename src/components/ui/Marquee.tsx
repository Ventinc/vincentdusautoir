"use client";
import { cn } from "~/utils/tailwind";
import React, { type CSSProperties, type ReactNode } from "react";

export const Marquee = ({
  children,
  pauseOnHover = false,
  className,
  gap,
  duration,
  reverse,
}: {
  children: ReactNode[];
  pauseOnHover?: boolean;
  gap: CSSProperties["gap"];
  duration: CSSProperties["animationDuration"];
  reverse?: boolean;
  className?: string;
}) => {
  return (
    <div
      className={cn(`flex w-full overflow-hidden`, className)}
      style={
        {
          "--gap": gap,
          "--duration": duration,
        } as CSSProperties
      }
    >
      <div
        className={cn(`flex w-max animate-marquee gap-[--gap]`, {
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
