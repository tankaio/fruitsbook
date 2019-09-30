import Vue from 'vue'
import Router from 'vue-router'
import { Footer } from 'element-ui'
import Index from './views/Index'
import Foot from './components/Footer'
import Detail from './views/Detail'


Vue.use(Router)

export default new Router({
  routes: [
    {path:"/Index",component:Index},
    {path:"/",component:Index},
    {path:"/Foot",component:Foot},
    {path:"/Detail",component:Detail},
  ]
})
