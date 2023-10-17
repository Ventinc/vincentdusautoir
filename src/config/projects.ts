type Project = {
  name: string;
  href: string;
  icon: string;
  description: string;
};

export const projects = [
  {
    name: "SculptEmail",
    href: "https://sculptemail.com",
    icon: "sculptemail.png",
    description:
      "Create custom email templates effortlessly. Drag, drop, and export to HTML/Text. Perfect for designers & developers.",
  },
] satisfies Project[];
