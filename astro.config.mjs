// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { site as siteConfig } from './src/config/site.ts';

/**
 * The site is published as the GitHub user site https://tbrunsting.github.io/
 * (repository tbrunsting/tbrunsting.github.io), served from the root.
 * Local development works without the domain; these values only shape
 * canonical URLs, share-image URLs, robots.txt and the sitemap.
 *
 * Environment overrides (e.g. for a future custom domain; see docs/DEPLOYMENT.md):
 * SITE_URL  — the public origin
 * BASE_PATH — only for serving from a sub-path
 */
const SITE_URL = process.env.SITE_URL || 'https://tbrunsting.github.io';
const BASE_PATH = process.env.BASE_PATH || '/';

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [
    mdx(),
    // Keep the dev-only styleguide, and the resume page until a PDF exists, out of the sitemap.
    sitemap({
      filter: (page) => !page.includes('/styleguide') && (siteConfig.resume.pdf !== null || !page.includes('/resume')),
    }),
  ],
  markdown: {
    shikiConfig: {
      // Dark theme; the block background is overridden to charcoal in prose.css.
      theme: 'github-dark',
      wrap: false,
    },
  },
  server: {
    // Local only: the dev server listens on this machine, not the network.
    host: 'localhost',
    port: 4321,
  },
});
