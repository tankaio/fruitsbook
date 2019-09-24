import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'
import Foot from './components/Footer'
import { Footer } from 'element-ui'

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/Index",component:Index},
    {path:"/",component:Index},
    {path:"/Foot",component:Foot}
  ]
})
