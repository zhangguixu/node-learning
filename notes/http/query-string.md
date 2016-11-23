# url & querystring

## url

在对于一个URL，其组成部分有

```
http://user:pass@host.com:8080/p/a/t/h?query=string#hash
```

|字段|说明|示例|
|:--|:--|:--|
|href|解析前的完整原始URL|--|
|protocol|请求协议|http|
|slashes|协议的`：`后是否有`/`，返回true或者false|true|
|host|URL主机名、包含端口信息|host.com:8080|
|auth|url中的认证信息|user:pass|
|port|主机的端口号|8080|
|pathname|url中的路径|/p/a/t/h|
|search|查询对象，包括之前的问号？|?query=string|
|hash|锚点部分，即#及其后面的部分|#hash|

而url模块的作用就是解析请求中的url，获取上述的字段（除锚点外，不会发送给服务器端）。注意，这个时候获取的查询字符串是完整的，还未进行解析，也就是原始的形式

```
?query1=1&query2=2
```

## API简介

### url解析成对象

url.parse()用于解析url对象，解析后返回一个JSON对象，示例

```javascript
const url = require('url');

const urlStr = 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash';
const result = url.parse(urlStr);
console.log(result);
```

![url-example](../../images/url-example.png)


### url对象解析从字符串 

url.format()用于格式化URL对象，输入一个url对象，返回url字符串

```javascript
const url = require('url');

const urlObj = { 
  protocol: 'http:',
    slashes: true,
    hostname: 'itbilu.com',
    port: 80,
    hash: '#hash',
    search: '?query=string',
    path: '/nodejs?query=string'
}

const result = url.format(urlObj);
console.log(result);
```

### url路径处理

url.resolve()用于处理url路径，分为两种情况

```javascript
// 情况1：添加，只有host，输出http://example.com/one
url.resolve('http://example.com/', '/one'); 


// 情况2：替换，输出http://example.com/two
url.resolve('http://example.com/one', '/two'); 
```

## querystring

querystring处理参数，有两个功能

* 将查询字符串转为对象： querystring.stringify(obj)
* 将对象转为查询字符串: querystring.parse(queryStr)

```javascript
const qs = require('querystring');

// 对象转换字符串
var result = qs.stringify({
    name : 'zhang',
    info : ['hello', 'world'],
    code : 1 
});

console.log(result);

// 字符串转对象
result = qs.parse('?name=zhang&info=hello&info=world&code=1');

console.log(result);
```

![querystring-example.png](../../images/querystring-example.png)

需要注意的是`?`的处理，querystring并不会帮你处理，坑！