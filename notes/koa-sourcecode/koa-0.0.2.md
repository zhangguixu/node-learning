# koa-0.0.2

## 1. 概述

作为学习koa框架源码的起点，这个release版本的代码相对简单，下载源码之后，目录结构为：

![koa-0.0.2-catalog.png](../../images/koa-0.0.2-catalog.png)

源码文件就三个

* application.js 这就是koa的核心代码
* context.js 包装请求上下文
* status.js 处理HTTP状态码

## 2. application.js

### 2.1 Application对象

在此文件中，暴露的模块是一个构造函数`Application()`

```javascript
exports = module.exports = Application;

function Application() {
    if(! (this instanceof Application)) return new Application();
    // 属性
};
``` 

因此我们在使用koa时，是这样的一个形式

```javascript
const koa = require('koa');

// 实际上就是new Application()
const app = koa(); 

// 当然也可以这样写
const app = new koa();
```

Application有一个很重要的特点，那就是Application的原型对象继承了`Emitter`的原型对象，即

```javascript
Application.prototype.__proto__ = Emitter.prototype;
```

也就是说，Application对象的实例可以使用使用Emitter对象的原型方法，例如

```javascript
const koa = require('koa');
const app = koa();
app.on('error', errorHandler);
```

此外，Application对象的实例还拥有以下属性方法：

```javascript
function Application() {
    if(!(this instanceof Application)) return new Application();
    // 设置应用所处的环境，在项目的makefile中有设置
    this.env = process.env.NODE_ENV || 'development'; 
    // 出错的处理
    this.on('error', this.onerror);
    this.outputErrors = 'test' != this.env;
    this.subdomainOffset = 2;
    // 后面用于设置响应头的，显示框架koa
    this.powerredBy = true; 
    // 用于JSON.stringify的第三个参数，设置空字符个数，提高json字符串的可读性
    this.jsonSpaces = 2;


    // 中间件
    this.middleware = [];

    // 请求的上下文
    this.Context = createContext();
    this.context(context);
}
```

接下来我们分三部分看代码

* app，即Application.prototype，这部分编写了我们使用koa框架所熟悉的方法。
* context，这部分关注koa是如何包装req\res请求的。
* middleware，即中间件部分的注册，调用、执行。

### 2.2 app

app是Application.prototype的简写。

```javascript
var app = Application.prototype;
```

我们使用koa时，经常是这样的形式

```javascript
const app = require('koa')();
// 注册中间件
app.use(middlewares);
// 开启一个http服务器，监听端口
app.listen(3000);
```

先说说`app.use()`，这个函数其实非常简单，就是将我们注册的generator函数加入到`middleware`这个数组中而已

```javascript
app.use = function (fn) {
    this.middleware.push(fn);
    return this;
}
```

再来看看`app.listen()`，它其实是一个语法糖，这个函数实际上是通过`http.createServer()`来创建一个http服务器，源代码为

```javascript
app.listen = function () {
    var server = http.createServer(this.callback());
    return server.listen.apply(server, arguments);
}
```

我们查看一下`http.createServer()`的API可以发现这个方法中的参数实际上是`[requestListener]`，也就是说`this.callback()`会在接收到客户端请求时进行调用。到这里就可以明白了，koa通过`this.callback()`将一连串的中间件挂载到处理客户端请求的流程中来。

### 2.3 context

看到这里，我们必须先来了解一下`context`具体是什么东西。


## 学习总结

良好的注释风格，相当值得学习，非常细心的文档和例子。




