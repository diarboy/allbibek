import DefaultTheme from 'vitepress/theme'
import Layout from '../../components/Layout.vue'
import FAQ from '../../components/FAQ.vue'
import PinterestEmbed from "../../components/PinterestEmbed.vue";

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('FAQ', FAQ)
    app.component('PinterestEmbed', PinterestEmbed)
  }
}
