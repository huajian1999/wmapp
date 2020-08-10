<template>
    <div class="star" :class="'star-'+size">
        <!-- <span class="star-item on"></span>
        <span class="star-item on"></span>
        <span class="star-item on"></span>
        <span class="star-item half"></span>
        <span class="star-item off"></span> -->
        <span v-for="(str,index) in scoreArr" :class="'star-item '+str" :key="index"></span>

    </div>
</template>

<script>
export default {
    name:"Star",
    props:{
        score:Number,
        size:Number
    },
    computed:{
        scoreArr(){
            const {score} = this;
            const scArr = []

            //向scArr里添加的on half off个数
            const on = parseInt(score);
            const half = score * 10 % 10 != 0 ? 1 : 0;
            const off = 5 - on - half;
            for (var i = 0; i < on; i++){
                scArr.push("on");
            }
            if (half){
                scArr.push("half");
            }
            for (var i = 0; i < off; i++){
                scArr.push("off");
            }
            // console.log(scArr);

            return scArr;
        }
    }
}
</script>

<style lang="stylus" scoped>

@import "../../common/stylus/mixins.styl" 
.star //2x图 3x图
    float left
    font-size 0
    .star-item
        display inline-block
        background-repeat no-repeat
    &.star-48
        .star-item
            width 20px
            height 20px
            margin-right 22px
            background-size 20px 20px
            &:last-child
                margin-right: 0
            &.on
                bg-image('./images/star48_on')
            &.half
                bg-image('./images/star48_half')
            &.off
                bg-image('./images/star48_off')
    &.star-36
        .star-item
            width 15px
            height 15px
            margin-right 6px
            background-size 15px 15px
            &:last-child
                margin-right 0
            &.on
                bg-image('./images/star36_on')
            &.half
                bg-image('./images/star36_half')
            &.off
                bg-image('./images/star36_off')
    &.star-24
        .star-item
            width 10px
            height 10px
            margin-right 3px
            background-size 10px 10px
            &:last-child
                margin-right 0
            &.on
                bg-image('./images/star24_on')
            &.half
                bg-image('./images/star24_half')
            &.off
                bg-image('./images/star24_off')
</style>