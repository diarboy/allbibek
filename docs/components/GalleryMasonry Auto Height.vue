<template>
  <div class="masonry-grid">
    <div 
      v-for="(image, index) in images" 
      :key="index" 
      class="masonry-item"
      :class="{ 'large': isLargeColumn(index) }"
    >
      <img :src="image.src" :alt="image.alt" @click="openLightbox(index)" />
    </div>
  </div>

  <!-- Lightbox -->
  <vue-easy-lightbox 
    :visible="visible" 
    :imgs="images.map(img => img.src)" 
    :index="lightboxIndex" 
    @hide="closeLightbox"
  />
</template>

<script setup>
import { ref } from "vue";
import VueEasyLightbox from "vue-easy-lightbox";

const images = ref([
  { src: "https://i.pinimg.com/1200x/51/e6/c9/51e6c9c5d802478a2db1c645bac02e44.jpg", alt: "Project 1" },
  { src: "https://i.pinimg.com/736x/a3/67/89/a36789b269d3ddc150939a31b3a390dd.jpg", alt: "Project 2" },
  { src: "https://framerusercontent.com/images/67h2DVc4IdYXb81Q7E8JaRwp7A.jpg?scale-down-to=512", alt: "Project 3" },
  { src: "https://framerusercontent.com/images/zFN6pFb5EpznGaqPUCHYW7GkngU.jpg?scale-down-to=512", alt: "Project 4" },
  { src: "https://framerusercontent.com/images/G3XVWhCFlN7SvjG805tkppyWQLI.jpg?scale-down-to=512", alt: "Project 5" },
  { src: "https://framerusercontent.com/images/YQLg2i8xIXqc8LwebCyY92SUdo.jpg?scale-down-to=512", alt: "Project 6" },
  { src: "https://i.pinimg.com/1200x/51/e6/c9/51e6c9c5d802478a2db1c645bac02e44.jpg", alt: "Project 7" },
  { src: "https://i.pinimg.com/736x/a3/67/89/a36789b269d3ddc150939a31b3a390dd.jpg", alt: "Project 8" },
  { src: "https://framerusercontent.com/images/67h2DVc4IdYXb81Q7E8JaRwp7A.jpg?scale-down-to=512", alt: "Project 9" },
  { src: "https://framerusercontent.com/images/zFN6pFb5EpznGaqPUCHYW7GkngU.jpg?scale-down-to=512", alt: "Project 10" },
  { src: "https://framerusercontent.com/images/67h2DVc4IdYXb81Q7E8JaRwp7A.jpg?scale-down-to=512", alt: "Project 11" },
  { src: "https://framerusercontent.com/images/zFN6pFb5EpznGaqPUCHYW7GkngU.jpg?scale-down-to=512", alt: "Project 12" },
  { src: "https://i.pinimg.com/1200x/51/e6/c9/51e6c9c5d802478a2db1c645bac02e44.jpg", alt: "Project 13" },
  { src: "https://i.pinimg.com/736x/a3/67/89/a36789b269d3ddc150939a31b3a390dd.jpg", alt: "Project 14" },
  { src: "https://framerusercontent.com/images/67h2DVc4IdYXb81Q7E8JaRwp7A.jpg?scale-down-to=512", alt: "Project 15" },
  { src: "https://framerusercontent.com/images/zFN6pFb5EpznGaqPUCHYW7GkngU.jpg?scale-down-to=512", alt: "Project 16" },
  { src: "https://framerusercontent.com/images/G3XVWhCFlN7SvjG805tkppyWQLI.jpg?scale-down-to=512", alt: "Project 17" },
  { src: "https://framerusercontent.com/images/YQLg2i8xIXqc8LwebCyY92SUdo.jpg?scale-down-to=512", alt: "Project 18" },
  { src: "https://i.pinimg.com/1200x/51/e6/c9/51e6c9c5d802478a2db1c645bac02e44.jpg", alt: "Project 19" },
  { src: "https://i.pinimg.com/736x/a3/67/89/a36789b269d3ddc150939a31b3a390dd.jpg", alt: "Project 20" },
  { src: "https://framerusercontent.com/images/67h2DVc4IdYXb81Q7E8JaRwp7A.jpg?scale-down-to=512", alt: "Project 21" },
  { src: "https://framerusercontent.com/images/zFN6pFb5EpznGaqPUCHYW7GkngU.jpg?scale-down-to=512", alt: "Project 22" },
  { src: "https://framerusercontent.com/images/67h2DVc4IdYXb81Q7E8JaRwp7A.jpg?scale-down-to=512", alt: "Project 23" },
  { src: "https://framerusercontent.com/images/zFN6pFb5EpznGaqPUCHYW7GkngU.jpg?scale-down-to=512", alt: "Project 24" },
]);


const visible = ref(false);
const lightboxIndex = ref(0);

const openLightbox = (index) => {
  lightboxIndex.value = index;
  visible.value = true;
};

const closeLightbox = () => {
  visible.value = false;
};

// Menentukan gambar di kolom ke-2 & ke-4 untuk diperbesar
const isLargeColumn = (index) => {
  return (index % 4 === 1 || index % 4 === 3); // Kolom ke-2 dan ke-4
};
</script>

<style scoped>
.masonry-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 Kolom */
  grid-auto-rows: 150px; /* Dasar tinggi tiap baris */
  gap: 12px;
  padding: 10px;
}

.masonry-item {
  display: flex;
}

.masonry-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
}

.masonry-item.large {
  grid-row: span 2; /* Kolom ke-2 dan ke-4 lebih tinggi */
}

.masonry-item img:hover {
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .masonry-grid {
    grid-template-columns: repeat(2, 1fr); /* Responsif jadi 2 kolom */
  }

  .masonry-item.large {
    grid-row: span 1; /* Tidak ada kolom tinggi di mobile */
  }
}
</style>
