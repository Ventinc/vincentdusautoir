import { useToggleTheme } from "@/hooks/useToggleTheme";
import { useTheme } from "next-themes";

export function TailwindIndicator() {
  const toggleTheme = useToggleTheme();

  return (
    <div className="flex gap-1">
      <div className="flex h-6 w-8 items-center justify-center rounded-lg bg-cyan-400 font-mono text-xs text-zinc-900">
        <div className="block sm:hidden">xs</div>
        <div className="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
          sm
        </div>
        <div className="hidden md:block lg:hidden xl:hidden 2xl:hidden">md</div>
        <div className="hidden lg:block xl:hidden 2xl:hidden">lg</div>
        <div className="hidden xl:block 2xl:hidden">xl</div>
        <div className="hidden 2xl:block">2xl</div>
      </div>
      <button
        onClick={toggleTheme}
        className="pointer-events-auto h-6 rounded-lg bg-zinc-900 px-1 text-center font-mono text-xs text-white dark:bg-white dark:text-zinc-900"
      >
        <span className="hidden dark:block">DARK</span>
        <span className="dark:hidden">LIGHT</span>
      </button>
    </div>
  );
}
