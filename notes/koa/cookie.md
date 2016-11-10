# cookie

在koa中，操作cookie是很简单的事情

```javascript
const app = require("koa")();
app.use(function *() {
    // 获取
    var value = this.cookies.get("key");
    // 写入
    this.cookies.set("key", value + "-world");
});
```

![详细示例](../../koa-learning/cookie)