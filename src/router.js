import Vue from 'vue'
import Router from 'vue-router'
import { Footer } from 'element-ui'
import Index from './views/Index'
import Foot from './components/Footer'
import Details from './views/Details'
import Cart from './views/Cart'


Vue.use(Router)

export default new Router({
  routes: [
    {path:"/Index",component:Index},
    {path:"/",component:Index},
    {path:"/Foot",component:Foot},
    {path:"/Details/:lid",component:Details,props:true},
    {path:"/Cart",component:Cart},
  ]
})
