/* 路由器对象模块 */

import Vue from 'vue'
import Router from 'vue-router'

// import Home from '../pages/Home/Home.vue'
// import Order from '../pages/Order/Order.vue'
// import Personal from '../pages/Personal/Personal.vue'
// import Search from '../pages/Search/Search.vue'
//路由懒加载 返回路由组件的函数，只有执行此函数才会加载路由组件，第一次请求对应路由路径时执行
const Home = () => import('../pages/Home/Home.vue')
const Search = () => import('../pages/Search/Search.vue')
const Order = () => import('../pages/Order/Order.vue')
const Personal = () => import('../pages/Personal/Personal.vue')

import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop.vue'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'

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
    },
    {
      path:'/shop',
      component:Shop,
      meta:{
        showFooterNav:false
      },
      children:[
        {
          path:'goods',
          component:ShopGoods,
        },
        {
          path:'ratings',
          component:ShopRatings,
        },
        {
          path:'info',
          component:ShopInfo,
        },
        {
          path:'',
          redirect:'/shop/goods'
        }
      ]
    }
  ]
})

