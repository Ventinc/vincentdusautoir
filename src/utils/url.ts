import { env } from "~/env/client.mjs";

export function absoluteUrl(path: string) {
  return `${env.NEXT_PUBLIC_URL}${path}`;
}
