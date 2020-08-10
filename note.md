# 学习笔记

### 1.使用stylus

    stylus，是 CSS 的预处理框架。

    CSS 预处理，顾名思义，预先处理 CSS。stylus 给 CSS 添加了可编程的特性，也就是说，在 stylus 中可以使用变量、函数、判断、循环一系列 CSS 没有的东西来编写样式文件，执行这一套操作之后，这个文件可编译成 CSS 文件。

    安装：
    $ npm install stylus

    webpack.base.conf.js中引用
    {
        test: /\.css$/,
        loader:'style-loader!css-loader!stylus-loader'
    }

    使用：
    （1）花括号和分号在stylus中是可以省略的，冒号也是可以省略的，color: powderblue 可以写成 color powderblue
    （2）以缩进表示父子关系
    （3）& 表示对父级的引用
        比如：.box
                &:hover
                    background-color:red
        等于：.box:hover{background-color:red;}
    （4）变量，例如 
        $color = green
        span
            background-color: $color
    （5）函数
        add (a, b = a)
            a = unit(a, px)
            b = unit(b, px)
            a + b
        代码声明了函数 add, add 接受两个参数 a 和 b，其中 b 的默认值是 a。
        add 中调用了 stylus 的内置函数 unit，此处，unit 函数为 a 和 b赋予了单位 px。
        最后将 a 和 b 相加，并返回结果。

### 2.引入阿里巴巴iconfont

    在线引入，在提供的链接前加上'https:'，例如
    <link rel="stylesheet" href="https://at.alicdn.com/t/font_1930333_6h962h3oep6.css">

### 3.引用swiper

    地址: http://www.swiper.com.cn/
    下载: npm install --save swiper
    引用：
        import Swiper from 'swiper'
        import 'swiper/dist/css/swiper.min.css'

    问题：
        报错找不到依赖，这是因为我们在引用swiper.css的路径可能与现有的路径不一致造成的
        完成后的目录中没有dist文件夹，可能是swiper版本号的问题，npm的版本没有锁定，造成安装错误。
        解决方法
        把npm的版本也锁定一下：打开package.json文件找到swiper版本号，对照yarn.lock的版本号改一下，或者用yarn来安装依赖，它的版本锁定不容易出问题。
    问题已解决(尝试多种办法后，用回最开始的方法又没报错了)

### 4.vue路由里的meta

    meta字段（元数据）
    直接在路由配置的时候，给每个路由添加一个自定义的meta对象，在meta对象中可以设置一些状态，来进行一些操作。适合用来做登录校验

### 5.route和router

    &router：路由器对象，全局对象，包含所有路由（所有组件，非路由组件也可用）。包含一些操作路由的功能函数，来实现编程式导航（跳转路由）
    &route：当前路由对象，每一个路由都会有一个route对象，是一个局部的对象。可以获取一些当前路由信息数据的容器，path/meta/query/params

### 6.后台应用gshop-server_final

    数据库MongoDB:

    定义
        一个基于分布式文件存储的开源数据库系统。
        在高负载的情况下，添加更多的节点，可以保证服务器性能。
        MongoDB 旨在为WEB应用提供可扩展的高性能数据存储解决方案。
        MongoDB 将数据存储为一个文档，数据结构由键值(key=>value)对组成。MongoDB 文档类似于 JSON 对象。字段值可以包含其他文档，数组及文档数组。
    安装
        安装.msi(本机4.2.8)
        配置D:\MongoDB4.2.8\bin到环境变量(本机配置到了用户变量)
        在data下新建文件夹db作为默认的数据库目录
    启动MongoDB服务
        cmd进入D:\MongoDB4.2.8\bin
        mongod --dbpath D:\MongoDB4.2.8\bin
        出现waiting for connections on port 27017表示服务器启动成功
        (重新打开一个cmd输入mongo，连接上后就进入了mongo的shell)
        cmd进入后台应用，npm start
    启动和关闭(未测试)
        启动:net start MongoDB 
        重启:net restart MongoDB 
        关闭:net stop MongoDB 

### 7.vuex

    Vuex有五个核心概念：state, getters, mutations, actions, modules

    1. state：vuex的基本数据，用来存储变量
    2. getter：(state)派生的数据，相当于state的计算属性
    3. mutation：提交更新数据的方法，必须是同步的(如果需要异步使用action)。每个 mutation 都有一个字符串的 事件类型  (type) 和 一个 回调函数 (handler)。
    回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数，提交载荷作为第二个参数。
    4. action：和mutation的功能大致相同，不同之处在于 ==》1. Action 提交的是 mutation，而不是直接变更状态。 2. Action 可以包含任意异步操作。
    5. modules：模块化vuex，可以让每一个模块拥有自己的state、mutation、action、getters,使得结构非常清晰，方便管理。

