# CLAUDE.md

Personal site/portfolio. VitePress, pnpm. See README.md for commands
(dev/build/preview/deploy) and how GitHub Pages publishing works.

## Writing a new project article

1. Add the source project's repo to the session first (read access is
   enough). Ground the article in its real README/CLAUDE.md/docs/history,
   not guesswork.
2. Follow `docs/articles/TEMPLATE.md` for structure, wiring, and style
   rules (also skim an existing article, e.g. `docs/articles/2.md`).
3. New file: next number under `docs/articles/`, starting with
   `draft: true` frontmatter until reviewed and approved.
4. Wire nav/sidebar (`.vitepress/config.mts`) and `docs/me/projects.md` as
   normal, real entries — the `draft` flag is what hides it, not comments.

## Style, non-negotiable

No em dashes (—). Existing articles use zero. Use a comma, colon,
parentheses, or split the sentence instead.
