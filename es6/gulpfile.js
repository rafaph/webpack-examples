'use strict';

var gulp = require('gulp');
var del = require('del');
var webpackStream = require('webpack-stream');
var webpack = require('webpack');
var menu = require('gulp-menu');
var webpackConfig = require('./webpack.config');

gulp.task('clean', function() {
  return del([
    './build/**/*'
  ]);
});

gulp.task('build', ['clean'], function() {
  
});

gulp.task('default', function() {
  menu(this);
});