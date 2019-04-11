const gulp = require("gulp");
const sass = require("gulp-sass");
const clean = require("gulp-clean-css");

gulp.task('sass', () => {
  return (
    gulp.src('htdocs/scss/**/*.scss')
      .pipe(sass({outputStyle: 'expanded'}))
      // .pipe(clean())
      .pipe(gulp.dest('htdocs/css/'))
  );
});

gulp.task('watch', () => {
  return (
    gulp.watch('htdocs/scss/**/*.scss', gulp.parallel('sass'))
  );
});

const browserSync = require('browser-sync').create();
gulp.task('server', () => {
  return (
    browserSync.init({
      server: {
        baseDir: 'htdocs',
        ghostMode: false,
      },
      files: ['htdocs/**/*.{html,css,js}']
    })
   );
});

gulp.task('default', gulp.parallel('sass', 'watch', 'server'));