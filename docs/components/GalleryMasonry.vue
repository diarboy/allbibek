<template>
  <div>
    <h2 class="gallery-title">Masonry Gallery</h2>
    <div class="masonry-grid">
      <div
        class="masonry-item"
        v-for="(image, index) in images"
        :key="index"
        @click="showLightbox(index)"
      >
        <img :src="image.src" :alt="image.alt" />
      </div>
    </div>
    
    <vue-easy-lightbox 
      :visible="visible"
      :imgs="images.map(img => img.src)"
      :index="lightboxIndex"
      @hide="visible = false"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import VueEasyLightbox from "vue-easy-lightbox";

const images = ref([
  { src: "https://i.pinimg.com/1200x/51/e6/c9/51e6c9c5d802478a2db1c645bac02e44.jpg", alt: "Project 1" },
  { src: "https://i.pinimg.com/1200x/51/e6/c9/51e6c9c5d802478a2db1c645bac02e44.jpg", alt: "Project 2" },
  { src: "https://i.pinimg.com/1200x/51/e6/c9/51e6c9c5d802478a2db1c645bac02e44.jpg", alt: "Project 3" },
  { src: "https://i.pinimg.com/1200x/51/e6/c9/51e6c9c5d802478a2db1c645bac02e44.jpg", alt: "Project 4" },
  { src: "https://i.pinimg.com/1200x/51/e6/c9/51e6c9c5d802478a2db1c645bac02e44.jpg", alt: "Project 5" }
]);

const visible = ref(false);
const lightboxIndex = ref(0);

const showLightbox = (index) => {
  lightboxIndex.value = index;
  visible.value = true;
};
</script>

<style scoped>
.gallery-title {
  text-align: center;
  margin-bottom: 1rem;
}

.masonry-grid {
  column-count: 3;
  column-gap: 16px;
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: 16px;
  cursor: pointer;
}

.masonry-item img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.masonry-item img:hover {
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .masonry-grid {
    column-count: 2;
  }
}

@media (max-width: 480px) {
  .masonry-grid {
    column-count: 1;
  }
}
</style>
