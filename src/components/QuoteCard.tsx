import { api } from "@/utils/api";

export const QuoteCard = () => {
  // Just to simplify the usage of a seed and random with NextJS
  const { data: quote } = api.quote.random.useQuery(undefined, {
    refetchOnMount: false,
  });

  return (
    <blockquote className="relative flex flex-col justify-center rounded-2xl bg-emerald-50 p-8 animate-in  fade-in slide-in-from-right-8 dark:bg-emerald-600/20">
      {quote ? (
        <>
          <p className="font-serif text-2xl">{quote.sentence}</p>
          <p>- {quote.author ?? "Unknown"}</p>
        </>
      ) : null}
      <span className="absolute bottom-2 right-3 text-xs">
        A quote tells a story in a few words.
      </span>
    </blockquote>
  );
};
