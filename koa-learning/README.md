# koa-example

通过[koa-examples]((https://github.com/koajs/examples))来学习koa，会将涉及的知识和过程中遇到的问题[记录](../notes)下来。

运行例子的测试，需要在全局安装gulp

```shell
npm install -g gulp
```

由于每个例子都会开启一个server，且监听了一样的端口，因此只能每个例子单独测试，否则会发生`Uncaught Error: listen EADDRINUSE :::3000 `的错误，目前还没有想到解决的办法。

单个例子测试的指令为

```shell
# gulp -c 目录
gulp -c hello-world
```