const gulp = require('gulp'),
  sass = require('gulp-sass')(require('sass')),
  sourcemaps = require('gulp-sourcemaps'),
  autoprefixer = require('gulp-autoprefixer'),
  browserSync = require('browser-sync').create(),
  babel = require('gulp-babel'),
  concat = require('gulp-concat'),
  rename = require('gulp-rename'),
  csso = require('gulp-csso'),
  uglify = require('gulp-uglify');

const server = function (cb) {
  browserSync.init({
    server: {
      baseDir: './dist',
    },
    notify: false,
    open: true,
  });
  cb();
};

const css = function () {
  return gulp
    .src('src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: 'compressed',
      }).on('error', sass.logError)
    )
    .pipe(autoprefixer())
    .pipe(
      rename({
        suffix: '.min',
        basename: 'style',
      })
    )
    .pipe(csso())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
};

const js = function () {
  return gulp
    .src('src/**/*.js', { sourcemaps: true })
    .pipe(
      babel({
        presets: ['@babel/env'],
      })
    )
    .pipe(uglify())
    .pipe(concat('scripts.min.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream());
};

const html = function (cb) {
  return gulp.src('src/html/index.html').pipe(gulp.dest('dist'));
};

const htmlReload = function (cb) {
  browserSync.reload();
  cb();
};

const watch = function (cb) {
  gulp.watch('src/scss/**/*.scss', { usePolling: true }, gulp.series(css));
  gulp.watch('src/js/**/*.js', gulp.series(js));
  gulp.watch('src/html/**/*.html', gulp.series(html, htmlReload));
  cb();
};

exports.default = gulp.series(css, js, html, server, watch);
exports.css = css;
exports.watch = watch;
exports.js = js;
exports.html = html;
