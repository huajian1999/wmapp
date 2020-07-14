/* 路由器对象模块 */

import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Order from '../pages/Order/Order.vue'
import Personal from '../pages/Personal/Personal.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'

//声明使用插件
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      component:Home,
      meta:{
        showFooterNav:true
      }
    },
    {
      path:'/order',
      component:Order,
      meta:{
        showFooterNav:true
      }
    },
    {
      path:'/personal',
      component:Personal,
      meta:{
        showFooterNav:true
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        showFooterNav:true
      }
    },
    {
      path:'/login',
      component:Login,
      meta:{
        showFooterNav:false
      }
    }
  ]
})

