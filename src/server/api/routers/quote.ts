import { quotes } from "~/content/quotes";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const quoteRouter = createTRPCRouter({
  random: publicProcedure.query(() => {
    return quotes[Math.floor(Math.random() * quotes.length)]!;
  }),
});
