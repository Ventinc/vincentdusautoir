import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { PageTitle } from "@/components/PageTitle";
import { H2, Link, Text } from "@/components/ui/Typography";
import { siteConfig } from "@/config/site";
import { workContent } from "@/content/work";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { type NextPageWithLayout } from "./_app";
import { Card } from "@/components/Card";

const AboutPage: NextPageWithLayout = () => {
  return (
    <>
      <NextSeo title="About" />
      <div className="container">
        <PageTitle
          title="Vincent Dusautoir"
          description="A developer, that love to travel and take pictures"
          type="About"
        />

        <div className="grid grid-flow-row grid-cols-8 gap-4">
          <div className="col-span-8 rounded-2xl p-4 lg:col-span-5">
            <H2 className="mb-3 mt-0 font-extrabold">About Me</H2>
            <Text>
              I was born in 1997 in Marcq-En-Baroeul, France. After seing my
              uncle typing some characters on his computer and make a website, I
              started to learn about computer science and programming at 14
              years old.
            </Text>
            <Text>
              Since there I love tech challenges and challenging myself throught
              a lot of different problems.
            </Text>
            <Text>
              Except programming I love to travel, discover new countries, new
              people and differents cultures. I love taking pictures or videos
              to keep memory of past experiences I had.
            </Text>
            <Text>
              My main language is 🇫🇷 but I want to be better at 🇬🇧 so I learn by
              practicing on this website and social media.
            </Text>
          </div>
          <Card className="col-span-8 rounded-2xl bg-gradient-to-b from-brand-50 to-neutral-50 p-4 animate-in fade-in slide-in-from-right-8 dark:from-brand-950 dark:to-neutral-800 lg:col-span-3">
            <H2 className="mb-3 mt-0 font-extrabold">Work Experiences</H2>
            <div className="flex flex-col gap-3">
              <div className="flex rounded-xl bg-white p-3 dark:bg-zinc-900">
                <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg bg-yellow-200">
                  <AspectRatio ratio={1}>
                    <Image
                      alt="Available to opportunities"
                      className="object-contain"
                      fill
                      src="/images/work/opportunities.png"
                    />
                  </AspectRatio>
                </div>
                <div className="ml-3 flex flex-1 flex-col">
                  <p className="text-base font-semibold">
                    Looking for new opportunities
                  </p>
                  <p className="text-md text-zinc-700 dark:text-zinc-300">
                    Whether you&apos;re looking for an expert for a cool digital
                    project - or have a full-time job opportunity, you can
                    easily reach me by clicking{" "}
                    <Link href={siteConfig.links.email}>here</Link>
                  </p>
                </div>
              </div>
              {workContent.map((work) => (
                <div
                  key={work.name}
                  className="flex rounded-xl bg-white p-3 dark:bg-zinc-900"
                >
                  <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg bg-zinc-200">
                    <AspectRatio ratio={1}>
                      <Image
                        alt={work.name}
                        className="object-contain"
                        fill
                        src={work.icon}
                      />
                    </AspectRatio>
                  </div>
                  <div className="ml-3 flex flex-1 flex-col">
                    <p className="text-base font-semibold">
                      {work.name}
                      <span className="ml-2 text-xs font-normal text-zinc-600 dark:text-zinc-400">
                        {work.period.join(" - ")}
                      </span>
                    </p>
                    <p className="text-md text-zinc-700 dark:text-zinc-300">
                      {work.position}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

AboutPage.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>;

export default AboutPage;
