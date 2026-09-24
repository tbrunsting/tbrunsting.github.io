import { defineCollection, type SchemaContext } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Projects collection.
 *
 * Structured frontmatter holds only what must render consistently in cards,
 * heroes, metadata and links. The analytical narrative itself is the freeform
 * MDX body — there are deliberately no required "Problem / Data / Methodology /
 * Findings" fields.
 *
 * Every media and link field is optional, so a project with no dashboard, no
 * screenshots and no publication date still builds.
 */

/** A local image with required alt text. Paths are relative to the MDX file. */
const imageWithAlt = (image: SchemaContext['image']) =>
  z.object({
    src: image(),
    alt: z.string().min(1, { error: 'Images need descriptive alt text.' }),
  });

const projects = defineCollection({
  // The entry id (and URL slug) comes from the filename, or from a `slug`
  // frontmatter field when present.
  loader: glob({ pattern: '**/[^_]*.mdx', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** Optional override for the URL segment: /projects/<slug>/ */
      slug: z.string().optional(),

      /** Free text so new sports never require a schema change, e.g. 'European Soccer', 'NFL'. */
      sport: z.string(),
      /** Optional secondary grouping, e.g. 'Transfer market', 'Player evaluation'. */
      category: z.string().optional(),
      /** Display label for the period analysed, e.g. '2017/18–2023/24'. */
      timePeriod: z.string(),

      /** One or two sentences for cards and meta descriptions. */
      summary: z.string().max(300),
      /** The central analytical question the project answers. */
      question: z.string(),

      featured: z.boolean().default(false),
      status: z.enum(['in-progress', 'published', 'archived']).default('in-progress'),
      /** Hide from production builds while still visible in local dev. */
      draft: z.boolean().default(false),

      publishedAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),

      tools: z.array(z.string()).default([]),

      /** Verified, project-specific figures only. Values are strings so units/formatting stay exact. */
      stats: z
        .array(
          z.object({
            label: z.string(),
            value: z.string(),
            note: z.string().optional(),
          }),
        )
        .default([]),

      thumbnail: imageWithAlt(image).optional(),
      heroImage: imageWithAlt(image).optional(),

      dashboard: z
        .object({
          /** 'in-development' shows the temporary placeholder; 'live' expects real assets/links. */
          status: z.enum(['in-development', 'live']).default('in-development'),
          /** Real screenshot of the dashboard. Never add a mock-up here. */
          preview: imageWithAlt(image).optional(),
          /** Public link to open the interactive dashboard in a new tab. */
          url: z.url().optional(),
          /** Secure embed URL for the desktop iframe. */
          embedUrl: z.url().optional(),
          /** Optional short note shown with the dashboard area. */
          note: z.string().optional(),
        })
        .prefault({}),

      githubUrl: z.url().optional(),

      /**
       * Static, manually created share image in /public, e.g. '/og/transfer-market-efficiency.png'.
       * Omit to use the site default. The build fails if the file does not exist.
       */
      ogImage: z
        .string()
        .startsWith('/', { error: 'ogImage must be a path under /public starting with "/".' })
        .optional(),
      ogImageAlt: z.string().optional(),
    }),
});

export const collections = { projects };
