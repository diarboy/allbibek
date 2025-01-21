import DefaultTheme from 'vitepress/theme'
import FAQ from '../../components/FAQ.vue'
import DateDisplay from '../../components/DateDisplay.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('FAQ', FAQ)
    app.component('DateDisplay', DateDisplay)
  }
}