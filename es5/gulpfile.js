'use strict';

var gulp = require('gulp');
var env = require('gulp-util').env;
var del = require('del');
var webpackStream = require('webpack-stream');
var webpack = require('webpack');
var menu = require('gulp-menu');
var webpackConfig = require('./webpack.config');

var build = function() {
  if (env.prod) {
    webpackConfig.plugins = [
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: false,
        mangle: false,
        compress: {
          warnings: false
        },
        output: {
          comments: false
        }
      })
    ];
  }
  return gulp.src(webpackConfig.entry)
    .pipe(webpackStream(webpackConfig))
    .pipe(gulp.dest('./build/'));
};

gulp.task('clean', function() {
  return del([
    './build/*.js'
  ]);
});

gulp.task('build', ['clean'], function() {
  return build();
});

gulp.task('watch', ['build'], function() {
  webpackConfig.watch = true;
  return build();
});

gulp.task('default', function() {
  menu(this);
});
