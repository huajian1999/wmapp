// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'//引入路由器
import store from './store'

import {Button} from 'mint-ui'
import './mock/mockServer'   //加载mockServer

import VueLazyload from 'vue-lazyload' //懒加载
import loading from './common/imgs/loading.gif'

import './filters' //加载过滤器

//注册全局组件标签
Vue.component(Button.name,Button)  //<mt-button>

Vue.config.productionTip = false

Vue.use(VueLazyload, { //内部自定义指令v-lazy (在Food.vue中使用)
  loading: loading
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  render:h=>h(App),
  router,//使用vue-router
  store //vuex
})
