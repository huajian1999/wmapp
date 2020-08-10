<template>
<!-- 滚动条没用 -->
  <section class="search">
    <HeaderTop title="搜索"/>
    <form class="search_form" @submit.prevent="search">
      <input type="search" placeholder="请输入商家名称" class="search_input" v-model="keyword"/>
      <input type="submit" class="search_submit" />
    </form>
    <section class="list"  ref="listWrapper">
      <ul class="list_container" ref="list_container" style="overflow:hidden">
        <router-link :to="{path:'/shop', query:{id:shop.id}}" tag="li" 
          class="list_li" v-for="(shop, index) in searchShops" :key="index">
          <section class="item_left">
            <img :src="imgBaseUrl+shop.image_path" class="restaurant_img" />
          </section>
          <section class="item_right">
            <div class="item_right_text">
              <p>
                <span>{{shop.name}}</span>
              </p>
              <p>月售 {{shop.recent_order_num}} 单</p>
              <p>{{shop.float_minimum_order_amount}} 元起送 / 距离 {{shop.distance}}</p>
            </div>
          </section>
        </router-link>
      </ul>
    </section>
    <div class="search_none" v-if="showNone">很抱歉！无搜索结果</div>
  </section>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop";
import {mapState} from "vuex"
import BScroll from 'better-scroll'
import { Indicator } from 'mint-ui';

export default {
  mounted(){
    this.showNone = false;
    this.$store.dispatch('clearSearchShops');
  },
  data(){
    return {
      keyword:"",
      imgBaseUrl: 'http://cangdu.org:8001/img/',
      showNone:false
    }
  },
  components: {
    HeaderTop
  },
  methods:{
    search(){
      //将之前的结果清空
      this.showNone = false;
      this.$store.dispatch('clearSearchShops');

      let keyword = this.keyword.trim();
      if (keyword){
        Indicator.open();  //加载提示框
        //获得搜索结果
        this.$store.dispatch('getSearchShops',keyword);
        /////修改后的写法
        this.$nextTick(()=>{
          setTimeout(()=>{
            Indicator.close();
            //搜索结果为空，显示提示
            if(!this.searchShops.length){
              this.showNone = true;
            }else{
              this.showNone = false;
              this._initScroll();   //不知道为什么不显示滚动
            }
          }, 1000)//等待一秒再给结果，否则会直接显示空提示
        })
      }else{
        //清空搜索结果
        this.$store.dispatch('clearSearchShops');
        this.showNone = false;
      }
    },
    _initScroll(){
      this.scroll = new BScroll('.list',{
          click:true  
      })
    }
  },
  computed:{
    ...mapState(['searchShops'])
  },
  //////这样写有bug
  /*watch:{  
    searchShops(value){
      //搜索结果为空，显示提示
      if(!value.length){
        this.showNone = true;
      }else{
        this.showNone = false;
      }
    }
  }*/
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .search
    width 100%
    height 100%
    overflow hidden
    .search_form
      clearFix()
      margin-top 45px
      background-color #fff
      padding 12px 8px
      input
        height 35px
        padding 0 4px
        border-radius 2px
        font-weight bold
        outline none
        &.search_input
          float left
          width 79%
          border 4px solid #f2f2f2
          font-size 14px
          color #333
          background-color #f2f2f2
        &.search_submit
          float right
          width 18%
          border 4px solid #02a774
          font-size 16px
          color #fff
          background-color #02a774

    .list
      position:relative
      .list_container
        position:relative
        left:0
        right:0
        top:0
        bottom:50px
        // background-color: #fff;
        .list_li
          display: flex;
          justify-content: center;
          padding: 10px
          border-bottom: 1px solid #e6e6e6;
          background-color: #fff;
          .item_left
            margin-right: 10px
            .restaurant_img
              width 50px
              height 50px
              display block
          .item_right
            font-size 12px
            flex 1
            .item_right_text
              p
                line-height 12px
                margin-bottom 6px
                &:last-child
                  margin-bottom 0
    .search_none
      margin: 0 auto
      color: #333
      padding: 2px 0
      background-color: #fff
      text-align: center
      margin-top: 0.125rem
</style>