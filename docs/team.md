---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const coreTeam = [
  {
    avatar: 'https://github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator of Vue & VitePress',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
  {
    avatar: 'https://github.com/diarboy.png',
    name: 'Diarboy',
    title: 'Web-designer, Developer',
    links: [
      { icon: 'github', link: 'https://github.com/diarboy' },
      { icon: 'twitter', link: 'https://twitter.com/allbibek' }
    ]
  }
]

const contributors = [
   { 
    avatar: 'https://github.com/antfu.png',
    name: 'Anthony Fu',
    title: 'Vue/Vite Ecosystem Maintainer',
    links: [
      { icon: 'github', link: 'https://github.com/antfu' },
      { icon: 'twitter', link: 'https://twitter.com/antfu7' }
    ]
  },
  {
    avatar: 'https://github.com/patak-dev.png',
    name: 'Matias Capeletto',
    title: 'Vite Core Team',
    links: [
      { icon: 'github', link: 'https://github.com/patak-dev' }
    ]
  },
  {
    avatar: 'https://github.com/bluwy.png',
    name: 'Harlan Wilton',
    title: 'VitePress/Vite Team',
    links: [
      { icon: 'github', link: 'https://github.com/bluwy' }
    ]
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Meet Our Team
    </template>
    <template #lead>
      Our team consists of passionate open-source contributors who maintain and improve VitePress.
    </template>
  </VPTeamPageTitle>

  <!-- Core Team -->
  <VPTeamMembers size="medium" :members="coreTeam" />

  <!-- Contributors -->
  <VPTeamMembers size="small" :members="contributors" />
</VPTeamPage>
