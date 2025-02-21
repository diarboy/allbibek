<script setup>
import { onMounted } from "vue";

const props = defineProps({
  pinUrl: String,
});

onMounted(() => {
  const script = document.createElement("script");
  script.src = "https://assets.pinterest.com/js/pinit.js";
  script.async = true;
  script.defer = true;
  document.body.appendChild(script);
});
</script>

<template>
  <a data-pin-do="embedPin" :href="pinUrl"></a>
</template>
