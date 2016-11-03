# gulp-mocha

## 1. 简介

这个gulp插件是用来运行mocha。

*注意，这个只是一个插件，在此之前需要安装mocha框架*

```shell
npm install --save-dev gulp-mocha
```

## 2. 使用示例

```javascript
const gulp = require("gulp");
const mocha = require("gulp-mocha");

gulp.task("test", () => {
    gulp.src("test.js", {read:false})
        .pipe(mocha({reporter: "nyan"}))
        // 执行测试后，退出进程
        .once("error", () => {
            process.exit(1);
        })
        .once("end", () => {
            process.exit(); 
        });
});
```

## 3. 更多

1. [npm文档](https://www.npmjs.com/package/gulp-mocha)
2. [github](https://github.com/sindresorhus/gulp-mocha)