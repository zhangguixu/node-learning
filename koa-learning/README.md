# koa-example

通过[koa-examples]((https://github.com/koajs/examples))来学习koa，会将涉及的知识和过程中遇到的问题[记录](../notes)下来。

运行例子的测试，需要在全局安装gulp

```shell
npm install -g gulp
```

由于每个例子都会开启一个server，且监听了一样的端口，因此只能每个例子单独测试，否则会发生`Uncaught Error: listen EADDRINUSE :::3000 `的错误，目前还没有想到解决的办法。

---------------------------------------分割线-------------------------------------------

问题分析：

在之前，一个例子中的app.js是这样编写的

```javascript
const app =  module.exports = require('koa')();

// ....

app.listen(3000);
```

注意到，这里已经为app指定了端口3000，在使用supertest生成`request`对象时，我们的代码为

```javascript
const app = require('./app')
const request = require('supertest').agent(app.listen());
```

这里的app就会默认都使用3000的端口，因此造成了冲突，解决方法就是区分app.js运行的模式，

* 如果是`node app.js`时，监听的端口是3000
* 如果是`require(./app)`的方式引入时（即进行测试的时候），不指定监听端口，让测试框架替我们选择一个端口，内部应该是会有避免端口监听冲突的机制

因此只需要在每个目录下的app.js中加入

```javascript
if(!module.parent) app.listen(3000);
```

如果是`node app.js`的形式，则module.parent为null，则app监听端口3000，如果是`require('./app')`的形式，则由测试框架来创建server，而由于没有port，则随机分配端口。

单个例子测试的指令为

```shell
# gulp -c 目录
gulp -c hello-world
```

测试全部例子

```shell
gulp all
```