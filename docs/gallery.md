---
layout: home
title: "Gallery"
description: An immersive visual experience showcasing my creative works.
hero:
  name: 
  text: Discover My Visual Journey 
  tagline: A collection of my best works, from photography to digital creations. 
  image:
    src: /hero.png
    alt: gallery
  actions:
    - text: See My Portfolio
      link: /guide
    - text: Hire Me
      link: /contact
features:
  - icon: 🖼️
    title: High-Quality Images
    description: Curated selection of high-resolution images.
  - icon: 🌎
    title: Global Inspirations
    description: Works inspired by diverse cultures and landscapes.
  - icon: 📱
    title: Optimized for Mobile
    description: Seamlessly browse on any device.
---

<section class="gallery-content">
  <h2>Explore the Collection</h2>
  <ClientOnly>
    <GalleryFilter />
    <GalleryMasonry />
    <GalleryCarousel />
  </ClientOnly>
</section>

<style>
  
@media (max-width: 768px) {
  .gallery-hero { height: 40vh; }
  .gallery-hero h1 { font-size: 2rem; }
  .gallery-hero p { font-size: 1rem; }
  .features-container { grid-template-columns: 1fr; }
  .feature-item { max-width: 90%; margin: 0 auto; }
}
</style>
