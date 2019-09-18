import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Header from './components/Header'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.component("my-header",Header);
//注册ElementUI
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
