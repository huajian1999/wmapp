/* 包含多个基于state的getter计算属性的对象 */

export default{
    // 购物车总数
    totalCount(state){
        return state.cartFoods.reduce((preTotol,food) => preTotol+food.count, 0)
    },
    // 购物车总价
    totalPrice(state){
        return state.cartFoods.reduce((preTotol,food) => preTotol+(food.price * food.count), 0)
    },
    // 满意的总数
    positiveSize(state){
        return state.ratings.reduce((preTotol, rating) => preTotol+(rating.rateType==0?1:0), 0)
    },

}