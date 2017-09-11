var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

var src = {
  html: 'src/*.html',
  scss: 'src/scss/*.scss',
  css: 'src/css'
}

gulp.task('serve', function() {
  browserSync.init({
    server: './src'
  });

  gulp.watch(src.scss, ['scss']);
  gulp.watch(src.html).on('change', reload);
});

gulp.task('scss', function() {
  return gulp.src(src.scss)
    // .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    // .pipe(autoprefixer({
    //   browsers: ['> 5% in CN' ,'not ie >= 8']
    // }))
    // .pipe(cssnano())
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest(src.css))
    .pipe(reload({ stream: true }));
})

gulp.task('default', ['serve']);