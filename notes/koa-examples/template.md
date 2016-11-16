# template

在koa中使用模版，应该怎么做？

我们从[koa-examples](https://github.com/koajs/examples)中的`package.json`中看到了模块`co-view`，在[npm](https://www.npmjs.com/package/co-view)查阅这个的文档，发现了如何在koa中使用模版。

## 1. co-view

在安装koa2的时候，就会安装`co-view`模块。

我们可以通过`map`来指定文件的渲染引擎。

```javascript
const views = require("co-views");

// path指定一个目录，map指定一个文件模版
const render = views("path", {
    map : {html : "swig"}
});

// 传递的参数对象
const test = {
    foo : "foo",
    bar : "bar"
};

// 第一个参数指定文件，第二参数传递数据，
// render函数返回的是一个Promise对象，而不是直接输出字符串，co-views的封装
const s = render("examples", { test : test});
s.then( (html) => {
    console.log(html);
});
```

## 2. swig

`swig`是一个模版引擎，可以在前后端使用，不过目前已经停止了维护。

![swig-github](https://github.com/paularmstrong/swig)

使用简单，和前端模版一样，很容易上手。示例

```html
<h1>{{ pagename|title }}</h1>
<ul>
{% for author in authors %}
    <li{% if loop.first %} class="first"{% endif %}>{{ author }}</li>
{% endfor %}
</ul>
```

```javascript
var swig  = require('swig');
var template = swig.compileFile('/absolute/path/to/template.html');
var output = template({
    pagename: 'awesome people',
    authors: ['Paul', 'Jim', 'Jane']
});
```

就可以输出

```html
<h1>Awesome People</h1>
<ul>
    <li class="first">Paul</li>
    <li>Jim</li>
    <li>Jane</li>
</ul>
```

有人基于这个实现了前后端同构，[文章地址](http://mt.sohu.com/20160523/n450941637.shtml)


## 3. 完整示例

[template](../../koa-learning/template)
