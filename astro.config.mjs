// @ts-check
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import remarkCodeImport from 'remark-code-import';
import remarkGfm from 'remark-gfm';
import path from 'path';

// https://astro.build/config
export default defineConfig({
  site: 'https://vincentdusautoir.com',
  integrations: [
    mdx({
      optimize: true,
      rehypePlugins: [],
      remarkPlugins: [
        remarkGfm,
        [remarkCodeImport, { rootDir: path.join(process.cwd(), './src') }],
      ],
      shikiConfig: {
        theme: 'dark-plus',
      },
    }),
    sitemap(),
    react(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
