import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    head: [
        ['link', {rel: 'icon', href: '/public/favicon.ico'}]
    ],
    title: "Welcome 👋",
    description: "Get to know me better",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Me', link: '/docs/me/background'},
            {text: 'Articles', link: '/docs/articles/2025-08-01-argeebeedle'}
        ],

        sidebar: [
            {
                text: 'Me',
                items: [
                    {text: 'About me', link: '/docs/me/background'},
                    {text: 'Technical background', link: '/docs/me/technical'},
                    {text: 'Work experiences', link: '/docs/me/work-experiences'},
                    {text: 'Reading', link: '/docs/me/reading'},
                    {text: 'Projects', link: '/docs/me/projects'},
                ]
            },
            {
                text: 'Articles',
                items: [
                    // { text: 'First', link: '/docs/articles/2025-07-18-first' }
                    {text: 'Argeebeedle', link: '/docs/articles/2025-08-01-argeebeedle'}

                ]
            }
        ],

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2025-present Hervé'
        },

        // https://simpleicons.org/?q=email
        socialLinks: [
            {icon: 'maildotru', link: 'mailto:herveherveherve@aol.com'},
            {icon: 'github', link: 'https://github.com/hervit0'},
            {icon: 'linkedin', link: 'https://www.linkedin.com/in/herv%C3%A9-ah-leung-40401b90/?locale=en_US'}
        ]
    }
})
