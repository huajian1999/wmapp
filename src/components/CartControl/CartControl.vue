<template>
    <div class="cartcontrol"> <!--点击事件加上.stop阻止冒泡（父组件显示卡片-->
        <transition name="move">
            <div class="iconfont icon_remove" v-if="food.count" @click.stop="updateFoodCount(false)"></div>
        </transition>
        <transition name="show">
            <div class="cart-count" v-if="food.count">{{food.count}}</div>
        </transition>
        <div class="iconfont icon_add" @click.stop="updateFoodCount(true)"></div>
    </div>
</template>

<script>
export default {
    props:{
        food:Object
    },
    methods:{
        updateFoodCount(isAdd){
            this.$store.dispatch('updateFoodCound',{isAdd,food:this.food});
        }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .cartcontrol
    font-size: 0
    .cart-decrease
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color: rgb(0, 160, 220)

    .icon_remove
      display: inline-block
      padding 6px
      line-height 24px
      font-size 24px
      color #0eb289
      &.move-enter-active, &.move-leave-active
        transition all .3s
      &.move-enter, &.move-leave-to
        opacity 0
        transform translateX(15px) rotate(180deg)
    .icon_add
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color #0eb289
    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align: center
      font-size: 10px
      color: rgb(147, 153, 159)
      &.show-enter-active, &.show-leave-active
        transition opacity .3s
      &.show-enter, &.show-leave-to
        opacity 0
    
</style>
