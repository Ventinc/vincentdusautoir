import {
  GithubIcon,
  InstagramIcon,
  MailIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import { Card } from "~/components/card";
import { Icon } from "~/components/ui/icon";
import { Link } from "~/components/ui/typography";

type Link = {
  title: string;
  icon: React.ReactElement;
  url: string;
};

type LinkSection = {
  title: string;
  links: Link[];
};

const linkSections: LinkSection[] = [
  {
    title: "Social",
    links: [
      {
        title: "Youtube",
        url: "https://youtube.com/@vincent.dusautoir",
        icon: <YoutubeIcon />,
      },
      {
        title: "Instagram",
        url: "https://instagram.com/vincent.dusautoir",
        icon: <InstagramIcon />,
      },
      {
        title: "Twitter",
        url: "https://twitter.com/vincent_dstr",
        icon: <TwitterIcon />,
      },
    ],
  },
  {
    title: "Projects",
    links: [
      {
        title: "SculptEmail",
        url: "https://sculptemail.com",
        icon: <MailIcon />,
      },
    ],
  },
  {
    title: "Development",
    links: [
      {
        title: "Github",
        url: "https://github.com/ventinc",
        icon: <GithubIcon />,
      },
    ],
  },
];

const LinksPage = () => {
  return (
    <div className="container flex max-w-xl flex-col gap-4">
      {linkSections.map((linkSection) => (
        <div key={linkSection.title}>
          <p className="pb-3 font-display text-2xl font-bold">
            {linkSection.title}
          </p>
          <div className="flex flex-col gap-2">
            {linkSection.links.map((link) => (
              <Card
                className="group relative flex flex-row items-center gap-4 p-4 px-5"
                key={link.url}
              >
                <Icon className="text-2xl" asChild>
                  {link.icon}
                </Icon>
                <Link
                  className="no-underline before:absolute before:inset-0 before:content-['']"
                  href={link.url}
                  target="_blank"
                >
                  {link.title}
                </Link>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LinksPage;
