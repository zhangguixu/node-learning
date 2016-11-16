# 路由

在koa中内置了`koa-route`（官方模块）来实现路由。

自行安装

```shell
npm install koa-route
```

## 示例学习

```javascript
var _ = require('koa-route');
var Koa = require('koa');
var app = new Koa();
 
var db = {
  tobi: { name: 'tobi', species: 'ferret' },
  loki: { name: 'loki', species: 'ferret' },
  jane: { name: 'jane', species: 'ferret' }
};
 
var pets = {
  list: (ctx) => {
    var names = Object.keys(db);
    ctx.body = 'pets: ' + names.join(', ');
  },
 
  show: (ctx, name) => {
    var pet = db[name];
    if (!pet) return ctx.throw('cannot find that pet', 404);
    ctx.body = pet.name + ' is a ' + pet.species;
  }
};
 
app.use(_.get('/pets', pets.list));
app.use(_.get('/pets/:name', pets.show));
 
app.listen(3000);
console.log('listening on port 3000');
```

![完整示例](../../koa-learning/route)