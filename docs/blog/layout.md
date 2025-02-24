---
layout: page
title: "Judul Blog Saya"
---
date: 2025-02-23
sections:
  - type: hero
    title: "Judul dan Headline"
    subtitle: "Menyampaikan pesan utama blog"
    image:
      src: "/images/banner-16x9.jpg"
      alt: "Gambar Banner 16:9"
  - type: fullwidth
    content: |
      Ini adalah paragraf penuh yang memenuhi satu kolom penuh. Di sini kamu dapat menuliskan cerita atau penjelasan lengkap mengenai topik utama blog.
  - type: centered
    content: "Ini adalah paragraf pendek yang dipusatkan untuk penekanan informasi penting."
  - type: two-columns
    left: |
      Ini adalah konten untuk kolom kiri. Gunakan kolom ini untuk menyampaikan informasi tambahan atau pendukung.
    right: |
      Ini adalah konten untuk kolom kanan. Sesuaikan isinya agar seimbang dengan kolom kiri.
  - type: image-text
    layout: left-image
    image:
      src: "/images/gambar-3x4.jpg"
      alt: "Gambar 3:4 di sebelah kiri"
    content: |
      Paragraf ini menjelaskan suatu topik dengan gambar (rasio 3:4) ditampilkan di sebelah kiri. Teks mengalir di samping gambar.
  - type: image-text
    layout: right-image
    image:
      src: "/images/gambar-3x4-2.jpg"
      alt: "Gambar 3:4 di sebelah kanan"
    content: |
      Paragraf ini menjelaskan suatu topik dengan gambar (rasio 3:4) ditampilkan di sebelah kanan. Teks mengalir di samping gambar.
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  },
  ...
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      The development of VitePress is guided by an international
      team, some of whom have chosen to be featured below.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
