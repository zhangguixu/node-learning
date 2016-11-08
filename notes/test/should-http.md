# should-http

专用于http中的request和response做断言测试。是断言框架`should`的一个扩展。

## 1. 安装

```shell
# 先安装should
npm install --save-dev should

# 再安装should-http
npm install should-http --save-dev
```

## 2. 使用

在测试文件中，加入

```javascript
require("should-http");
```

即可在文件中使用模块的方法。

## 3. 方法

**.status(code)**

断言状态码

```javascript
res.should.hava.status(200);
```

**.header(field[,value])**

http头部字段断言

```javascript
res.should.hava.header("content-length");
res.should.hava.header("Content-Length", "123");
```

**.json**

返回结果为json，根据http头的`Content-Type`为`application/json;charset=utf-8`来判断

```javascript
res.should.be.json
```

**.html**

返回结果为html文档，根据http头的`Content-Type`为`text/html;charset=utf-8`来判断

```javascript
res.should.be.html
```

## 资料

[npm:should-http](https://www.npmjs.com/package/should-http)