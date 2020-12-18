import Vue from 'vue'
import App from './App.vue'
import router from '@/lib/router'

// Bootstrap
import { BadgePlugin, CardPlugin, LayoutPlugin } from 'bootstrap-vue'
import '@/styles/custom.scss'

Vue.config.productionTip = false

// Install BootstrapVue
Vue.use(BadgePlugin)
Vue.use(CardPlugin)
Vue.use(LayoutPlugin)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
