const app = module.exports = require("koa")();
const views = require("co-views");
const route = require("koa-route");
const path = require("path");

const render = views(path.join(__dirname, "/views"), {
    map : {html : "swig"}
});

// 渲染数据
const data = {
    a : "a",
    b : "b",
    c : "c"
};

// 定义路由规则
app.use(route.get("/a", renderA));
app.use(route.get("/b", renderB));
app.use(route.get("/c", renderC));

// 定义渲染页面函数
function * renderA () {
    this.body = yield render("a", { msg : data.a });
}

function * renderB () {
    this.body = yield render("b", { msg : data.b });
}

function * renderC () {
    this.body = yield render("c", { msg : data.c });
}

if(!module.parent) app.listen(3000);