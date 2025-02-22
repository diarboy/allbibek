<template>
  <div class="masonry-grid">
    <div v-for="(image, index) in images" :key="index" class="masonry-item">
      <img ref="imagesRef" :src="image.src" :alt="image.alt" @load="calculateGridSpan(index)" @click="openLightbox(index)" />
    </div>
  </div>

  <vue-easy-lightbox 
    :visible="visible" 
    :imgs="images.map(img => img.src)" 
    :index="lightboxIndex" 
    @hide="closeLightbox"
  />
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import VueEasyLightbox from "vue-easy-lightbox";

const images = ref([
  { src: "https://i.pinimg.com/1200x/51/e6/c9/51e6c9c5d802478a2db1c645bac02e44.jpg", alt: "Project 1" },
  { src: "https://i.pinimg.com/736x/a3/67/89/a36789b269d3ddc150939a31b3a390dd.jpg", alt: "Project 2" },
  { src: "https://framerusercontent.com/images/67h2DVc4IdYXb81Q7E8JaRwp7A.jpg?scale-down-to=512", alt: "Project 3" },
  { src: "https://framerusercontent.com/images/zFN6pFb5EpznGaqPUCHYW7GkngU.jpg?scale-down-to=512", alt: "Project 4" },
  { src: "https://framerusercontent.com/images/G3XVWhCFlN7SvjG805tkppyWQLI.jpg?scale-down-to=512", alt: "Project 5" },
  { src: "https://framerusercontent.com/images/YQLg2i8xIXqc8LwebCyY92SUdo.jpg?scale-down-to=512", alt: "Project 6" },
  { src: "https://i.pinimg.com/1200x/51/e6/c9/51e6c9c5d802478a2db1c645bac02e44.jpg", alt: "Project 1" },
  { src: "https://i.pinimg.com/736x/a3/67/89/a36789b269d3ddc150939a31b3a390dd.jpg", alt: "Project 2" },
  { src: "https://framerusercontent.com/images/67h2DVc4IdYXb81Q7E8JaRwp7A.jpg?scale-down-to=512", alt: "Project 3" },
  { src: "https://framerusercontent.com/images/zFN6pFb5EpznGaqPUCHYW7GkngU.jpg?scale-down-to=512", alt: "Project 4" },
  { src: "https://framerusercontent.com/images/G3XVWhCFlN7SvjG805tkppyWQLI.jpg?scale-down-to=512", alt: "Project 5" },
  { src: "https://framerusercontent.com/images/YQLg2i8xIXqc8LwebCyY92SUdo.jpg?scale-down-to=512", alt: "Project 6" },
]);

const visible = ref(false);
const lightboxIndex = ref(0);
const imagesRef = ref([]);

const openLightbox = (index) => {
  lightboxIndex.value = index;
  visible.value = true;
};

const closeLightbox = () => {
  visible.value = false;
};

// Fungsi untuk menghitung ukuran grid secara dinamis
const calculateGridSpan = (index) => {
  nextTick(() => {
    const imageElement = imagesRef.value[index];
    if (imageElement) {
      const rowHeight = 10; // Harus sesuai dengan grid-auto-rows di CSS
      const span = Math.ceil(imageElement.clientHeight / rowHeight);
      imageElement.parentElement.style.gridRowEnd = `span ${span}`;
    }
  });
};

onMounted(() => {
  imagesRef.value.forEach((_, index) => calculateGridSpan(index));
});
</script>

<style scoped>
.masonry-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Jumlah kolom fleksibel */
  grid-auto-rows: 10px; /* Grid tinggi dasar */
  gap: 10px;
  padding: 10px;
}

.masonry-item {
  display: block;
  width: 100%;
}

.masonry-item img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
}

.masonry-item img:hover {
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .masonry-grid {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  }
}
</style>
