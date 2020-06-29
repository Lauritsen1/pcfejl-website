const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const connect = require("gulp-connect");
// const uglify = require("gulp-uglify");


function jsTask() {
    return gulp.src('src/js/**/*.js')
        .pipe(sourcemaps.init())
        // .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/assets/js'))
        .pipe(connect.reload());
}

function watchJS() {
    return gulp.watch("src/js/**/*.js", { ignoreInitial: false }, jsTask);
}

module.exports = {
    jsTask,
    watchJS
};