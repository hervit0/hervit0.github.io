# hervit0.github.io

Personal site/portfolio, built with [VitePress](https://vitepress.dev/). Vue components (`.vitepress/components`) and default-theme markdown pages (`docs/`, `index.md`) live side by side.

## Requirements

- Node.js
- [pnpm](https://pnpm.io/) (`packageManager` field pins the version — see `package.json`)

## Setup

```shell
pnpm install
```

## Local development

```shell
pnpm run docs:dev
```

Serves the site with hot reload. Draft articles (see below) are visible here.

## Build

```shell
pnpm run docs:build
```

Produces the static site into `.vitepress/dist`. Draft articles are excluded from this output.

```shell
pnpm run docs:preview
```

Serves the built `.vitepress/dist` locally, to sanity-check a production build before deploying.

## Deploy

```shell
pnpm run docs:deploy
```

Runs `docs:build` (via the `predocs:deploy` hook), then pushes `.vitepress/dist` to the `gh-pages` branch using [`gh-pages`](https://github.com/tschaub/gh-pages). GitHub Pages is configured (repo Settings → Pages) to serve from that branch — there is no CI/CD pipeline, publishing is always this one manual command.

## Draft articles (local-only preview)

An article can be written and reviewed locally without ever reaching the deployed site. Add `draft: true` to the top of its frontmatter:

```md
---
draft: true
---

# My unfinished article
```

- `pnpm run docs:dev` — draft renders normally, and its nav/sidebar entry shows up, so it can be reviewed like any other page.
- `pnpm run docs:build` (and therefore `docs:deploy`) — the file is excluded entirely via `srcExclude` in `.vitepress/config.mts` (not just unlinked: the page, its compiled chunk, and its sidebar entry are all absent from `.vitepress/dist`).

This is driven purely by the file's own frontmatter (`.vitepress/config.mts` scans `docs/articles/*.md` for `draft: true`), so nothing else needs updating when a draft is added or finished — just remove the frontmatter flag once the article should go live, commit, and deploy.
