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

## Design tokens (provisional)

| Token | Current value | File |
|---|---|---|
| Accent | `#e3a53b` amber (on navy) / `#8a5708` (accent text on light) | `src/styles/tokens.css` |
| Display font | Archivo (variable) | `src/styles/tokens.css` + `global.css` import |
| Body font | Inter (variable) | same |
| Navy / off-white | `#0a1424`–`#34507a` / `#f7f5f0` | `src/styles/tokens.css` |

To change a font, install the Fontsource package (e.g. `npm i @fontsource-variable/manrope`),
swap the `@import` at the top of `global.css`, and update `--font-display` or `--font-body`.

## What is still a placeholder

- About page bio (marked "Placeholder")
- LinkedIn and email (marked "To be added")
- Resume PDF (placeholder panel)
- Transfer Market Efficiency: dashboard (temporary placeholder), case study (provisional intro only),
  thumbnail, dashboard preview, publication date, project share image
- Homepage "Analytics profile" and "Tools & skills" copy is draft wording, so please review it
