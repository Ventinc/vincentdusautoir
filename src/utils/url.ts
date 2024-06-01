import { env } from "~/env";

export function absoluteUrl(path: string) {
  return `${env.NEXT_PUBLIC_URL}${path}`;
}
