var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function() {

  browserSync.init({
    notify: false,
    server: {
      baseDir: "production"
    }
  });

  watch('./production/index.html', function() {
    browserSync.reload();
  });


});
