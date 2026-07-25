import {defineConfig} from 'vitepress'
import {existsSync, readdirSync, readFileSync} from 'node:fs'
import {dirname, resolve} from 'node:path'
import {fileURLToPath} from 'node:url'

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), '..')

// `vitepress build` runs with NODE_ENV=production; `vitepress dev` does not.
// Used to gate draft content: visible locally, excluded from what actually
// gets built/deployed.
const isProd = process.env.NODE_ENV === 'production'

// A page opts out of production by adding `draft: true` to its frontmatter.
// Single source of truth lives on the file itself, so nav/sidebar and
// srcExclude below can't drift out of sync with each other.
function isDraft(relPath: string): boolean {
    const abs = resolve(rootDir, relPath)
    if (!existsSync(abs)) return false
    const match = readFileSync(abs, 'utf-8').match(/^---\r?\n([\s\S]*?)\r?\n---/)
    return match ? /^draft:\s*true\s*$/m.test(match[1]) : false
}

function draftFilesIn(dir: string): string[] {
    const abs = resolve(rootDir, dir)
    if (!existsSync(abs)) return []
    return readdirSync(abs)
        .filter(f => f.endsWith('.md'))
        .map(f => `${dir}/${f}`)
        .filter(isDraft)
}

const draftArticles = draftFilesIn('docs/articles')

// Reference/instructional docs, never real pages, regardless of environment.
const alwaysExcluded = ['docs/articles/TEMPLATE.md']

function articleFile(link: string): string {
    return `${link.replace(/^\//, '')}.md`
}

export default defineConfig({
    head: [
        ['link', {rel: 'icon', href: '/public/favicon.ico'}]
    ],
    title: "Welcome 👋",
    description: "Get to know me better",
    // Draft pages (frontmatter `draft: true`) are dropped from the production
    // build entirely — not just unlinked, actually absent from
    // `.vitepress/dist` and therefore from what `docs:deploy` pushes to
    // GitHub Pages. In `vitepress dev` this list is empty, so drafts render
    // normally while working on them locally.
    srcExclude: [...alwaysExcluded, ...(isProd ? draftArticles : [])],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: '🏠 Home', link: '/'},
            {text: '🤵🏻‍♂️ Me', link: '/docs/me/background'},
            {text: '📰 Articles', link: '/docs/articles/2'}
        ],

        sidebar: [
            {
                text: 'Me',
                items: [
                    {text: 'About me', link: '/docs/me/background'},
                    {text: 'Technical background', link: '/docs/me/technical'},
                    {text: 'Work experiences', link: '/docs/me/work-experiences'},
                    // {text: 'Feedback', link: '/docs/me/feedback'},
                    {text: 'Reading', link: '/docs/me/reading'},
                    {text: 'Projects', link: '/docs/me/projects'},
                ]
            },
            {
                text: 'Articles',
                items: [
                    // {text: 'Working From Home', link: '/docs/articles/1'},
                    {text: 'Argeebeedle', link: '/docs/articles/2'},
                    {text: 'Nova Vera', link: '/docs/articles/3'},
                ].filter(item => !isProd || !isDraft(articleFile(item.link)))
            }
        ],

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2025-present Hervé'
        },

        // https://simpleicons.org/?q=email
        socialLinks: [
            {icon: 'maildotru', link: 'mailto:herve.software@gmail.com'},
            {icon: 'github', link: 'https://github.com/hervit0'},
            {icon: 'linkedin', link: 'hwww.linkedin.com/in/herve-ah-leung'}
        ]
    }
})
