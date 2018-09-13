const gulp = require('gulp');
const minify = require('gulp-clean-css');

gulp.task('minify-css', () => {
  return gulp.src('./src/*.css')
  .pipe(minify({compatibility:'ie8'}))
  .pipe(gulp.dest('dist'))
});