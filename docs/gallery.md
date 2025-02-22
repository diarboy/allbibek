---
layout: page
title: "Gallery"
description: "An immersive visual experience showcasing my creative works."
hero:
  background: "https://i.pinimg.com/736x/a3/67/89/a36789b269d3ddc150939a31b3a390dd.jpg"      # Gambar background hero khusus gallery
  title: "Immersive Gallery"
  subtitle: "Dive into a world of creativity and innovation."
  cta:
    - text: "Explore Portfolio"
      link: "/portfolio"
    - text: "Get in Touch"
      link: "/contact"
features:
  - icon: 🎨
    title: "Art & Design"
    description: "Stunning visuals and innovative design."
  - icon: 📷
    title: "Photography"
    description: "Capturing moments from around the world."
  - icon: 💻
    title: "Digital Creations"
    description: "Modern and interactive digital art."
---

<!-- HERO SECTION -->
<div class="gallery-hero">
  <div class="overlay">
    <h1>{{ $frontmatter.hero.title }}</h1>
    <p>{{ $frontmatter.hero.subtitle }}</p>
    <div class="cta-buttons">
      <a class="btn btn-primary" href="{{ $frontmatter.hero.cta[0].link }}">{{ $frontmatter.hero.cta[0].text }}</a>
      <a class="btn btn-secondary" href="{{ $frontmatter.hero.cta[1].link }}">{{ $frontmatter.hero.cta[1].text }}</a>
    </div>
  </div>
</div>

<!-- FEATURES SECTION -->
<section class="gallery-features">
  <div class="features-container">
    <div v-for="(feature, index) in $frontmatter.features" :key="index" class="feature-item">
      <div class="icon">{{ feature.icon }}</div>
      <h3>{{ feature.title }}</h3>
      <p>{{ feature.description }}</p>
    </div>
  </div>
</section>

<!-- GALLERY CONTENT SECTION -->
<section class="gallery-content">
  <h2>Explore the Collection</h2>
  <ClientOnly>
    <!-- Komponen interaktif: filter untuk kategori karya -->
    <GalleryFilter />
    <!-- Grid dinamis dengan layout masonry & lightbox -->
    <GalleryGrid />
    <!-- Carousel interaktif untuk menampilkan highlight karya -->
    <GalleryCarousel />
  </ClientOnly>
</section>

<style>
/* HERO SECTION */
.gallery-hero {
  position: relative;
  background: url("https://i.pinimg.com/736x/a3/67/89/a36789b269d3ddc150939a31b3a390dd.jpg") center/cover no-repeat;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.gallery-hero .overlay {
  background: rgba(0,0,0,0.55);
  padding: 2rem;
  text-align: center;
  color: #fff;
  border-radius: 8px;
}
.gallery-hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}
.gallery-hero p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}
.cta-buttons a {
  margin: 0 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  color: #fff;
  transition: background 0.3s ease;
}
.btn-primary {
  background: #007bff;
}
.btn-primary:hover {
  background: #0056b3;
}
.btn-secondary {
  background: #6c757d;
}
.btn-secondary:hover {
  background: #495057;
}

/* FEATURES SECTION */
.gallery-features {
  padding: 2rem 1rem;
  background: #f4f4f4;
}
.features-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
}
.feature-item {
  background: #fff;
  border-radius: 8px;
  padding: 1rem 1.5rem;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  flex: 1 1 200px;
  max-width: 250px;
}
.feature-item .icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

/* GALLERY CONTENT SECTION */
.gallery-content {
  padding: 2rem 1rem;
}
.gallery-content h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 2rem;
}
</style>
