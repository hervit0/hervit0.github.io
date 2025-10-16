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
                    {text: 'Argeebeedle', link: '/docs/articles/2'}

                ]
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
            {icon: 'linkedin', link: 'https://www.linkedin.com/in/herv%C3%A9-ah-leung-40401b90/?locale=en_US'}
        ]
    }
})
