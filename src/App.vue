<template>
  <div id="app">
    <router-view></router-view>
    <FooterNav v-show="$route.meta.showFooterNav"></FooterNav><!-- $route代表当前路由，meta是路由可添加的一个属性 -->
  </div>
</template>

<script>
  import FooterNav from './components/FooterNav/FooterNav.vue'

  export default {
    name: 'App',
    components:{
      FooterNav
    }
  }
</script>

<style lang="stylus">
  #app
    width: 100%
    height: 100%
    background: #f5f5f5
</style>
