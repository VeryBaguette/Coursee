const gulp = require("gulp");
const bs = require("browser-sync");
gulp.task("hello", function () {
  console.log("hello, world!");
});

bs.create();

gulp.task("browser-sync", function () {
  bs.init({
    server: {
      baseDir: "./",
    },
  });
  gulp.watch("app/*.html").on("change", bs.reload);
});
