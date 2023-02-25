import tailwindConfig from "tailwind.config.cjs";
import resolveConfig from "tailwindcss/resolveConfig";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const tailwind = resolveConfig(tailwindConfig);
export const theme = tailwind.theme;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
