/*ajax 请求函数模块
返回值：propmise对象(异步返回的数据是response.data)
*/
import axios from 'axios'

export default function ajax(url = '', data = {}, type = 'GET') {
    return new Promise(function (resolve, reject) { //高阶函数
        let promise
        if (type === 'GET') {
            // 准备 url query 参数数据
            let dataStr = '' //数据拼接字符串
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] + '&'
            })
            if (dataStr !== '') {
                dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
                url = url + '?' + dataStr
            }
            // 发送 get 请求
            promise = axios.get(url)
        } else {
            // 发送 post 请求
            promise = axios.post(url, data)
        }
        promise.then(response => {
            //成功了则调用resolve()
            resolve(response.data)//直接返回数据
        })
        .catch(error => {
            //失败了则调用reject()
            reject(error)
        })
    })
}