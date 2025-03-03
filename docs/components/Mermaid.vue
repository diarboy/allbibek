<script setup>
import { onMounted, ref } from 'vue'
import mermaid from 'mermaid'

const chart = ref(`<div class="mermaid">graph TD; A-->B; A-->C; B-->D; C-->D;</div>`)

onMounted(() => {
  mermaid.initialize({ startOnLoad: true })
  setTimeout(() => {
    mermaid.init(undefined, document.querySelectorAll('.mermaid'))
  }, 500)
})
</script>

<template>
  <div v-html="chart"></div>
</template>
