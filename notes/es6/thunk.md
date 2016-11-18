# Thunk

## 1. 诞生背景

Thunk函数的诞生是源于一个编译器设计的问题：`求值策略`，即函数的参数到底应该何时求值。

例如：

```javascript
var x = 1;
function f(m) {
    return m * 2;
}
f(x + 5);
```

其中`x+5`这个表达式应该什么时候求值，有两种思路

* 传值调用(call by value)，即在进入函数体之间，先计算x+5的值，再将这个值（6）传入函数f，例如c语言，这种做法的好处是实现比较简单，但是有可能会造成性能损失。
* 传名调用(call by name)，即直接将表达式(x+5)传入函数体，只在用到它的时候求值。

## 2. Thunk函数的含义


## 来源

1. [Thunk-阮一峰](http://www.ruanyifeng.com/blog/2015/05/thunk.html)