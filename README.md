# tbrunsting-site — Sports analytics portfolio (V1, local)

A static Astro site for long-form sports analytics projects. **Local development
only.** Nothing is deployed, and there is no Git remote. See
[`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) for how publishing will work later.

## Everyday commands

Run these from this folder (`C:\Users\tyler\Projects\tbrunsting-site`):

| Command | What it does |
|---|---|
| `npm run dev` | Start the local preview at <http://localhost:4321/> (stop with **Ctrl + C**) |
| `npm run build` | Build the production site into `dist/` |
| `npm run preview` | Serve the built `dist/` locally to double-check a build |
| `npm run check` | Type-check Astro, TypeScript and content frontmatter |
| `npm run og` | Convert SVG share cards in `design/og/` into PNGs in `public/og/` |

## Where things live

```
src/
  config/site.ts          Your name, links (GitHub/LinkedIn/email), resume PDF path
  styles/tokens.css       Design tokens: accent colour, fonts, spacing, radii
  styles/global.css       Base styles, buttons, badges, layout helpers
  styles/prose.css        Long-form case-study typography
  content.config.ts       Project frontmatter schema (validated at build time)
  content/projects/*.mdx  One file per project: frontmatter + freeform case study
  components/             Site components (header, cards, hero, dashboard…)
  components/mdx/         Case-study components usable in any project MDX file
  data/skills.ts          Tools & skills lists (homepage + About)
  pages/                  Routes: /, /projects, /projects/[slug], /about, /resume, /contact
public/
  og/default.png          Default 1200×630 social-share image
  favicon.svg
design/og/                Editable SVG sources for share images
```

## Adding a project

1. Create `src/content/projects/<slug>.mdx`. The filename becomes the URL: `/projects/<slug>/`.
2. Fill in the frontmatter. `title`, `sport`, `timePeriod`, `summary` and `question`
   are required, and everything else is optional. The schema in `src/content.config.ts`
   documents every field.
3. Write the case study below the frontmatter in whatever order suits the project.
   These components work without imports:
   `Callout`, `CodeBlock`, `DataPipeline`, `DashboardEmbed`, `Figure`, `FindingCard`,
   `FindingGrid`, `Formula`, `TechnicalNote`, `PlaceholderNote`. Markdown tables become
   scrollable automatically. See every component in action at <http://localhost:4321/styleguide/>.
4. Put project images in `src/assets/projects/<slug>/` and reference them with a
   relative path, for example `thumbnail: { src: ../../assets/projects/<slug>/cover.png, alt: "…" }`.
5. The homepage grid and Projects page update automatically.

### Adding the real dashboard later

In the project's frontmatter:

```yaml
dashboard:
  status: live
  preview:
    src: ../../assets/projects/transfer-market-efficiency/dashboard.png
    alt: Describe what the dashboard shows
  url: https://…          # "Open Interactive Dashboard" link
  embedUrl: https://…     # desktop iframe (hidden on phones)
```

Anything left out stays hidden. Missing values never produce an empty iframe or a dead button.

### Adding a project share image

Export a 1200×630 PNG to `public/og/<slug>.png`, then set `ogImage: /og/<slug>.png` in the
project frontmatter. The build fails if the file is missing, so a share image is never
referenced before it exists.

## Design tokens ("Sports Editorial")

| Token | Current value | File |
|---|---|---|
| Orange accent | `#ff7049` (buttons, rules, labels on dark) / `#c2451f` (small orange text on warm white, for contrast) | `src/styles/tokens.css` |
| Charcoal | `#111a20` primary, `#1b2830` secondary, `#0b1115` header/footer | same |
| Warm white | `#faf8f3` / `#f3efe6` | same |
| Text | `#17212b` main, `#55626c` muted; slate `#71808b` for decoration only | same |
| Display font | Archivo (variable), weight 800–850 | `src/styles/tokens.css` + `global.css` import |
| Body font | Inter (variable) | same |

Primary buttons use charcoal text on orange (6.4:1 contrast). White text on this orange
would fail WCAG AA.

The previous navy-and-gold design is saved as the Git tag `v1-navy-gold`
(`git checkout v1-navy-gold` to look at it, `git checkout main` to come back).

## Photography

All photos are from Unsplash under the [Unsplash License](https://unsplash.com/license)
(free to use, including commercially; attribution appreciated but not required).
Credits appear in the site footer.

| File | Used for | Photographer | Source |
|---|---|---|---|
| `src/assets/photos/hero-soccer.jpg` | Homepage hero | Konstantin Evdokimov | [Unsplash](https://unsplash.com/photos/white-and-black-soccer-ball-on-black-sand-JP0qiWQzjrg) |
| `src/assets/photos/hero-football.jpg` | Homepage hero | Isaac Lind | [Unsplash](https://unsplash.com/photos/red-and-white-football-ball-lr-5SjADBXg) |
| `src/assets/photos/hero-basketball.jpg` | Homepage hero | Kylie Osullivan | [Unsplash](https://unsplash.com/photos/brown-and-black-basketball-ball-BfaBLVCBTI8) |
| `src/assets/photos/hero-baseball.jpg` | Homepage hero | Ben Hershey | [Unsplash](https://unsplash.com/photos/white-and-red-baseball-on-brown-soil-at-daytime-xJPCSJkxRys) |
| `src/assets/photos/tme-hero.jpg` | Project hero | Timur Shakerzianov | [Unsplash](https://unsplash.com/photos/a-soccer-player-stands-on-the-ball-px_TLsiL28M) |
| `src/assets/photos/tme-featured.jpg` | Featured card / project card | Amr Taha | [Unsplash](https://unsplash.com/photos/a-person-standing-on-top-of-a-soccer-ball-RuFuCkow5uw) |

To swap a hero photo, replace the file (or change the import) in `src/data/photos.ts` and
adjust its `position` so the ball stays in frame. Astro converts every photo to optimised
WebP at several sizes during the build.

Tool icons come from [Simple Icons](https://simpleicons.org) (CC0). Power BI has no
licensed icon there (Microsoft logos were removed at Microsoft's request), so it uses a
neutral chart glyph.

To change a font, install the Fontsource package (e.g. `npm i @fontsource-variable/manrope`),
swap the `@import` at the top of `global.css`, and update `--font-display` or `--font-body`.

## What is still a placeholder

- About page bio (marked "Placeholder")
- LinkedIn and email (marked "To be added")
- Resume PDF (placeholder panel)
- Transfer Market Efficiency: dashboard (temporary placeholder), case study (provisional intro only),
  dashboard preview screenshot, publication date, project share image. Its photos are licensed
  editorial images, not dashboard screenshots.
- Homepage "Analytics profile" and "Tools & skills" copy is draft wording, so please review it
