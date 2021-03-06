import Vue from 'vue'
import VueDragscroll from 'vue-dragscroll'
import App from './App.vue'
import store from './store'
import { i18n } from '@/i18n'
import { router } from '@/routes'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(VueDragscroll)

new Vue({
  i18n,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
