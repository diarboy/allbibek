<script setup>
import { ref } from "vue";
import { useParallax } from "@vueuse/core";

const target = ref(null);
const { tilt, roll, depth } = useParallax(target);
</script>

<template>
  <div ref="target" class="parallax-container">
    <div
      class="parallax-content"
      :style="{
        transform: `translateY(${tilt * 20}px) translateX(${roll * 10}px) scale(${1 + depth / 50})`
      }"
    >
      🌄 Efek Parallax!
    </div>
  </div>
</template>

<style scoped>
.parallax-container {
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #42a5f5, #1e88e5);
  overflow: hidden;
  position: relative;
}

.parallax-content {
  font-size: 2rem;
  color: white;
  font-weight: bold;
  transition: transform 0.1s ease-out;
}
</style>
