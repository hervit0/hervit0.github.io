import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ['link', {rel: 'icon', href: '/public/favicon.ico'}]
  ],
  title: "Hello, I'm Hervé",
  description: "Get to know me better",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Me', link: '/me' },
      { text: 'Articles', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Articles',
        collapsed: true,
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Me',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }

    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present Herve'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
