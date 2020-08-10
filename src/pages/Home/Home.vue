<template>
  <section class="msite">
    <!--首页头部 将头部单独作为一个组件作为各页面的子组件，内容用props传递-->
    <HeaderTop :title="address.name">
      <router-link class="header_search" slot="search" to="/search">
        <i class="iconfont icon_search2"></i>
      </router-link>
      <router-link class="header_login" slot="login" :to="userInfo._id ? '/userInfo' : '/login'">
        <span class="header_login_text" v-if="!userInfo._id">登录|注册</span>
        <span class="header_login_text" v-else><i class="iconfont icon_geren"></i></span>
      </router-link>
    </HeaderTop>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container" v-if="categorys.length">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categorys, index) in categorysArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(category, index) in categorys" :key="index">
              <div class="food_container">
                <img :src="baseImgUrl+category.image_url">
              </div>
              <span>{{category.title}}</span>
            </a>
          </div>
          
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div><!-- 分页器 -->
      </div>
      <img v-else src="./images/home_back.svg" alt="back">
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon_option"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList></ShopList>
    </div>
  </section>
</template>

<script>
  import HeaderTop from '../../components/HeaderTop/HeaderTop'
  import ShopList from "../../components/ShopList/ShopList"

  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  import {mapState} from 'vuex'

  export default {
    data:function(){
      return {
        baseImgUrl:'http://fuss10.elemecdn.com'
      }
    },
    mounted(){

      this.$store.dispatch('getCategorys')

      this.$store.dispatch('getShops')

    },
    components:{
      HeaderTop,
      ShopList
    },
    computed:{
      ...mapState(['address','categorys','userInfo']),
      //根据categorys一维数组拆分成二维数组（每组最多8个）
      categorysArr(){
        const {categorys} = this;
        //准备空的二维数组和小数组
        const arr = []
        let minArr = []
        //遍历categorys
        categorys.forEach(element => {
          if (minArr.length == 8){//当前小数组满了创建一个新的
            minArr = [];//复杂数据改变地址值
            // console.log(arr);
          }
          if(minArr.length == []){//一创建新的小数组就存进二维数组
            arr.push(minArr);//深拷贝
          }
          minArr.push(element);//将当前分类放到小数组中

          /*////不要用这个，最后一个不一定会放满
            if (minArr.length == 8){ 
              arr.push(minArr);
              minArr = [];
            }
            minArr.push(element);*/
        })
        return arr;
      }
    },
    watch:{
      categorys(value){//categorys中有数据了，在异步更新界面之前执行
      /* 法一：使用setTimeout实现效果，但由自己固定时间不太好 */
        // setTimeout(//等待页面渲染完后实现轮播
        //   ()=>{
        //     //创建一个Swiper实例对象实现轮播
        //     new Swiper('.swiper-container',{
        //       loop:true,//循环轮播
        //       // 如果需要分页器
        //       pagination: {
        //         el: '.swiper-pagination',
        //       }
        //     })
        //   } ,100)


      /* 法二：界面更新就立即创建Swiper对象 */
        this.$nextTick(() => { //一旦完成界面更新，立即调用（此条语句要写在数据更新之后）
          //创建一个Swiper实例对象实现轮播
          new Swiper('.swiper-container',{
            loop:true,//循环轮播
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            }
          })
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .msite  //首页
    width 100%
    .icon_geren
      font-size 20px
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px
</style>