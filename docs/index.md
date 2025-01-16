---
layout: home

hero:
  name: "Allbibek"
  text: "Modern Development Resources"
  tagline: Discover a collection of tutorials, guides, and best practices for modern web development.
  image:
    src: 'hero.png'
    alt: Allbibek
  actions:
    - theme: brand
      text: Get Started
      link: /example
    - theme: alt
      text: View Tutorials
      link: /tutorials
    - theme: alt
      text: Contact Me
      link: /contact

features:
  - icon: 🚀
    title: Performance First
    details: Learn optimization techniques and best practices for building high-performance applications.
  - icon: 🛠️
    title: Developer Tools
    details: Discover essential tools and utilities that improve your development workflow.
  - icon: 📚
    title: Comprehensive Guides
    details: Access detailed tutorials and guides covering various development topics.
  - icon: 🔧
    title: Best Practices
    details: Learn industry-standard best practices for writing clean, maintainable code.
  - icon: 🎨
    title: UI/UX Design
    details: Explore modern design patterns and user experience principles.
  - icon: 🔐
    title: Security
    details: Implement robust security measures in your applications.

---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #4c09b9 50%);
  --vp-home-hero-image-filter: blur(40px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(72px);
  }
}

.VPFeature {
  transition: transform 0.2s ease-in-out;
}

.VPFeature:hover {
  transform: translateY(-2px);
}

.title {
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>

<div class="vp-doc" style="padding: 2rem;">

## <span class="title">Why Allbibek?</span>

Allbibek is your go-to resource for modern web development knowledge. Whether you're a beginner or an experienced developer, our comprehensive guides and tutorials will help you level up your skills.

## Latest Updates

- 🆕 New tutorial: Advanced TypeScript Patterns
- 📚 Updated documentation for Vue 3 Composition API
- 🎯 Performance optimization guides
- 🔧 Developer tooling recommendations

</div>