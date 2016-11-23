const qs = require('querystring');

// 对象转换字符串
var result = qs.stringify({
    name : 'zhang',
    info : ['hello', 'world'],
    code : 1 
});

console.log(result);

// 字符串转对象
result = qs.parse('?name=zhang&info=hello&info=world&code=1');

console.log(result);