// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

/**
 * Site URL and base path are read from environment variables so that:
 *  - local development never depends on a live domain, and
 *  - the eventual deployment can set the real URL without code changes.
 *
 * SITE_URL  — the public origin, e.g. https://tbrunsting.com (intended, not yet configured)
 * BASE_PATH — only needed when serving from a sub-path such as
 *             https://<user>.github.io/<repo>/ (leave unset for a custom domain)
 *
 * See docs/DEPLOYMENT.md.
 */
const SITE_URL = process.env.SITE_URL ?? 'http://localhost:4321';
const BASE_PATH = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [
    mdx(),
    // The internal component reference page is kept out of the sitemap.
    sitemap({ filter: (page) => !page.includes('/styleguide') }),
  ],
  markdown: {
    shikiConfig: {
      // Light theme to match the light long-form reading surface.
      theme: 'github-light',
      wrap: false,
    },
  },
  server: {
    // Local only: the dev server listens on this machine, not the network.
    host: 'localhost',
    port: 4321,
  },
});
