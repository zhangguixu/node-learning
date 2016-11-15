const views = require("co-views");
// 模块导出记得写，因为要在test.js中引入
const app = module.exports = require("koa")();

// 使用swig作为模版引擎
const render = views(__dirname, {
    map : {html : "swig"}
});

// 渲染数据
const data = {
    title : "template example",
    msg : "Hello World",
    authors: ['Paul', 'Jim', 'Jane']
};

app.use(function *() {
    this.body = yield render("example", {data : data});
});

if(!module.parent) app.listen(3000);