import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'en-US',
  title: 'Allbibek',
  description: 'Vite & Vue powered static site generator.',
  base: '/allbibek/',

  themeConfig: {
    logo: 'https://raw.githubusercontent.com/vuejs/vitepress/main/docs/public/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/example' },
      { text: 'Tutorials', link: '/tutorials' },
      { text: 'Contact', link: '/contact' },
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/example' },
          { text: 'Tutorials', link: '/tutorials' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourusername' },
      { icon: 'twitter', link: 'https://twitter.com/yourusername' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Allbibek'
    }
  },
});