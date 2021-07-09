function defaultTask(cb) {
  console.log("Hello, Mars!");
  cb();
}
exports.default = defaultTask;

import gulp from "gulp";
gulp.task("hello", function () {
  console.log("hello, world!");
});

import bs from "browser-sync";
bs.create();

gulp.task("browser-sync", function () {
  bs.init({
    server: {
      baseDir: "./",
    },
  });
  gulp.watch("app/*.html").on("change", bs.reload);
});
