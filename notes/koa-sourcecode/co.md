# co函数库

## 1. 概述

co函数库是著名程序员tj于2013年6月发布的一个小工具，用于Generator函数的自动执行。

```javascript
var gen = function *() {
    var f1 = yield readFile('f1.txt');
    var f2 = yield readFile('f2.txt');
    console.log(f1.toString() + ' ' + f2.toString());
};

var co = require('co');
// 自动执行generator函数，并且返回一个Promise对象
co(gen).then(() => console.log('end'));
```

## 2. co函数库的原理

而co的自动执行意味着什么？

1. 调用gen()，返回一个Iterator对象
2. 等待异步操作结束，调用next()方法，拿回执行权
3. 返回一个Promise对象，使其可以在执行结束时，注册回调。

第二点


那么它大概的形式就是：

```javascript
function co(generator) {
    return new Promise((resolve, reject) => {});
}
```

能够对异步操作进行封装的，也就是Promise对象




## 来源

1. [co-阮一峰](http://www.ruanyifeng.com/blog/2015/05/co.html)
2. [co-tj](https://github.com/tj/co)

