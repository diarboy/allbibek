---
layout: page
title: "Gallery"
description: "An immersive visual experience showcasing my creative works."
hero:
  background: "https://i.pinimg.com/736x/a3/67/89/a36789b269d3ddc150939a31b3a390dd.jpg"
  title: "Discover My Visual Journey"
  subtitle: "A collection of my best works, from photography to digital creations."
  cta:
    - text: "See My Portfolio"
      link: "/Guide"
    - text: "Hire Me"
      link: "/contact"
features:
  - icon: 🖼️
    title: "High-Quality Images"
    description: "Curated selection of high-resolution images."
  - icon: 🌎
    title: "Global Inspirations"
    description: "Works inspired by diverse cultures and landscapes."
  - icon: 📱
    title: "Optimized for Mobile"
    description: "Seamlessly browse on any device."
---

<!-- HERO SECTION -->
<div class="gallery-hero">
  <div class="overlay">
    <h1>{{ $frontmatter.hero.title }}</h1>
    <p>{{ $frontmatter.hero.subtitle }}</p>
    <div class="cta-buttons">
      <a class="btn btn-primary" :href="$frontmatter.hero.cta[0].link">{{ $frontmatter.hero.cta[0].text }}</a>
      <a class="btn btn-secondary" :href="$frontmatter.hero.cta[1].link">{{ $frontmatter.hero.cta[1].text }}</a>
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
    <GalleryFilter />
    <GalleryMasonry />
    <GalleryCarousel />
  </ClientOnly>
</section>

<style>
/* HERO SECTION */
.gallery-hero {
  position: relative;
  background: url("https://i.pinimg.com/736x/a3/67/89/a36789b269d3ddc150939a31b3a390dd.jpg") center/cover no-repeat;
  height: 55vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.gallery-hero .overlay {
  background: rgba(0,0,0,0.5);
  padding: 2rem;
  border-radius: 8px;
  max-width: 90%;
  color: #fff;
}
.gallery-hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.gallery-hero p {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}
.cta-buttons a {
  display: inline-block;
  margin: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  color: #fff;
  transition: background 0.3s ease;
}
.btn-primary { background: #007bff; }
.btn-primary:hover { background: #0056b3; }
.btn-secondary { background: #6c757d; }
.btn-secondary:hover { background: #495057; }

/* FEATURES SECTION */
.gallery-features {
  padding: 2rem 1rem;
  background: #f4f4f4;
}
.features-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
  justify-content: center;
}
.feature-item {
  background: #fff;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}
.feature-item .icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

/* GALLERY CONTENT */
.gallery-content {
  padding: 2rem 1rem;
}
.gallery-content h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 2rem;
}

/* RESPONSIVE DESIGN */
@media (max-width: 768px) {
  .gallery-hero { height: 40vh; }
  .gallery-hero h1 { font-size: 2rem; }
  .gallery-hero p { font-size: 1rem; }
  .features-container { grid-template-columns: 1fr; }
  .feature-item { max-width: 90%; margin: 0 auto; }
}
</style>
