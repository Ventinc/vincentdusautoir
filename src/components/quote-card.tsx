import { Card } from "~/components/card";
import { quotes } from "~/content/quotes";

const getRandomQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)]!;
};

export const QuoteCard = () => {
  const quote = getRandomQuote();

  return (
    <Card className="relative bg-emerald-50 p-8 animate-in fade-in slide-in-from-right-8 dark:bg-emerald-600/20">
      <blockquote className="flex flex-col justify-center">
        <p className="font-serif text-2xl">{quote.sentence}</p>
        <p>- {quote.author ?? "Unknown"}</p>
      </blockquote>
      <span className="absolute bottom-2 right-3 text-xs">
        A quote tells a story in a few words.
      </span>
    </Card>
  );
};
