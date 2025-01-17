import DefaultTheme from 'vitepress/theme'
import FAQ from '../../components/FAQ.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('FAQ', FAQ)
  }
}