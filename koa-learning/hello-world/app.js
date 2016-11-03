const koa = require('koa');
const app = module.exports = koa();

app.use(function *() {
  this.body = 'Hello World';
});

app.listen(3000);