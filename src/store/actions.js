/* 通过mutation间接更新state的多个方法的对象 */

import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECEIVE_USERINFO,
    RESET_USERINFO,
    RECEIVE_GOODS,
    RECEIVE_INFO,
    RECEIVE_RATINGS,
    INCREMENT_FOODCOUNT,
    DECREMENT_FOODCOUNT,
    CLEAR_CART,
    RECEIVE_SEARCH_SHOPS,
    CLEAR_SEARCH_SHOPS
} from './mutation-types'

import {
    reqAddress, 
    reqFoodCategorys,
    reqShops,
    reqUserInfo,
    reqLogout,
    reqShopInfo,
    reqShopGoods,
    reqShopRatings,
    reqSearchShops
} from '../api'

export default{
    //1、异步获取地址
    async getAddress({commit, state}){
        //发送异步ajax请求
        const geohash = state.latitude + ',' + state.longitude;
        const result = await reqAddress(geohash);
        //提交一个mutation
        if(result.code == 0){
            const address = result.data;
            commit(RECEIVE_ADDRESS, {address})
        }
    },
    //2、异步获取分类列表
    async getCategorys({commit, state}){
        //发送异步ajax请求
        const result = await reqFoodCategorys()
        //提交一个mutation
        if(result.code == 0){
            const categorys = result.data;
            commit(RECEIVE_CATEGORYS, {categorys})
        }
    },
    //3、异步获取商家列表
    async getShops({commit, state}){
        //发送异步ajax请求
        const {latitude, longitude} = state
        const result = await reqShops({latitude, longitude})
        //提交一个mutation
        if(result.code == 0){
            const shops = result.data;
            commit(RECEIVE_SHOPS, {shops})
        }
    },

    //4、同步记录用户信息
    recordUser({commit},userInfo){
        commit(RECEIVE_USERINFO,{userInfo})
    },

    //5、异步获取用户信息
    async getUserInfo({commit}){
        const result = await reqUserInfo();
        if (result.code == 0){
            const userInfo = result.data;
            commit(RECEIVE_USERINFO,{userInfo})
        }
    },

    //6、异步登出
    async logout({commit}){
        const result = await reqLogout();
        if (result.code == 0){
            commit(RESET_USERINFO)
        }
    },


    // 异步获取商家信息
    async getShopInfo({commit}){
        const result =await reqShopInfo();
        if (result.code == 0){
            const info = result.data;
            commit(RECEIVE_INFO,{info});
        }
    },
    // 异步获取评价信息
    async getShopRatings({commit}, callback){
        const result =await reqShopRatings();
        if (result.code == 0){
            const ratings = result.data;
            commit(RECEIVE_RATINGS,{ratings});
            //数据更新了，通知组件(shopGoods
            // callback();
            callback && callback(); //可能不会传
        }
    },
    // 异步获取商品信息
    async getShopGoods({commit}, callback){
        const result =await reqShopGoods();
        if (result.code == 0){
            const goods = result.data;
            commit(RECEIVE_GOODS,{goods});
            //数据更新了，通知组件(shopGoods
            // callback();
            callback && callback(); //可能不会传
        }
    },

    //同步更新添加food的数量
    updateFoodCound({commit}, {isAdd,food}){
        if (isAdd){
            commit(INCREMENT_FOODCOUNT,{food});
        }else{
            commit(DECREMENT_FOODCOUNT,{food});
        }
    },

    //同步清空购物车
    clearCart({commit}){
        commit(CLEAR_CART);
    },

    //异步获取搜索到的商家列表
    async getSearchShops({commit, state}, keyword){
        const geohash = state.latitude + ',' + state.longitude;
        const result = await reqSearchShops(geohash,keyword)
        if(result.code == 0){
            const searchShops = result.data;
            commit(RECEIVE_SEARCH_SHOPS, {searchShops})
        }
    },
    //同步清空搜索结果
    clearSearchShops({commit}){
        commit(CLEAR_SEARCH_SHOPS);
    }
    

}