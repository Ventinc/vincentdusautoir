import { navigationConfig } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/utils/tailwind";
import { Avatar, AvatarFallback, AvatarImage } from "@ui/Avatar";
import Link from "next/link";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();

  return (
    <div className="container pointer-events-none sticky top-2 z-10 my-4 flex justify-center md:top-6 md:my-12">
      <div className="pointer-events-auto flex flex-1 gap-4 rounded-full bg-white/40 backdrop-blur-sm dark:bg-zinc-900/40 md:flex-none">
        <Avatar
          className="hidden h-12 w-12 cursor-pointer rounded-full border-2 border-zinc-200 bg-white p-1 text-zinc-700 transition-all duration-150 hover:scale-105 hover:border-brand-200 hover:text-purple-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:border-purple-400/30 dark:hover:text-purple-300 md:block"
          asChild
        >
          <Link href="/">
            <AvatarImage src={siteConfig.avatar} alt="Avatar" />
            <AvatarFallback>VD</AvatarFallback>
          </Link>
        </Avatar>

        <div className="flex h-12 flex-1 items-center rounded-full border-2 border-zinc-200 bg-white hover:border-purple-200 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-purple-400/30 md:flex-none md:px-1">
          <Avatar className="mr-1 h-12 w-12 p-2 md:hidden" asChild>
            <Link href="/">
              <AvatarImage src={siteConfig.avatar} alt="Avatar" />
              <AvatarFallback>VD</AvatarFallback>
            </Link>
          </Avatar>
          <nav className="flex items-center gap-px">
            {navigationConfig.mainNav.map((navLink) => (
              <Link
                key={navLink.href}
                href={navLink.href}
                className={cn(
                  "cursor-pointer rounded-full px-3 py-1 text-lg font-medium text-zinc-700 transition-all duration-150 hover:bg-purple-500/30 hover:text-purple-800 dark:text-zinc-50 dark:hover:text-purple-300",
                  {
                    "bg-purple-500/40 text-purple-800 dark:text-purple-300":
                      router.pathname.includes(navLink.href),
                  }
                )}
              >
                {navLink.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};
