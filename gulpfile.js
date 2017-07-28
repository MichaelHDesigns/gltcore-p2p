'use strict';

var gulp = require('gulp');
var gltcoreTasks = require('gltcore-build');

gltcoreTasks('p2p', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
