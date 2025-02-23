import DefaultTheme from 'vitepress/theme'
import MyLayout from './mylayout.vue'
import Layout from '../../components/Layout.vue'
import FAQ from '../../components/FAQ.vue'
import PinterestEmbed from "../../components/PinterestEmbed.vue";
import PinterestIframe from '../../components/PinterestIframe.vue'
import GalleryMasonry from '../../components/GalleryMasonry.vue'
import GalleryCarousel from '../../components/GalleryCarousel.vue'

export default {
  ...DefaultTheme,
  Layout,
  layouts: {
    ...DefaultTheme.layouts,
    mylayout: MyLayout
  },
  enhanceApp({ app }) {
    app.component('FAQ', FAQ)
    app.component('PinterestEmbed', PinterestEmbed)
    app.component('PinterestIframe', PinterestIframe)
    app.component('GalleryMasonry', GalleryMasonry)  
    app.component('GalleryCarousel', GalleryCarousel)
  }
}
