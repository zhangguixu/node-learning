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

gulp.task("default", ["one"]);

// const examples = [
//     "hello-world",
//     "template",
//     "route",
//     "body-parse",
//     "cookie"
// ];

// function getTestFileArr (){
//     return examples.map( (v) => {
//         return ("./" + v + "/test.js");
//     });
// }

// gulp.task("all", () => {
//     var tasks = getTestFileArr().map((v) => {
//         return gulp.src(v, {read : false})
//             .pipe(mocha({reporter: "nyan"}));
//     });

//     merge(tasks);
// });