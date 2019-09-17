import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Header from './components/Header'

Vue.config.productionTip = false
Vue.component("my-header",Header);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
