const { src, dest, watch } = require("gulp");
const gulp = require("gulp");
const browserSync = require("browser-sync");
const sass = require("gulp-sass")(require("sass"));

function bs() {
  serveSass();
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  watch("./*.html").on("change", browserSync.reload);
  watch("./js/*.js").on("change", browserSync.reload);
  watch("./sass/**/*.sass", browserSync.reload);
}

function serveSass() {
  return src("./sass/**/*.sass")
    .pipe(sass())
    .pipe(dest("./css"))
    .pipe(browserSync.stream());
}

exports.serve = bs;
