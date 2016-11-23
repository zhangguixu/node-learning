const url = require('url');

const urlStr = 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash';
var result = url.parse(urlStr);
console.log(result);

const urlObj = { 
  protocol: 'http:',
    slashes: true,
    hostname: 'itbilu.com',
    port: 80,
    hash: '#hash',
    search: '?query=string',
    path: '/nodejs?query=string'
}


result = url.format(urlObj);
console.log(result);