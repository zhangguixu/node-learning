const gulp = require("gulp");
const mocha = require("gulp-mocha");

const catalog = gulp.env.catalog;
const testFile = "./" + (catalog || "*") + "/test.js";

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


