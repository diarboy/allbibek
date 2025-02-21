import DefaultTheme from 'vitepress/theme'
import Layout from '../../components/Layout.vue'
import FAQ from '../../components/FAQ.vue'
import PinterestEmbed from "../../components/PinterestEmbed.vue";
import PinterestIframe from '../../components/PinterestIframe.vue'

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('FAQ', FAQ)
    app.component('PinterestEmbed', PinterestEmbed)
    app.component('PinterestIframe', PinterestIframe)
  }
}
