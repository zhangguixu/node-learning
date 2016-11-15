const app = module.exports = require("koa")();
const parse = require("co-body");

app.use(function *(){
    var body = yield parse(this);
    if(!body.name)this.throw(400, ".name required");
    this.body = { name : body.name.toUpperCase()};
});

if(!module.parent) app.listen(3000);