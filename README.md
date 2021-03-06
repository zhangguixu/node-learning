# Node 学习

## 基本知识

1. [npm命令速查](./notes/basis/npm.md)

## 1. Nodejs 4.X 新特性

*实际上就是加入使用的es6的新特性*

1. [class](./notes/es6/class.md)
2. [generator](./notes/es6/generator.md)
3. [Promise](./notes/es6/promise.md)
4. [async/await](./notes/es6/async-await.md)

## 2. 原理学习

1. 模块机制

    1. [commonjs](./notes/module/commonjs.md)
    2. c++扩展模块
    3. npm
    4. 前后端模块化

2. 异步IO

    1. 异步IO底层概述
    2. Node的异步IO
    3. [协程](./notes/aio/coroutine.md)
    4. [EventEmitter](./notes/aio/event-emitter.md)

3. 异步编程解决
4. 内存控制
6. Buffer
7. Node多进程
8. 网络编程(TCP、UDP、HTTP、Websocket)

    * [querystring](./notes/http/query-string.md)
    * [mime](./notes/http/mime.md)
    * [http](./notes/http/http.md)

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

*koa例子学习*

1. [安装与入门](./notes/koa-examples/start.md)
2. [模版](./notes/koa-examples/template.md)
3. [路由](./notes/koa-examples/route.md)
4. [请求参数解析](./notes/koa-examples/body-parse.md)
5. [cookie](./notes/koa-examples/cookie.md)
6. [执行流程](./notes/koa-examples/negotiation.md)

*koa源码学习*

1. [学习思路及资料汇总](./notes/koa-sourcecode/route.md)
2. [koa-0.0.2](./notes/koa-sourcecode/koa-0.0.2.md)

### 4.2 vue

1. [服务器端渲染](./notes/vue/ssr.md)
2. [vue-loader](./notes/vue/vue-loader.md)

## 5. 测试框架

1. mocha 
2. chai
3. [supertest](./notes/test/supertest.md)
4. [should/should-http](./notes/test/should-http.md)

## 6. 构建工具

本项目中的koa-learning目前基本都是参考[koa-examples](https://github.com/koajs/examples)，因为该项目使用的makefile来进行项目的构建，考虑到能够在window下实现自动化测试，同时作为学习，决定使用gulp。

对gulp进行全局安装（在window下比较方便）

```shell
npm install -g --save-dev gulp
```

1. [gulp入门](./notes/tools/gulp.md)
2. [gulp-mocha](./notes/tools/gulp-mocha.md)
3. [webpack](./notes/tools/webpack.md)
4. [yargs](./notes/tools/yargs.md)

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
