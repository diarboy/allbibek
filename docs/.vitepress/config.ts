import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'en-US',
  title: 'Allbibek',
  description: 'Vite & Vue powered static site generator.',
  base: '/allbibek/',

  themeConfig: {
    logo: 'logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide' },
      { text: 'Tutorials', link: '/tutorials' },
      { text: 'Contact', link: '/contact' },
      {
        text: 'Resources', // Dropdown lainnya
        items: [
          {
            text: 'External Links',
            items: [
              { text: 'Framer', link: 'allbibek.framer.website' },
              { text: 'GitHub', link: 'https://github.com' },
            ],
          },
          { text: 'Internal Link', link: '/resources/internal/' },
        ],
      },
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/guide' },
          { text: 'Tutorials', link: '/tutorials' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/diarboy' },
      { icon: 'twitter', link: 'https://twitter.com/allbibek' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Allbibek'
    }
  },
});