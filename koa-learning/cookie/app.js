const app = module.exports = require("koa")();

app.use(function *() {
    // 二次请求的时候，获取携带的cookie
    var value = this.cookies.get("name");
    
    if(!value){ // 将cookie的值返回
        value = "set cookie";
        // 设置cookie，并返回
        this.cookies.set("name", "zhang");
    }

    this.body = value;
});

if(!module.parent) app.listen(3000);