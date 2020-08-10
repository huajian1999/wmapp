/* 直接更新state的多个方法的对象 */
import Vue from 'vue'
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECEIVE_USERINFO,
    RESET_USERINFO,
    RECEIVE_GOODS,
    RECEIVE_RATINGS,
    RECEIVE_INFO,
    INCREMENT_FOODCOUNT,
    DECREMENT_FOODCOUNT,
    CLEAR_CART,
    RECEIVE_SEARCH_SHOPS,
    CLEAR_SEARCH_SHOPS
} from './mutation-types'

export default{
    //方法
    [RECEIVE_ADDRESS](state,{address}){//不能直接传address，传包含address的对象
        state.address = address;
    },

    [RECEIVE_CATEGORYS](state, {categorys}) {
        state.categorys = categorys;
    },

    [RECEIVE_SHOPS](state, {shops}) {
        state.shops = shops;
    },

    [RECEIVE_USERINFO](state,{userInfo}){
        state.userInfo = userInfo;
    },

    [RESET_USERINFO](state){
        state.userInfo = {};
    },


    [RECEIVE_INFO](state, {info}) {
        state.info = info
    },
    [RECEIVE_GOODS](state, {goods}) {
        state.goods = goods
    },
    [RECEIVE_RATINGS](state, {ratings}) {
        state.ratings = ratings
    },
    
    [INCREMENT_FOODCOUNT](state, {food}){
        if (!food.count){
            // food.count = 1; //新增属性，没有数据绑定
            Vue.set(food, 'count', 1); //让新增属性也有数据绑定
            //将food加入到cartFoods中
            state.cartFoods.push(food);
        }else{
            food.count++;
        }
    },
    [DECREMENT_FOODCOUNT](state, {food}){
        if (food.count){
            food.count--;
            if (food.count == 0){
                //将food从cartFoods中移除
                state.cartFoods.splice(state.cartFoods.indexOf(food),1);
            }
        }
    },

    [CLEAR_CART](state){
        state.cartFoods.forEach(food => {
            food.count = 0;
        });
        state.cartFoods = [];
    },
    [RECEIVE_SEARCH_SHOPS](state, {searchShops}){
        state.searchShops = searchShops;
    },
    [CLEAR_SEARCH_SHOPS](state){
        state.searchShops = [];
    }

}