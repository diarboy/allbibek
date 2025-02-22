import DefaultTheme from 'vitepress/theme'
import Layout from '../../components/Layout.vue'
import FAQ from '../../components/FAQ.vue'
import PinterestEmbed from "../../components/PinterestEmbed.vue";
import PinterestIframe from '../../components/PinterestIframe.vue'
import GalleryMasonry from '../../components/GalleryMasonry.vue'  // Tambahkan GalleryMasonry
import GalleryCarousel from '../../components/GalleryCarousel.vue'  // Tambahkan GalleryCarousel

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('FAQ', FAQ)
    app.component('PinterestEmbed', PinterestEmbed)
    app.component('PinterestIframe', PinterestIframe)
    app.component('GalleryMasonry', GalleryMasonry)  // Daftarkan GalleryMasonry
    app.component('GalleryCarousel', GalleryCarousel)  // Daftarkan GalleryCarousel
  }
}
