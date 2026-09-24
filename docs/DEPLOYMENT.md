# Deployment guide (for later — nothing here has been done)

The site is **local only**. There is no GitHub remote, nothing has been pushed,
GitHub Pages is not enabled, and no domain is configured. `tbrunsting.com` is the
*intended* domain; it has not been purchased or connected by this project.

Follow these steps only when you decide to publish.

---

## Before you start: a pre-launch checklist

- [ ] Replace placeholders (see the list in `README.md` → "What is still a placeholder").
- [ ] Add LinkedIn, email and resume in `src/config/site.ts` (or leave them hidden).
- [ ] Decide whether to keep the internal `/styleguide/` page (delete `src/pages/styleguide.astro` and `src/examples/` to remove it).
- [ ] Review the default share image `public/og/default.png`.
- [ ] Run `npm run build` locally and confirm it succeeds.
- [ ] Only use Power BI embed links you are comfortable making public. Do **not** use
      "Publish to web" for data you want to keep private.

---

## Step 1 — Create the GitHub repository (you do this)

1. Sign in at <https://github.com>.
2. Click **+** (top right) → **New repository**.
3. Name it (for example `tbrunsting-site`). Choose **Private** for now if you want
   to keep it hidden; you can make it public later. Note that GitHub Pages on a
   private repository requires a paid GitHub plan. On the free plan, the repository
   must be public for Pages to work.
4. Do **not** add a README, .gitignore or licence (the project already has them).
5. Click **Create repository** and copy the URL it shows (ends in `.git`).

## Step 2 — Connect and push (Claude can do this *after you approve*)

From the project folder:

```bash
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## Step 3 — Turn on GitHub Pages (you do this)

1. In the repository, open **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.

## Step 4 — Set the site URL (you do this)

In **Settings → Secrets and variables → Actions → Variables**, add:

| Variable | Value before a custom domain | Value with a custom domain |
|---|---|---|
| `SITE_URL` | `https://<your-username>.github.io` | `https://tbrunsting.com` |
| `BASE_PATH` | `/<repo-name>` | `/` (or leave unset) |

These control canonical URLs, social-share image URLs and the sitemap.

## Step 5 — Run the first deploy (you do this)

1. Open the **Actions** tab.
2. Choose **Deploy to GitHub Pages** → **Run workflow** → **Run workflow**.
3. When it finishes, the site URL appears on the run summary.

To deploy automatically on every push to `main`, uncomment the `push:` lines in
`.github/workflows/deploy.yml`.

---

## Custom domain (optional, later)

Only after you have purchased the domain from a registrar:

1. **Settings → Pages → Custom domain**: enter `tbrunsting.com` and save.
   GitHub then shows the DNS records it expects.
2. At your registrar, add the DNS records GitHub lists — typically four `A`
   records for the apex domain pointing to GitHub's Pages IP addresses, and a
   `CNAME` record for `www` pointing to `<your-username>.github.io`. Always copy
   the current values from GitHub's documentation:
   <https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site>
3. Wait for DNS to propagate (minutes to a few hours), then tick
   **Enforce HTTPS** in Settings → Pages.
4. Recommended: verify the domain for your account (GitHub → Settings →
   Pages → Add a domain) to protect against takeover.
5. Update the `SITE_URL` variable to `https://tbrunsting.com` and `BASE_PATH` to `/`,
   then re-run the workflow.

With the GitHub Actions deployment method, the custom domain is set in the
repository settings. A `public/CNAME` file is not required, so none has been
created.
