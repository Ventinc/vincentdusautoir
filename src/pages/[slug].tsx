import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import { Mdx } from "@/components/Mdx";
import { H1 } from "@/components/ui/Typography";
import { type NextPageWithLayout } from "@/pages/_app";
import { Page } from "@/utils/content";
import { type GetStaticPropsContext, type InferGetStaticPropsType } from "next";
import Head from "next/head";

export function getStaticPaths() {
  const paths = Page.getAll().map((page) => page.slug);

  return {
    paths,
    fallback: false,
  };
}

export function getStaticProps({
  params,
}: GetStaticPropsContext<{ slug: string[] }>) {
  const slug = params?.slug.join("/") ?? "";
  const page = Page.getAll().find((page) => {
    return page.slugAsParams === slug;
  });

  if (!page) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      page,
    },
    revalidate: 60,
  };
}

const PagePage: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ page }) => {
  return (
    <>
      <Head>
        <title>{page.title}</title>
      </Head>
      <article className="container">
        <div className="mb-6">
          <H1 className="font-extrabold">{page.title}</H1>
        </div>
        <Mdx code={page?.body.code} />
      </article>
    </>
  );
};

PagePage.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>;

export default PagePage;
