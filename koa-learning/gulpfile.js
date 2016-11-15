const gulp = require("gulp");
const mocha = require("gulp-mocha");
const argv = require("yargs").argv;
const merge = require("merge-stream");

var testFile = "./" + argv.c + "/test.js";;

gulp.task("one", () => {
    gulp.src(testFile, {read:false})
        .pipe(mocha({reporter: "list"}))
        .once("error", () => {
            process.exit(1);
        })
        .once("end", () => {
            process.exit(); 
        });
});

gulp.task("all", () => {
    gulp.src("./*/test.js", {read : false})
            .pipe(mocha({reporter: "list"}))
            .once("end", () => {
                process.exit();
            })
});

gulp.task("default", ["one"]);