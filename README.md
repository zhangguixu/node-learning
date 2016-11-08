# Node 学习

## 基本知识

1. [npm命令速查](./notes/basis/npm.md)

## 1. Nodejs 4.X 新特性

*实际上就是加入使用的es6的新特性*

1. [class](./notes/es6/class.md)

## 2. 原理学习

1. 模块机制

    1. [commonjs](./notes/module/commonjs.md)
    2. c++扩展模块
    3. npm
    4. 前后端模块化

2. 异步IO

    1. 异步IO底层概述
    2. Node的异步IO

3. 异步编程解决
4. 内存控制
6. Buffer
7. Node多进程
8. 网络编程(TCP、UDP、HTTP、Websocket)

## 3. 系统学习

### 3.1 API学习

1. [global Object](./notes/node/global-object.md)

    * __dirname

### 3.2 web开发

1. [中间件](./notes/web/middleware.md)
2. [模版](./notes/web/template.md)
3. [路由](./notes/web/route.md)
4. [cookie/session](./notes/web/cache.md)
5. [持久化](./notes/web/store.md)

## 4. 框架学习

### 4.1 koa

1. [安装与入门](./notes/koa/start.md)
2. [template](./notes/koa/template.md)

### 4.2 vue

1. [服务器端渲染](./notes/vue/ssr.md)
2. [vue-loader](./notes/vue/vue-loader.md)

## 5. 测试框架

1. mocha 
2. chai
3. [supertest](./notes/test/supertest.md)
4. [should/should-http](./notes/test/should-http.md)

测试命令

```shell
# 测试全部
npm test

# 测试全部
gulp testall

# 单个测试，带参数catalog指定目录，如果没有指定，默认测试全部
gulp test --catalog hello-world
```

## 6. 构建工具

本项目中的koa-learning目前基本都是参考[koa-examples](https://github.com/koajs/examples)，因为该项目使用的makefile来进行项目的构建，考虑到能够在window下实现自动化测试，同时作为学习，决定使用gulp。

对gulp进行全局安装（在window下比较方便）

```shell
npm install -g --save-dev gulp
```

1. [gulp入门](./notes/tools/gulp.md)
2. [gulp-mocha](./notes/tools/gulp-mocha.md)
3. [webpack](./notes/tools/webpack.md)

## 7. 更多话题

* 代码托管
* 持续集成
* 自动化测试
* 日志统计
* 性能监控
* 负载均衡
* 微服务化
* 运维部署
* 容灾备份
* 云主机/数据库

## 资料来源

1. [Node v6.9.1 API doc](https://nodejs.org/dist/latest-v6.x/docs/api/synopsis.html)
2. [CNode社区](http://cnodejs.org/)
3. [es6新特性](http://es6-features.org/)
4. [babel](http://babeljs.io/repl/)
6. [koa-examples](https://github.com/koajs/examples)
5. 《深入浅出Node.js》
