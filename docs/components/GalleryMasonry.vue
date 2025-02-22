<template>
  <div class="masonry-grid">
    <div v-for="(image, index) in images" :key="index" class="masonry-item">
      <img :src="image.src" :alt="image.alt" @click="openLightbox(index)" />
    </div>
    <vue-easy-lightbox v-if="visible" :imgs="images" :index="index" @hide="visible = false" />
  </div>
</template>

<script>
import VueEasyLightbox from 'vue-easy-lightbox'

export default {
  components: { VueEasyLightbox },
  data() {
    return {
      visible: false,
      index: 0,
      images: [
      { src: "https://i.pinimg.com/1200x/51/e6/c9/51e6c9c5d802478a2db1c645bac02e44.jpg", alt: "Project 1" },
      { src: "https://i.pinimg.com/736x/a3/67/89/a36789b269d3ddc150939a31b3a390dd.jpg", alt: "Project 2" },
      { src: "https://i.pinimg.com/1200x/51/e6/c9/51e6c9c5d802478a2db1c645bac02e44.jpg", alt: "Project 3" },
      { src: "https://i.pinimg.com/1200x/51/e6/c9/51e6c9c5d802478a2db1c645bac02e44.jpg", alt: "Project 4" },
      { src: "https://i.pinimg.com/736x/a3/67/89/a36789b269d3ddc150939a31b3a390dd.jpg", alt: "Project 5" },
        ]
    };
  },
  methods: {
    openLightbox(index) {
      this.index = index;
      this.visible = true;
    }
  }
};
</script>

<style>
.masonry-grid {
  columns: 3;
  gap: 10px;
}
.masonry-item img {
  width: 100%;
  display: block;
  cursor: pointer;
}
@media (max-width: 768px) {
  .masonry-grid { columns: 1; }
}
</style>
