import { H1 } from "./ui/Typography";

interface Props {
  title: string;
  description?: string;
  type?: string;
}

export const PageTitle = ({ title, description, type }: Props) => {
  return (
    <div className="my-10 rounded-2xl bg-gradient-to-b from-neutral-50 to-white p-4 animate-in fade-in slide-in-from-top-8 dark:from-neutral-800/30 dark:to-neutral-900 md:my-16">
      {type ? (
        <span className="text-sm font-semibold uppercase text-brand-500 dark:text-brand-400">
          {type}
        </span>
      ) : null}
      <H1 className="font-extrabold">{title}</H1>
      {description ? (
        <p className="text-base text-neutral-500 dark:text-neutral-300 md:text-2xl">
          {description}
        </p>
      ) : null}
    </div>
  );
};
