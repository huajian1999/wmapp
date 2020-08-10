/* 使用mock数据提供mock数据接口 

Mock.mock( rurl, template )
记录数据模板。当拦截到匹配 rurl 的 Ajax 请求时，将根据数据模板 template 生成模拟数据，并作为响应数据返回。

*/
import Mock from 'mockjs'
import data from './data.json'

//返回goods接口
Mock.mock('/shop_goods',{code:0, data:data.goods});

//返回ratings接口
Mock.mock('/shop_ratings',{code:0, data:data.ratings});

//返回info接口
Mock.mock('/shop_info',{code:0, data:data.info});

//不需要暴露数据，只需要保证能执行即可