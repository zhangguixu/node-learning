# Webpack

## 1. 安装与入门

什么是`webpack`，我想用官网上的一张图可以很好解释这个工具，那么就是资源模块的打包(可能要进行预处理，例如编译、转换等等)，不单单是js，还包括图片、css等，根据项目的需求，将这些资源打包成一个个模块，最后引入到页面中。

![what-is-webpack](../../images/what-is-webpack.png)

### 1.1 安装

```shell
npm install webpack -g
```

可以加入dev依赖中，

```shell
npm install webpack --save-dev
```

### 1.2 配置

每个项目下，都必须配置一个`webpack.config.js`（作用就跟Gruntfile.js或gulpfile一样），配置webpack的一些任务。

接下来就来看看一个配置文件中的配置项。

```javascript
// 假装是一个插件
var plugin = require("plugin");

// 前面可能要引入一些模块，但是最重要就是这个导出的配置对象
module.exports = {
    // 插件项
    plugins : [plugin],
    // 页面入口的文件配置
    entry : {
        index： "./src/index.js"
    },
    // 入口文件输出配置
    output : {
        path : "dist/js/",
        filename : "[name].bundle.js"
    },
    // 加载器配置，最重要的一个配置
    module : {
        loaders : [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    // 其他配置
    resolve : {
        root : "e:\\workplace", // 没错，我就是window的绝对路径
        extensions : ['', '.js', '.json', '.scss'],
        alias : {
            AppStore : "js/stores/AppStores.js"
        }
    }
};
```

1. plugins是插件项，我们可以安装了插件之后，在这里引入
2. entry是页面的入口文件配置，output是对应输出项的配置，例如在上面的例子中，会生成`index.bundle.js`，输出到dist/js的目录下
3. `module.loaders`是最关键的配置，它的作用是告知webpack每一种文件都需要使用什么加载器来处理，例如在配置中可以看到，css文件使用style-loader和css-loader来处理，.js文件使用jsx-loader来编译处理。

### 1.3 loader的简介

*每一个加载器都需要使用npm额外安装*

```shell
npm install xxx-loader --save-dev
```

每一种loader都可以在配置中传递所需要的参数，例如在例子中的`?limit=8192`就是一个参数，表示将所有小于8kb的图片都转为base64的形式。

### 1.4 webpack运行命令

```shell
# 方便出错的时候能查阅更详尽的信息
webpack --display-error-details

# 使用另一份配置文件(webpack.config2.js)来打包
webpack --config xxx.js

# 监听变动并自动打包
webpack --watch

# 压缩混淆脚本
webpack -p 

# 生成map映射文件，告知哪些模块被最终打包到哪里
webpack -d
```

### 1.5 其他问题及解决

1、shimming

在AMD/CMD中，我们需要对不符合规范的模块（例如一些直接返回全局变量的插件）进行`shim`处理，可以使用[exports-loader](https://github.com/webpack/exports-loader)

```javascript
{ test : require.resolve("src/swipe.js"), loader:"exports?swipe"}
```

之后就可以在脚本中引用该模块

```javascript
require("./tool/swipe.js");
```

2、自定义公共模块提取

有时候，我们需要提取多个页面之间公共模块，并将该模块打包为common.js，可以使用`CommonsChunkPlugin`

```javascript
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
module.exports = {
    entry: {
        p1: "./page1",
        p2: "./page2",
        p3: "./page3",
        ap1: "./admin/page1",
        ap2: "./admin/page2"
    },
    output: {
        filename: "[name].js"
    },
    plugins: [
        new CommonsChunkPlugin("admin-commons.js", ["ap1", "ap2"]),
        new CommonsChunkPlugin("commons.js", ["p1", "p2", "admin-commons.js"])
    ]
};
```

3、独立打包样式文件

在webpack中，默认是将样式打包到脚本中，如果想将项目的样式独立出来作为`.css`，然后在页面中以\<link\>标签引入，则需要[extract-text-webpack-plugin](https://github.com/webpack/extract-text-webpack-plugin)

```javascript
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    plugins : [new ExtractTextPlugin("[name].css")]
    // 其他配置
}
```

4、使用CDN/远程文件


## 2. 与gulp混用

借助`gulp-webpack`，我们可以在gulp构建工具中使用webpack，当然grunt也是可以的，gulp的流处理比较贴合webpack，可以更快地处理文件。

![gulp-webpack](gulp-webpack.md)

## 3. 预处理.vue

本项目中，使用`.vue`作为模板文件（希望可以前后端公用，那么开发起来就少了一道门槛，提高开发的效率）。我们在后端要使用vue框架，需要[Vue-loader](../vue/vue-loader.md)


## 资料

1. [官网](http://webpack.github.io/)
2. [webpack configuration](http://webpack.github.io/docs/configuration.html)
3. [中文指南](http://webpackdoc.com/index.html)