### 8.vm.$nextTick( [callback] )  

    ---vue API文档
    
    将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。它跟全局方法 Vue.nextTick 一样，不同的是回调的 this 自动绑定到调用它的实例上。

 ### 9.git
    
    教程
    (https://www.cnblogs.com/yclizq/p/11204949html)

    安装
        官网太慢了总是失败，用阿里镜像
        网址：https://npm.taobao.org/mirrors/git-for-windows/
    托管
        1.创建本地仓库
        利用git命令将本地项目托管到GitHub
            git config --global user.name "Your Name" <!--huajian1999-->
            git config --global user.email "you@example.com" <!--1622646972@qq.com-->
        查看是否配置成功(有就不用配置了) 
            git config --list 

        2.创建远程仓库
        New repository
        填写name和description(可空)
        Create repository(不要勾Initialize this repository with a README )

        3.本地仓库推送到远程仓库（关联+推送）
        cd到项目目录下
        输入 git init 这时会在自己本地的文件夹中出现一个隐藏.git文件夹
        输入 git add *
        <!-- 输入 git status 这里没用到-->
        输入 git commit -m "这里是解释"<!--git commit -m "init MyVue_wmapp"-->
        输入 git remote add origin https://github.com/yourname/yourproject 后面的url是你项目的url<!--在github上建仓库后会得到该命令-->
        【  
            输入 git pull origin master 拉取一下你GitHub上的文件
            输入 git push -u origin master  向GitHub上提交你的项目
        】<!--这里用的是git push origin master-->


### 10.NaN
```
1. Boolean和Null因为在过程中会自动转换成number类型，所以会得到正确的数字。
2. NaN与任何值都不相等，包括NaN自身。
3. isNaN()方法
    该函数接收一个参数，这个参数可以是任何类型，如果接收的参数是数字类型，返回false;如果是其他类型（除了数字的任何其他类型），则返回true;
    (1)该方法在接收参数后，如果传入的参数类型不是数字类型，会尝试将该参数转换为数字类型。
    (2)如接受的参数是空，比如[]（空数组）、“”（空字符串）等，会在过程中转换为数字类型的0，从而返回false;
    (3)如果传入的参数为Null，也会返回false，在isNaN函数里，null是空值，就是0，所以会返回false。
```
```java
//例：
console.log(isNaN(100));        //返回false
console.log(isNaN("100"));        //字符串“100”被转换为数字100，所以返回false
console.log(isNaN("aaa"));        //返回true
console.log(isNaN(true));        //true转换为数字1，所以返回false
console.log(isNaN(""));            //空值会被转换为0，所以返回false
console.log(isNaN(NaN));        //返回true
console.log(isNaN([]));            //空值会被转换为0，所以返回false
console.log(isNaN(null));        //null会被转换成0，所以返回false
```
### 11.JSON

    结构+值
    结构：名称/数据类型 
    value可以变, 但结构不能变
    异步获取数据先获取初始数据，再获取包含数据的数据（数组等）

### 12.mockjs

    mock模拟数据，利用mockjs(mockjs.com)拦截ajax请求，生成随机数据
    http://mockjs.com/
    Mock.mock( rurl, template )
    记录数据模板。当拦截到匹配 rurl 的 Ajax 请求时，将根据数据模板 template 生成模拟数据，并作为响应数据返回。

### 13.Vue.set增加响应式属性

    Vue.set( target, propertyName/index, value )
    参数：
        {Object | Array} target
        {string | number} propertyName/index
        {any} value
    返回值：设置的值。
    用法：
    向响应式对象中添加一个 property，并确保这个新 property 同样是响应式的，且触发视图更新。它必须用于向响应式对象上添加新 property，因为 Vue 无法探测普通的新增 property (比如 this.myObject.newProperty = 'hi')

### 14.BetterScroll

    https://github.com/ustbhuangyi/better-scroll

    [本项目使用2.x版本]
    BetterScroll 提供了一个类，实例化的第一个参数是一个原生的 DOM 对象。当然，如果传递的是一个字符串，BetterScroll 内部会尝试调用 querySelector 去获取这个 DOM 对象。
    probeType 1-一段时间派发，2-实时派发，3-实时和惯性滚动派发scroll事件
    on 监听当前实例上的自定义事件

### 15.client & offset & scroll

    网页可见区域高：document.body.clientHeight
    网页正文全文高：document.body.scrollHeight
    网页可见区域高（包括边线的高）：document.body.offsetHeight
    网页被卷去的高：document.body.scrollTop
    屏幕分辨率高：window.screen.height

    clientHeight和offsetHeight属性和元素的滚动、位置没有关系它代表元素的高度，其中：
    clientHeight：包括padding但不包括border、水平滚动条、margin的元素的高度。
    offsetHeight：包括padding、border、水平滚动条，但不包括margin的元素的高度。

    scrollHeight代表包括当前不可见部分的元素的高度。而可见部分的高度就是clientHeight，也就是
    scrollHeight>=clientHeight恒成立,在没有滚动条时scrollHeight==clientHeight


### 16.ES方法
* #### findIndex
    ```
    https://www.runoob.com/jsref/jsref-findindex.html
    findIndex() 方法返回传入一个测试条件（函数）符合条件的数组第一个元素位置。
    findIndex() 方法为数组中的每个元素都调用一次函数执行
    当数组中的元素在测试条件时返回 true 时, findIndex() 返回符合条件的元素的索引位置，之后的值不会再调用执行函数。
    如果没有符合条件的元素返回 -1

    语法：array.findIndex(function(currentValue, index, arr), thisValue) currentValue为必需
    ```
    ```js
    //例
    var ages = [3, 10, 18, 20];
    function checkAdult(age) {
        return age >= 18;
    }
    function myFunction() {
        document.getElementById("demo").innerHTML = ages.findIndex(checkAdult);
    }
    ```
* #### reduce
    ```
    https://www.runoob.com/jsref/jsref-reduce.html
    reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
    reduce() 可以作为一个高阶函数，用于函数的 compose。

    语法: array.reduce(function(total, currentValue, currentIndex, arr),initialValue) total currentValue为必需
    （写成array.reduce((total,current) => { total+current }, 0)变成undefined，去掉花括号解决）
    ```
    ```js
    //例
    var numbers = [65, 44, 12, 4];
    function getSum(total, num) {
        return total + num;
    }
    function myFunction(item) {
        document.getElementById("demo").innerHTML = numbers.reduce(getSum);
    }
    ```

### 17.路由组件缓存和懒加载

    ```js
    //缓存 路由组件对象缓存在浏览器内存中
    <keep-alive>
        <router-view />
    </keep-alive>
    //懒加载 去后台请求路由组件的代码
    //返回路由组件的函数，只有执行此函数才会加载路由组件，第一次请求对应路由路径时执行
    // import Home from '../pages/Home/Home.vue' 改写成
    const Home = () => import('../pages/Home/Home.vue')
    ```

### 18.打包与优化

    1) vue 脚手架提供了一个用于可视化分析打包文件的包 webpack-bundle-analyzer 和配置
    2) 启用打包可视化: npm run build --report
    3) 打包后可以看到各部分占比，这里moment占比最大使用却很少，可以优化，使用data-fns代替

    打包报错：
        Error processing file: static/css/app.cafa9f4a53cec2976912fd1ece553d90.css
        (node:13496) UnhandledPromiseRejectionWarning: CssSyntaxError: D:\XAMPP\xampp\htdocs\前端
        \Vue\13-vue项目实战\code\MyVue_wmapp\static\css\app.xxx.css:1980:3: Unknown word
    解决办法：[https://blog.csdn.net/weixin_42512937/article/details/100105317]
        将webpack.prod.conf.js里的下段代码注释掉
```js
    new OptimizeCSSPlugin({
    cssProcessorOptions: config.build.productionSourceMap
        ? { safe: true, map: { inline: false } }
        : { safe: true }
    })
```


### 19.未解决

    Search.vue中的滑动效果不显示

### 掌握

    1.项目描述 （模块化、组件化、工程化）
        前后端分离的？应用
        有哪些功能模块
        用到哪些技术
        用什么开发模式
    2.技术选型（技术架构）
        //主要用到哪些技术，库、工具等
        前台数据展现交互 
        Vue及相关插件（统称Vue技术栈）
        Ajax请求库
        测试接口postman 模拟数据
        es6语法babel
    3.项目构建
        webpack
        脚手架
        stylus
    4.API接口
        请求参数的格式，响应数据的格式
        接口文档
        根据接口文档写请求函数

************************
### 其他

    cube-ui 是基于 Vue.js 实现的精致移动端组件库。
    https://github.com/didi/cube-ui/

    前台应用运行在前台服务器，后台应用运行在后台服务器
    代理(服务器)：运行在前台服务器上，用于转发前台的请求给后台(配置代理)，突破自身IP访问限制，解决跨域问题

    vuex state数据 action后台获取数据提交给mutation mutation修改state getter获取state
    异步数据见笔记总结文档或笔记

    短信验证码
        www.yuntongxun.com 注册账号,添加测试号码，修改后台代码util/sms_util.js/sendCode里的数据为自己账号的数据

    vue的ref属性 被用来给DOM元素或子组件注册引用信息。引用信息会根据父组件的 $refs 对象进行注册。如果在普通的DOM元素上使用，引用信息就是元素; 如果用在子组件上，引用信息就是组件实例

    this.$nextTick(()=>{})将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。它跟全局方法 Vue.nextTick 一样，不同的是回调的 this 自动绑定到调用它的实例上。
