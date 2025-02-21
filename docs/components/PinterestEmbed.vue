<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const script = document.createElement("script");
  script.src = "https://assets.pinterest.com/js/pinit.js";
  script.async = true;
  script.defer = true;
  document.body.appendChild(script);
});
</script>

<template>
  <a
    data-pin-do="embedPin"
    href="https://www.pinterest.com/pin/34832597112243536/"
  ></a>
</template>
