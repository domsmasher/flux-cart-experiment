var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    handleError;

handleError = function (err) {
  console.log(err.toString());
  this.emit('end');
};


gulp.task('scripts', function () {
  return browserify('./src/js/main.js', {transform: 'reactify'})
    .bundle().on('error', handleError)
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function() {
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
});


gulp.task('default',['scripts', 'copy']);

gulp.task('watch', function() {
  gulp.watch('./src/**/*.*', ['default']);
});
