<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator of Vue.js',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' }
    ]
  }
]
</script>

<template>
  <div>
    <h1>Our Team</h1>
    <p>Say hello to our awesome team.</p>
    <VPTeamMembers :members="members" />
  </div>
</template>
