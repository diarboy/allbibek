<template>
  <swiper :slides-per-view="1" :pagination="{ clickable: true }" class="carousel">
    <swiper-slide v-for="(image, index) in images" :key="index">
      <img :src="image.src" :alt="image.alt" />
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";

export default {
  components: { Swiper, SwiperSlide },
  data() {
    return {
      images: [
       { src: "https://i.pinimg.com/1200x/51/e6/c9/51e6c9c5d802478a2db1c645bac02e44.jpg", alt: "Project 1" },
       { src: "https://i.pinimg.com/736x/a3/67/89/a36789b269d3ddc150939a31b3a390dd.jpg", alt: "Project 2" },
       { src: "https://i.pinimg.com/1200x/51/e6/c9/51e6c9c5d802478a2db1c645bac02e44.jpg", alt: "Project 3" },
       { src: "https://i.pinimg.com/1200x/51/e6/c9/51e6c9c5d802478a2db1c645bac02e44.jpg", alt: "Project 4" },
       { src: "https://i.pinimg.com/736x/a3/67/89/a36789b269d3ddc150939a31b3a390dd.jpg", alt: "Project 5" },
        ]
    };
  }
};
</script>

<style>
.carousel img {
  width: 100%;
  border-radius: 8px;
}
</style>
