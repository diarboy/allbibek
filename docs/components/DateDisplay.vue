<template>
  <div class="article-date">
    <span>Published on: {{ formattedDate }}</span>
  </div>
</template>

<script setup>
import { usePageData } from 'vitepress'
import { computed } from 'vue'

// Get the page data (which includes the front matter)
const pageData = usePageData()

// Get the 'date' field from front matter and format it
const formattedDate = computed(() => {
  const date = pageData.frontmatter.date
  return date ? new Date(date).toLocaleDateString() : 'No date available'
})
</script>

<style scoped>
.article-date {
  font-size: 14px;
  color: #888;
  margin-bottom: 20px;
}
</style>
