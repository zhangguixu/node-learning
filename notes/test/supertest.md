# SuperTest

## 1. 简介

SuperTest是SuperAgent的一个扩展，对其底层API的封装，一个轻量级的HTTP AJAX请求库，它可以用来测试nodejs项目中的Restful API。

## 2. 安装

```shell
npm install supertest
```

*在package.json中开发依赖模块中有。*

## 3. 使用示例

在这个框架中，主要就是向我们所编写的服务器发送请求，因此，最重要的就是`request`，我们结合mocha和chai，在测试代码中使用supertest来发送请求，并且测试结果是否符合预期。

```javascript
const request = require("supertest");
const app = require("./app"); // 预先写好的一个web应用服务

describe("get /user", function () {
    it("respons with json", function (done) {
        request(app)
            .get("/user") // 发送请求
            .set("Accpet", "application/json") // 设置http头
            .expect("Content-Type", /json/) // 断言
            .expect(200, done); // 回调done，测试结束
    });
});
```

注意，代码中的`expect`方法是supertest中自带的API方法，而describe和it则是mocha框架带来的。


**使用post请求**

```javascript
request(app)
    .post('/')
    .field('name', 'my awesome avatar') // 参数
    .attach('avatar', 'test/fixtures/homeboy.jpg') // 文件
```

## 4. 更多

[superTest github地址](https://github.com/visionmedia/supertest)