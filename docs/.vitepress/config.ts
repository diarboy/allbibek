import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'en-US',
  title: 'Allbibek',
  description: 'Vite & Vue powered static site generator.',
  base: '/allbibek/', // This should match your GitHub repository name

  themeConfig: {
    nav: [
      { text: 'Example', link: '/example' },
    ],

    sidebar: [
      {
        items: [
          { text: 'Example', link: '/example' },
        ],
      },
    ],
  },
});