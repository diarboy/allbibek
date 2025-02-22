---
layout: page
title: "Gallery"
description: "A collection of my latest works and projects."
---

# Gallery

Explore some of my latest projects, designs, and creative works.

<div class="gallery-grid">
  <div class="gallery-item">
    <img src="/gallery/image1.jpg" alt="Project 1">
    <p>Project 1 - Web Design</p>
  </div>
  <div class="gallery-item">
    <img src="/gallery/image2.jpg" alt="Project 2">
    <p>Project 2 - UI/UX Concept</p>
  </div>
  <div class="gallery-item">
    <img src="/gallery/image3.jpg" alt="Project 3">
    <p>Project 3 - Branding & Identity</p>
  </div>
</div>

<style>
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  padding: 1rem 0;
}

.gallery-item {
  text-align: center;
}

.gallery-item img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
