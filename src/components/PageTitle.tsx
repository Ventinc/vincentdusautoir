import { H1 } from "./ui/Typography";

interface Props {
  title: string;
  description?: string;
  type?: string;
}

export const PageTitle = ({ title, description, type }: Props) => {
  return (
    <div className="my-10 rounded-2xl bg-gradient-to-b from-zinc-50 to-white p-4 animate-in fade-in slide-in-from-top-8 dark:from-zinc-800/30 dark:to-zinc-900 md:my-16">
      {type ? (
        <span className="text-sm font-semibold uppercase text-purple-400">
          {type}
        </span>
      ) : null}
      <H1 className="font-extrabold">{title}</H1>
      {description ? (
        <p className="text-base text-zinc-500 dark:text-zinc-300 md:text-2xl">
          {description}
        </p>
      ) : null}
    </div>
  );
};
