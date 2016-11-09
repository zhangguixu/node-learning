# 请求参数解析

## 1. 概述

在koa中，使用的`co-body`(内置模块)来对请求数据进行解析。

```shell
npm install co-body
```

## 2. 使用简介

```javascript
const parse = require("co-body");

// application/json
var body = yield parse.json(req);

// explicit limit 
var body = yield parse.json(req, { limit: '10kb' });
 
// application/x-www-form-urlencoded 
var body = yield parse.form(req);
 
// text/plain 
var body = yield parse.text(req);
 
// either 
var body = yield parse(req);
 
// custom type 
var body = yield parse(req, { textTypes: ['text', 'html'] });
```

在koa中，我们可以用this来指代req，

```javascript
// application/json 
var body = yield parse.json(this);
 
// application/x-www-form-urlencoded 
var body = yield parse.form(this);
 
// text/plain 
var body = yield parse.text(this);
 
// either 
var body = yield parse(this);
```

[完整示例](../../koa-learning/body-parse)

## 资料

[co-body](https://www.npmjs.com/package/co-body)