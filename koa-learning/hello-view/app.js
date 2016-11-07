const app = require("koa")();

app.get("/view-test", function *(){
    yield this.render()
})