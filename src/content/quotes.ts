export type Quote = {
  sentence: string;
  author: string | null;
};

export const quotes: Quote[] = [
  {
    sentence: "Do what you can't",
    author: "Casey Neistat",
  },
  {
    sentence:
      "No one cares what you can do, everyones care what you can do for them",
    author: null,
  },
  {
    sentence: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    sentence: "Habits are the compound interest of self-improvement",
    author: "James Clear",
  },
  {
    sentence:
      "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.",
    author: "Steve Jobs",
  },
  {
    sentence: "The only source of knowledge is experience",
    author: "Albert Einstein",
  },
  {
    sentence: "You make your own luck if you stay at it long enough",
    author: "Naval Ravikant",
  },
  {
    sentence:
      "If you do what you've always done, you'll get what you've always gotten",
    author: "Tony Robbins",
  },
];
