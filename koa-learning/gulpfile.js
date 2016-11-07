const gulp = require("gulp");
const mocha = require("gulp-mocha");

const catalog = gulp.env.catalog;
const testFile = "./" + (catalog || "*") + "/test.js";

// webpack
const webpackConfig = require("./vue-webpack/webpack.config");

gulp.task("test", () => {
    gulp.src(testFile, {read:false})
        .pipe(mocha({reporter: "nyan"}))
        .once("error", () => {
            process.exit(1);
        })
        .once("end", () => {
            process.exit(); 
        });
});

// 全部测试
gulp.task("testall", () => {
    gulp.src("./*/test.js", {read:false})
        .pipe(mocha({reporter: "nyan"}))
        .once("error", () => {
            process.exit(1);
        })
        .once("end", () => {
            process.exit(); 
        });
});

// 配置webpack打包处理
// tbd

