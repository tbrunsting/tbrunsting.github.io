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
  bio: [
    "I'm Tyler Brunsting, a Business & Process Analyst at NCS and a graduate of Cedarville University, where I studied Finance with minors in Business Analytics and IT Management.",
    'Professionally, I work at the intersection of data, business processes and decision-making. My work includes building reporting systems, analyzing operational performance, investigating data-quality issues and translating complex findings into practical recommendations.',
    "Outside of work, I combine my background in analytics with my lifelong interest in sports. Having played soccer for most of my life, I've always been interested in what separates successful teams from the rest. My sports analytics projects give me an opportunity to explore those questions using Python, SQL, statistical modeling and interactive dashboards.",
    'I created this website to document my analytical process, share my findings and build projects across professional and collegiate sports.',
  ] as string[],

  links: {
    /** Public GitHub profile (verified from the Transfer-Market-Efficiency repository owner). */
    github: 'https://github.com/tbrunsting' as string | null,
    /** Verified by Tyler. */
    linkedin: 'https://www.linkedin.com/in/tyler-brunsting/' as string | null,
    /** Public contact address, provided by Tyler (no "mailto:"). */
    email: 'tylerbrunsting60@gmail.com' as string | null,
  },

  resume: {
    /**
     * Path under /public to your CURRENT resume PDF, e.g. '/resume/tyler-brunsting-resume.pdf'.
     * Leave null until the new file has been added to public/resume/. Before
     * setting it, open the PDF and confirm it shows only the contact details you
     * want public (no outdated university email).
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
