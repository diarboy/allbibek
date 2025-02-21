<script setup>
import { computed } from "vue";

const props = defineProps({
  pinUrl: String,
  pinSize: {
    type: String,
    default: "medium",
    validator: (value) => ["small", "medium", "large"].includes(value),
  },
});

// Tentukan ukuran berdasarkan pinSize
const frameSize = computed(() => {
  switch (props.pinSize) {
    case "small":
      return { width: "200", height: "300" };
    case "large":
      return { width: "400", height: "600" };
    default: // Medium (default)
      return { width: "345", height: "445" };
  }
});

// Ambil ID pin dari URL
const pinId = computed(() => {
  const match = props.pinUrl.match(/pin\/(\d+)\//);
  return match ? match[1] : null;
});
</script>

<template>
  <iframe
    v-if="pinId"
    :src="`https://assets.pinterest.com/ext/embed.html?id=${pinId}`"
    :width="frameSize.width"
    :height="frameSize.height"
    frameborder="0"
    scrolling="no"
  ></iframe>
  <p v-else>Error: Invalid Pinterest URL</p>
</template>
