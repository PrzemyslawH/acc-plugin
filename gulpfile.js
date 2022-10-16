'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const webpack = require('webpack');
const fileInclude = require('gulp-file-include');
const rename = require('gulp-rename');
const csso = require('gulp-csso');

const server = function (cb) {
  browserSync.init({
    server: {
      baseDir: './dist',
    },
    notify: false,
    //host: "192.168.0.24",
    //port: 3000,
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

const js = function (cb) {
  return webpack(require('./webpack.config.js'), function (err, stats) {
    if (err) throw err;
    console.log(stats);
    browserSync.reload();
    cb();
  });
};

const html = function (cb) {
  return gulp
    .src('src/html/index.html')
    .pipe(
      fileInclude({
        prefix: '@@',
        basepath: '@file',
      })
    )
    .pipe(gulp.dest('dist'));
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
