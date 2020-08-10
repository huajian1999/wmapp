import Vue from 'vue'
// import moment from 'moment'
import format from 'date-fns/format'

//自定义过滤器
Vue.filter('dateformat',function(value,formatStr='YYYY-MM-DD HH:mm:ss'){//默认值
    // return moment(value).format(formatStr);
    return format(value, formatStr);
})