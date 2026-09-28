# Deployment guide

**Current setup:** the site is published from the repository
[`tbrunsting/tbrunsting.github.io`](https://github.com/tbrunsting/tbrunsting.github.io)
to **https://tbrunsting.github.io/** by `.github/workflows/deploy.yml`, which runs
on every push to `main`. Pages uses **Settings → Pages → Source: GitHub Actions**.
No custom domain is configured; `tbrunsting.com` is only a possible future domain.

To publish a change: commit it and `git push`. The Actions tab shows each deploy.

The steps below record how it was set up, for reference.

The Transfer Market Efficiency dashboard is a **separate** site, deployed from
the analytics repository at `https://tbrunsting.github.io/Transfer-Market-Efficiency/`.
Nothing here changes it, and it keeps working whichever option below you pick.

---

## Before you publish

- [ ] Optional but recommended: add your bio, LinkedIn, email and resume in
      `src/config/site.ts` (see README → "Personal details still to add").
      The site publishes cleanly without them; the items are simply hidden.
- [ ] Set `publishedAt:` in `src/content/projects/transfer-market-efficiency.mdx`
      if you want a publication date shown on the case study.
- [ ] Run `npm run check` and `npm run build` locally; both should pass.

---

## Step 1 — Choose the repository name (you decide)

| Repository name | Site address | Notes |
|---|---|---|
| **`tbrunsting.github.io`** (recommended) | `https://tbrunsting.github.io/` | Your GitHub *user site*. Clean root URL, and it sits alongside the dashboard at `/Transfer-Market-Efficiency/` with no conflict. |
| anything else, e.g. `tbrunsting-site` | `https://tbrunsting.github.io/tbrunsting-site/` | A *project site* under a sub-path. |

The workflow works out the correct site URL and base path from the repository
name automatically, so no settings are needed for either choice.

## Step 2 — Create the repository (you do this)

1. Sign in at <https://github.com> → **+** → **New repository**.
2. Enter the name you chose. Choose **Public**, because GitHub Pages on a private
   repository requires a paid plan.
3. Do **not** add a README, `.gitignore` or licence, since the project already
   has them. Click **Create repository**.

## Step 3 — Connect and push (Claude can do this *after you approve*)

From the project folder:

```bash
git remote add origin https://github.com/tbrunsting/<repository-name>.git
git push -u origin main
```

## Step 4 — Turn on GitHub Pages (you do this)

1. In the new repository, open **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.

## Step 5 — Run the first deploy (you do this)

1. Open the **Actions** tab → **Deploy to GitHub Pages** → **Run workflow**.
2. When it finishes, the site URL appears on the run summary.

The workflow only runs when started by hand. To deploy on every push to
`main`, uncomment the two `push:` lines in `.github/workflows/deploy.yml`.

### Optional repository variables

Only needed for a custom domain. Set them in **Settings → Secrets and variables
→ Actions → Variables**:

| Variable | Value |
|---|---|
| `SITE_URL` | e.g. `https://tbrunsting.com` |
| `BASE_PATH` | `/` |

These control canonical URLs, share-image URLs, `robots.txt` and the sitemap.

---

## Custom domain (optional, later)

Only after you own the domain:

1. **Settings → Pages → Custom domain**: enter the domain and save. GitHub then
   lists the DNS records it expects.
2. Add those records at your registrar. Copy the current values from
   <https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site>.
3. Once DNS has propagated, tick **Enforce HTTPS**, and verify the domain for
   your account (GitHub → Settings → Pages) to protect against takeover.
4. Set the `SITE_URL` and `BASE_PATH` variables above and re-run the workflow.

If the custom domain is set on the **user site** (`tbrunsting.github.io`),
GitHub also serves your project sites under it, so the dashboard would move to
`https://<domain>/Transfer-Market-Efficiency/` and GitHub redirects the old
address. If you do this, update the dashboard links in
`src/content/projects/transfer-market-efficiency.mdx` to match.

With the GitHub Actions deployment method, the custom domain is set in the
repository settings, so no `public/CNAME` file is needed.
