import { type ReactNode } from 'react';

export const GithubCardDesign: React.FC<{ children?: ReactNode }> = ({
  children,
}) => {
  return (
    <div
      id="card"
      className="relative z-auto block h-40 min-w-[200px] max-w-[300px] overflow-hidden rounded-xl bg-zinc-100 p-1 dark:bg-zinc-700"
    >
      <div
        id="blob"
        className="absolute top-0 left-0 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500 blur-lg"
      />
      <div
        id="inner"
        className="relative h-full w-full rounded-lg bg-white/75 p-8 dark:bg-zinc-900/75"
      >
        {children}
      </div>
    </div>
  );
};
