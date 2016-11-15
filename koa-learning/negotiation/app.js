const app = module.exports = require('koa')();

// 数据源
const foo = {
    _id : '123',
    name : 'foo'
};

const bar = {
    _id : '124',
    name : 'bar'
};

const users = {
    foo : foo,
    bar : bar
};

// 处理返回的数据格式
app.use(function *(next) {
    yield next; //先放弃执行等待数据

    if(!this.body) return;

    // 获取请求头中的Accept
    //如果包含以下格式中的任意一种则返回，如果不存在则返回false
    var type = this.accepts('json', 'html', 'xml', 'text');

    if(type === false) this.throw(406);

    switch(type) {
        case 'xml' : {
            this.type = 'xml';
            this.body = '<name>' + this.body.name + '</name>';
            return;
        }
        case 'html' : {
            this.type = 'html';
            this.body = '<h1>' + this.body.name + '</h1>';
            return;
        }
        case 'json' : {
            // json格式，koa会自动处理
            return ;
        }
        case 'default' : {
            this.type = 'text';
            this.body = this.body.name;
        }
    }
});

// 去除数据私有属性
app.use(function * (next) {
    yield next; // 同样是等待数据

    if(!this.body) return;

    // 去除掉私有的属性，其实意义不大，就是为了说明整个流程而已
    delete this.body._id; 
});

// 解析path，获取数据
app.use(function *(){
    var name = this.path.slice(1);
    this.body = users[name];
});

if(!module.parent) app.listen(3000);