1.使用stylus
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

2.引入阿里巴巴iconfont
    在线引入，在提供的链接前加上'https:'，例如
    <link rel="stylesheet" href="https://at.alicdn.com/t/font_1930333_6h962h3oep6.css">

3.引用swiper
    npm install swiper --save
    问题：
        报错找不到依赖，这是因为我们在引用swiper.css的路径可能与现有的路径不一致造成的
        完成后的目录中没有dist文件夹，可能是swiper版本号的问题，npm的版本没有锁定，造成安装错误。
        解决方法
        把npm的版本也锁定一下：打开package.json文件找到swiper版本号，对照yarn.lock的版本号改一下，或者用yarn来安装依赖，它的版本锁定不容易出问题。
    实验多次后，本项目最终解决办法：
        1.卸载已有swiper，卸不掉手动删除模块
        2.在package.json中添加：  "swiper":"^4.2.6"
        3.重新下载swiper
        4.将swiper包复制到static文件夹中
        5.在index.html中引入
        <link rel="stylesheet" href="./static/swiper/dist/css/swiper.min.css">
        <script src="./static/swiper/dist/js/swiper.min.js"></script>
        6.在需要使用轮播的模块(Home.vue)中引入Swiper
        import Swiper from 'swiper'
        7.在mounted方法中创建Swiper实例实现轮播效果

4.vue路由里的meta
    meta字段（元数据）
    直接在路由配置的时候，给每个路由添加一个自定义的meta对象，在meta对象中可以设置一些状态，来进行一些操作。用它来做登录校验再合适不过了

5.route和router

6.后台应用gshop-server_final
  数据库MongoDB
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

    启动和关闭？
        启动:net start MongoDB 
        重启:net restart MongoDB 
        关闭:net stop MongoDB 

7.安装git
    官网太慢了总是失败，用阿里镜像
    网址：https://npm.taobao.org/mirrors/git-for-windows/
