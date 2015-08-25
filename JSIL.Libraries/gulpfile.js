﻿var gulp = require('gulp');
var metascriptPipe = require('gulp-metascript');
var headerPipe = require('gulp-header');
var chmod = require('gulp-chmod');
var clean = require('gulp-clean');

gulp.task('metascript', function () {
  return gulp.src('Sources/**/*.js')
    .pipe(metascriptPipe())
    .pipe(headerPipe("/* It is auto-generated file. Do not modify it. */\n"))
    .pipe(chmod({ write: false }))
    .on('error', logError)
    .pipe(gulp.dest('../Libraries/'));
});

gulp.task('clean', function () {
  return gulp.src('../Libraries/', { read: false })
    .pipe(clean({ force: true }));
});

gulp.task('build-Debug', ['clean', 'metascript']);
gulp.task('build-Release', ['clean', 'metascript']);



/*Helpers*/
function logError(error) {
  console.error(error.message);
  process.exit(1);
}