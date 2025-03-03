import DefaultTheme from 'vitepress/theme'
import FAQ from '../../components/FAQ.vue'
import PinterestEmbed from "../../components/PinterestEmbed.vue";
import PinterestIframe from '../../components/PinterestIframe.vue'
import GalleryMasonry from '../../components/GalleryMasonry.vue'
import GalleryCarousel from '../../components/GalleryCarousel.vue'
import MarkdownPlayground from '../../components/MarkdownPlayground.vue'
import pdfmake from '../../components/pdfmake.vue'
import mermaid fron 'mermaid'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('FAQ', FAQ)
    app.component('PinterestEmbed', PinterestEmbed)
    app.component('PinterestIframe', PinterestIframe)
    app.component('GalleryMasonry', GalleryMasonry)  
    app.component('GalleryCarousel', GalleryCarousel)
    app.component('MarkdownPlayground', MarkdownPlayground)
    app.component('pdfmake', pdfmake)
    mermaid.initialize({
      startOnLoad: true,
      theme: 'default',
  }
}
