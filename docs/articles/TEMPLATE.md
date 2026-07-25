<!--
  Not a real page. Excluded from the site unconditionally (see
  .vitepress/config.mts's alwaysExcluded list) — reference only.

  How to write a new project article, inferred from the existing ones
  (read 1.md and 2.md too, this is a summary, not a replacement).
-->

# Article template & style notes

## Before writing

Add the source project's repo to this session (read access is enough) and
read its README/CLAUDE.md/docs, not just the code. The good details (real
bugs found, decisions made and why, actual stack versions) live there, not
in guesswork.

## File & wiring

- New file: next sequential number under `docs/articles/` (e.g. `4.md`).
- Start the file with:
  ```
  ---
  draft: true
  ---
  ```
  Remove this once the article is reviewed and ready to go live (see
  README's "Draft articles" section — draft pages render in `docs:dev` but
  are excluded from `docs:build`/deploy).
- Add nav/sidebar entries in `.vitepress/config.mts` and a project blurb in
  `docs/me/projects.md` as normal, uncommented, real entries. The `draft`
  frontmatter flag is what hides the article, not comments.

## Structure

1. `# Title: short punchy tagline` (colon-separated, not a dash).
2. `> *First issued on DD/MM/YYYY*`
3. Opening paragraph: what it is and the one-line hook, in plain prose.
4. Motivation: why this project, genuinely, not just tech-for-tech's-sake.
5. What it does: the actual flow/features. A numbered or bulleted walkthrough
   is fine.
6. Screenshots: use the `<figure>` block below. If the image doesn't exist
   yet, wrap the whole block in an HTML comment prefixed
   `<!-- TODO: screenshot, <what it should show> ... -->` rather than a
   broken `<img>`.
   ```html
   <figure style="display: flex; flex-direction: column; align-items: center;">
     <img src="/articles/N-1.png" alt="..." style="max-width: 600px;" />
     <figcaption style="font-size: 0.9em; color: gray; margin-top: 0.5em;">Caption</figcaption>
   </figure>
   ```
7. Technical considerations: stack, real architectural decisions, and (best
   part) real bugs/gotchas hit and how they were actually fixed. Specifics
   beat generalities.
8. Wrap-up: "Reflections and takeaways" or similar, short and honest, not a
   sales pitch.
9. Always end with exactly:
   ```
   [🤵🏻‍♂️ About me](/docs/me/background)

   [✉️ Contact me](mailto:herve.software@gmail.com)
   ```

Tech stack can be listed as `<Badge type="tip" vertical="bottom" text="X"/>`
chips (see `docs/me/work-experiences.md` or article 3 for examples).

## Voice and style, the important part

- First person, conversational, dry/self-deprecating humour welcome
  ("funnily enough, I have never beaten my game").
- Contractions throughout (it's, don't, I've), not formal writing.
- **No em dashes (—).** Checked: articles 1 and 2 use zero, ever. Use a
  comma, a colon, parentheses, or just split into two sentences instead.
  This is the single most common tell that a draft needs a pass.
- Parentheses for genuine asides are fine and used a lot in the existing
  articles. Semicolons are rare; prefer a period or "and"/"but".
- Headers can be playful ("But it's already done, so you can't do it
  again") or plain descriptive ("Game logic") — either is fine, match the
  project's personality.
- Concrete over abstract: name the actual library, the actual bug, the
  actual error message, not "a popular framework" or "some issues".
