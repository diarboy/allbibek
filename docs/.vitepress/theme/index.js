import DefaultTheme from 'vitepress/theme'
import PinterestEmbed from "../../components/PinterestEmbed.vue";
import PinterestIframe from '../../components/PinterestIframe.vue'
import GalleryMasonry from '../../components/GalleryMasonry.vue'
import GalleryCarousel from '../../components/GalleryCarousel.vue'
import MarkdownPlayground from '../../components/MarkdownPlayground.vue'
import pdfmake from '../../components/pdfmake.vue'
import FAQ from '../../components/FAQ.vue'
import Mermaid from '../../components/Mermaid.vue'
import Sch from '../../components/Schedule.vue'

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
    app.component('Mermaid', Mermaid)
    app.component('Sch', Sch)
  }
}
