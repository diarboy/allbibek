import { defineConfig } from 'vitepress';
import mathjax3 from 'markdown-it-mathjax3';

export default defineConfig({
  lang: 'en-US',
  title: 'Allbibek',
  description: 'Vite & Vue powered static site generator.',
  base: '/allbibek/',

  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/allbibek/favicon.svg' }],
    ['link', { rel: 'stylesheet', href: '/allbibek/custom.css' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css' }],
  ],
  
  markdown: {
    config: (md) => {
      md.use(mathjax3); 
    },
  },

  themeConfig: {
    logo: '/favicon.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide' },
      { text: 'Contact', link: '/contact' },
      {
        text: 'Resources', 
        items: [
          { 
            text: 'Internal Link', 
            items: [
              { text: 'Link 1', link: '/resources/internal/' },
            ],
          },
          {
            text: 'External Links',
            items: [
              { text: 'Framer', link: 'https://allbibek.framer.website/' },
              { text: 'GitHub', link: 'https://github.com/diarboy' },
              { text: 'Meta', link: 'https://facebook.com/ardibukan' },
            ],
          },
          
        ],
      },
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/guide' },
          { text: 'Tutorials', link: '/tutorials' },
          { text: 'Full-Stack Website', link: '/blog/full-stack' },
        ],
      },
      {
        text: 'Note',
        items: [
          { text: 'Coretax', link: '/blog/coretax' },
          { text: 'Jenis dan Peran dalam Perdagangan', link: '/blog/perdagangan' },
        ],
      },
    ],
    

    socialLinks: [
      { icon: 'github', link: 'https://github.com/diarboy' },
      { icon: 'atlassian', link: 'https://allbibek.framer.website' },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Allbibek'
    }
  },
});
