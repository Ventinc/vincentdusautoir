import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { getHighlighter, loadTheme } from "shiki";
import rehypePrettyCode from "rehype-pretty-code";
import { codeImport as remarkCodeImport } from "remark-code-import";
import path from "path";
import { rehypeComponentFileSource } from "./src/utils/rehype";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
};

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    date: {
      type: "date",
      required: true,
    },
    published: {
      type: "boolean",
      default: false,
    },
    image: {
      type: "string",
      required: true,
    },
  },
  computedFields,
}));

export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `pages/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    published: {
      type: "boolean",
      default: false,
    },
  },
  computedFields: {
    ...computedFields,
    slug: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath.replace("pages/", "")}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "./src/content",
  documentTypes: [Post, Page],
  mdx: {
    remarkPlugins: [remarkGfm, remarkCodeImport],
    rehypePlugins: [
      rehypeSlug,
      rehypeComponentFileSource,
      [
        rehypeExternalLinks,
        {
          target: "_blank",
        },
      ],
      [
        rehypePrettyCode,
        {
          getHighlighter: async () => {
            const theme = await loadTheme(
              path.join(process.cwd(), "src/styles/code-theme.json"),
            );
            return await getHighlighter({ theme });
          },
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
  },
});
