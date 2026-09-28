/**
 * Site-wide settings. Edit this file to change your name, links and defaults.
 *
 * Any link set to `null` is treated as "not provided yet": the site hides it
 * or shows a clearly marked placeholder instead of rendering a dead link.
 */
export const site = {
  /** Displayed in the header, footer and page titles. Please confirm spelling. */
  name: 'Tyler Brunsting',
  /** Monogram used in the header wordmark. */
  monogram: 'TB',
  /** Default <title> for the homepage and the suffix for other pages. */
  title: 'Tyler Brunsting — Sports Analytics',
  /** Default meta description. */
  description:
    'Data-driven sports analytics projects exploring questions across professional and collegiate sports.',
  locale: 'en_US',

  /** Default social-share image (1200×630), served from /public. */
  defaultOgImage: '/og/default.png',
  defaultOgImageAlt: 'Tyler Brunsting — Sports Analytics',

  /**
   * Your professional bio for the About page, one string per paragraph.
   * Leave empty until written: the public site then omits the section, and
   * `npm run dev` shows a marked placeholder instead.
   */
  bio: [] as string[],

  links: {
    /** Public GitHub profile (verified from the Transfer-Market-Efficiency repository owner). */
    github: 'https://github.com/tbrunsting' as string | null,
    /** Not provided yet. Example: 'https://www.linkedin.com/in/your-handle/' */
    linkedin: null as string | null,
    /** Not provided yet. Example: 'you@example.com' (no "mailto:") */
    email: null as string | null,
  },

  resume: {
    /**
     * Path under /public to your resume PDF, e.g. '/resume/tyler-brunsting-resume.pdf'.
     * Leave null until the real file has been added to public/resume/.
     */
    pdf: null as string | null,
    /** Optional "last updated" label, e.g. 'October 2026'. */
    updated: null as string | null,
  },

  nav: [
    { label: 'Projects', href: '/projects/' },
    { label: 'About', href: '/about/' },
    { label: 'Resume', href: '/resume/' },
    { label: 'Contact', href: '/contact/' },
  ],
} as const;

export type SiteConfig = typeof site;
