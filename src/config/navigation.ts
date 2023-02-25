interface NavigationConfig {
  mainNav: { title: string; href: string }[];
}

export const navigationConfig: NavigationConfig = {
  mainNav: [
    {
      title: "Posts",
      href: "/posts",
    },
    {
      title: "About",
      href: "/about",
    },
  ],
};
