// @ts-check
<<<<<<< HEAD
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
  experimental: {
    svg: true,
    clientPrerender: true,
  },
=======
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],
>>>>>>> 17a2bcf (Initial commit from Astro)
});
