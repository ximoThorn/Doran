import Vue from 'vue'
import App from './App.vue'
import router from './router'
import DoranUi from './index'
import './styles/index.scss'

Vue.config.productionTip = false

Vue.use(DoranUi)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
