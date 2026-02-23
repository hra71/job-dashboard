# Deploy this project to GitHub Pages

This repository contains a small static site. Use the steps below to publish it to GitHub Pages (public & persistent).

Quick steps

1. Create a GitHub repository (either on the website or with the `gh` CLI).
2. Push this project to the repo's `main` branch.
3. GitHub Actions will automatically deploy the site using the workflow in `.github/workflows/pages.yml`.

Commands (replace `USERNAME` and `REPO`):

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

Optional: create repository and push in one step with GitHub CLI:

```bash
gh repo create USERNAME/REPO --public --source=. --push
```

After pushing

- Wait a minute for GitHub Actions to run. The Pages workflow will publish the repository root.
- The site URL will be one of:
  - `https://USERNAME.github.io/REPO/` (project site)
  - `https://USERNAME.github.io/` (if repository is named `USERNAME.github.io`)

If you need a custom domain, add a `CNAME` file with your domain and configure DNS.

Files added here:
- `.github/workflows/pages.yml` — GitHub Actions workflow to deploy Pages automatically.
- `.nojekyll` — disables Jekyll processing (useful when filenames start with `_`).

If you want, I can create the remote repo for you (requires GitHub credentials/`gh` CLI), or I can help with the push commands.
