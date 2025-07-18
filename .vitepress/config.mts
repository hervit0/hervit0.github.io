import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ['link', {rel: 'icon', href: '/favicon.ico'}]
  ],
  title: "Welcome 👋",
  description: "Get to know me better",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Me', link: '/docs/me/background' },
      { text: 'Articles', link: '/docs/articles/2025-07-18-first' }
    ],

    sidebar: [
      {
        text: 'Me',
        items: [
          { text: 'About me', link: '/docs/me/background' },
          { text: 'Technical background', link: '/docs/me/technical' },
          { text: 'Reading', link: '/docs/me/reading' },
        ]
      },
      {
        text: 'Articles',
        items: [
          { text: 'Articles', link: '/docs/articles/2025-07-18-first' }
        ]
      }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present Hervé'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
