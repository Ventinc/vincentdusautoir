import { useTheme } from "next-themes";

export const useToggleTheme = () => {
  const { theme, setTheme, systemTheme } = useTheme();

  const isDark = theme === "system" ? systemTheme === "dark" : theme === "dark";

  return () => setTheme(isDark ? "light" : "dark");
};
