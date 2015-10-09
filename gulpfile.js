var gulp    = require('gulp'),
    gutil   = require('gulp-util'),
    uglify  = require('gulp-uglify'),
    concat  = require('gulp-concat');
    open = require('gulp-open');
var del = require('del');
var minifyHTML = require('gulp-minify-html');
var minifyCSS  = require('gulp-minify-css');

gulp.task('minify', function () {
  gulp.src('js/temperature.js')
  .pipe(uglify())
  .pipe(gulp.dest('minified/js/'));

  gulp.src('./index.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('./minified/'))

  gulp.src('./css/*.css')
   .pipe(minifyCSS({keepBreaks:true}))
   .pipe(gulp.dest('./minified/css/'))
});

gulp.task('clean', function(cb) {
  del(['minified/*'], cb);
});

gulp.task("test", function(){
  gulp.src('')
    .pipe(open({ uri: 'https://alu0100536652.github.io/STW02/test/'}));
});