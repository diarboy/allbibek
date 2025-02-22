<template>
  <div>
    <h2 class="gallery-title">Image Carousel</h2>
    <div class="carousel">
      <button @click="prev" class="carousel-btn">❮</button>
      <div class="carousel-container">
        <img :src="images[currentIndex].src" :alt="images[currentIndex].alt" @click="showLightbox(currentIndex)" />
      </div>
      <button @click="next" class="carousel-btn">❯</button>
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
  { src: "/gallery/image1.jpg", alt: "Project 1" },
  { src: "/gallery/image2.jpg", alt: "Project 2" },
  { src: "/gallery/image3.jpg", alt: "Project 3" },
  { src: "/gallery/image4.jpg", alt: "Project 4" },
  { src: "/gallery/image5.jpg", alt: "Project 5" }
]);

const currentIndex = ref(0);
const visible = ref(false);
const lightboxIndex = ref(0);

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
};

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length;
};

const showLightbox = (index) => {
  lightboxIndex.value = index;
  visible.value = true;
};
</script>

<style scoped>
.gallery-title {
  text-align: center;
  margin: 2rem 0;
}

.carousel {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 1rem;
}

.carousel-container {
  width: 60%;
  max-width: 600px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.carousel-container img {
  width: 100%;
  height: auto;
  cursor: pointer;
}

.carousel-btn {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.carousel-btn:hover {
  transform: scale(1.2);
}

@media (max-width: 768px) {
  .carousel-container {
    width: 80%;
  }
}
</style>
