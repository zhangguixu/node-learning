# Vue-loader

## 1. 入门

![Vue-loader的由来](ssr.md)

先安装loader（配合webpack）

```shell
npm install vue-loader --save-dev
```

然后在webpack的配置文件中，配置`.vue`后缀的文件的加载器为`vue`(可以省略loader)。

```javascript
// webpack.config.js

// vue-loader自己的配置
const vueConfig = require("./vue-loader.config");

module.exports = {
    module : {
        loaders : [
            {
                test : /\.vue$/,
                loader : "vue"
                options: vueConfig
            }
        ]
    }
}
```

## 2. vue-loader背后的组件化的思想

TBD...

## 资料

1. [Vue服务端渲染](http://cn.vuejs.org/guide/ssr.html)
2. [Vue-loader](http://vue-loader.vuejs.org/)
