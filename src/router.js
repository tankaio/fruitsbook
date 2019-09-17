import Vue from 'vue'
import Router from 'vue-router'
import Header from './components/Header'
import Index from './views/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/Index",component:Index},
    {path:"/",component:Index},
    {path:"/Header",component:Header}
  ]
})
