# querystring

## url背景知识

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

## 作用

解析请求中的url，获取上述的字段（除锚点外，不会发送给服务器端）。

