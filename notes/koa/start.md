# koa

## 1. 起步

### 1.1 简介

koa是由Express原班人马打造的，致力于成为一个更小、更富有表现力、更健壮的Web框架。使用koa编写web应用，通过组合不同的generator，可以免除重复繁琐的回调函数嵌套，并极大地提升错误处理的效率。koa不在内核方法中绑定任何中间件，它仅仅提供了一个轻量优雅的函数库，使得编写Web应用变得得心应手。

个人觉得最大的特点就是引入了`es6`的很多新特性，来进一步提高框架的能力。

### 1.2 安装koa2

```shell
npm install koa@2
```

安装了框架之后，可以安装`koa-generator`，可以帮助我们快速构建项目的结构。

```shell
npm install -g koa-generator
```

安装`koa-generator`之后，就可以使用以下命令，来生成一个koa项目。

```shell
koa2 helloWorld
```

## 示例

![完整示例](../../koa-learning/hello-world)