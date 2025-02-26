import { defineConfig } from 'vitepress';
import mathjax3 from 'markdown-it-mathjax3';

export default defineConfig({
  lang: 'en-US',
  title: 'allbibek.',
  description: 'Develop, Build, and Innovate with Confidence',
  base: '/allbibek/',

  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/allbibek/favicon.svg' }],
    ['link', { rel: 'stylesheet', href: '/allbibek/custom.css' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css' }],
    ['link', { rel: 'stylesheet', href: 'https://api.fontshare.com/v2/css?f=manrope&display=swap' }],
    // ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap' }],
  ],
  
  markdown: {
    config: (md) => {
      md.use(mathjax3); 
    },
  },

  themeConfig: {
    lastUpdated: true,
    logo: '/favicon.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide' },
      { text: 'Contact', link: '/contact' },
      { text: 'Gallery', link: '/gallery' },
      {
        text: 'Blog/Resources', 
        items: [
          { 
            text: 'Internal Link', 
            items: [
              { text: 'Blog', link: '/blog/intonesia' },
              { text: 'Teams', link: '/team' },
              { text: '404', link: '/resources/internal/' },
            ],
          },
          {
            text: 'External Links',
            items: [
              { text: 'GitHub', link: 'https://github.com/diarboy' },
              { text: 'Framer', link: 'https://allbibek.framer.website/' },
              { text: 'Meta', link: 'https://facebook.com/ardibukan' },
            ],
          },
          
        ],
      },
      // { text: 'Menu Baru', link: '/menu-baru' },
    ],

    sidebar: [
      {
        text: 'Guide',
        collapsible: true,
        collapsed: false,
        items: [
          { text: 'Getting Started', link: '/guide' },
          { text: 'Tutorials', link: '/tutorials' },
          { text: 'Full-Stack Website', link: '/blog/full-stack' },
          { text: 'Dasar Regex', link: '/blog/regex' },
          { text: 'Layout', link: '/blog/layout' },
          { text: 'jadwal', link: '/blog/jadwal' },
        ],
      },
      {
        text: 'Blog',
        collapsible: true,
        collapsed: false,
        items: [
          { text: 'Coretax', link: '/blog/coretax' },
          { text: 'Jenis dan Peran dalam Perdagangan', link: '/blog/perdagangan' },
          { text: 'Intonesia', link: '/blog/intonesia' },
        ],
      },
    ],
    

    socialLinks: [
      { icon: 'github', link: 'https://github.com/diarboy' },
      { icon: 'atlassian', link: 'https://allbibek.framer.website' },
    ],
    
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present allbibek'
    },
    outline: [2, 3],
  },
});
