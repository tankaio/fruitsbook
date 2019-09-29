import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import Header from './components/Header'
import Footer from './components/Footer'

Vue.config.productionTip = false
axios.defaults.baseURL = "http://127.0.0.1:3000";
Vue.prototype.axios = axios;
Vue.prototype.url = "http://127.0.0.1:3000/";

axios.defaults.crossDomain = true;
axios.defaults.withCredentials = true;

Vue.component("my-header",Header);
Vue.component("my-footer",Footer);
//注册ElementUI
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
