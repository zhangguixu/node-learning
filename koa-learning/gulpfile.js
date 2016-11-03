const gulp = require("gulp");
const mocha = require("gulp-mocha");

gulp.task("test", () => {
    gulp.src("./hello-world/test.js", {read:false})
        .pipe(mocha({reporter: "nyan"}))
        .once("error", () => {
            process.exit(1);
        })
        .once("end", () => {
            process.exit(); 
        });
});