# gulp-webpack

用于在gulp中使用webpack对资源进行打包，目前已经被舍弃，改为用`webpack-stream`，本项目还是使用了`gulp-webpack`

```shell
# 同样需要先安装webpack
npm install gulp-webpack --save-dev

# 如今gulp-webpack已经被舍弃掉了，可以改用webpack-stream，本项目暂时没有使用这个
```

在gulpfile.js，就可以使用webpack，示例如下

```javascript
const gulp = require("gulp");
const webpack = require("gulp-webpack");

// 获取webpack配置文件
const webpackConfig = require("./webpack.config.js");

// 先获取文件，然后将文件流通过管道传递到webpack中
gulp.task("module pack", () => {
    gulp.src("./hack-news/*") // 输入文件
        .pipe(webpack(Object.create(webpackConfig))) // 处理
        .pipe() // 输出结果，其实可以不用
})
```