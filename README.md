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

## 3. API学习

## 4. 框架学习

### 4.1 koa

## 5. 测试框架

1. mocha 
2. chai
3. [supertest](./notes/test/supertest.md)


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

## 资料来源

1. [Node v6.9.1 API doc](https://nodejs.org/dist/latest-v6.x/docs/api/synopsis.html)
2. [CNode社区](http://cnodejs.org/)
3. [es6新特性](http://es6-features.org/)
4. [babel](http://babeljs.io/repl/)
6. [koa-examples](https://github.com/koajs/examples)
5. 《深入浅出Node.js》
