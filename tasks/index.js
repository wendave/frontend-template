'use strict';

const gulp = require('gulp');

const path = {
  baseUrl: '..',
  src: '../src/',
  dist: '../dist/',

  sass: {
    outputStyle: 'compressed',
    includePaths: [],
  },

  sources: {
    sass: [
      '../src/styles/main.scss',
    ],
  },
};

require('./serve')(gulp, path);
require('./assets')(gulp, path);

gulp.task(
  'default',
  gulp.series(
    gulp.parallel('assets'),
    'serve',

    (done) => done()
  )
);
