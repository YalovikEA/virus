global.$ = {
  path: {
    task: require('./gulp/paths/tasks.js')
  },
  gulp: require('gulp'),
  del: require('del'),
  fs: require('fs'),
  browserSync: require('browser-sync').create(),
  gp: require('gulp-load-plugins')(),
};

$.path.task.forEach(function (taskPath) {
  require(taskPath)();
});

$.gulp.task('dev', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'sass:dev',
    'html',
    'libsJS:dev',
    'js:dev',
    'svg',
    'img:dev',
    'webp',
    'fonts'
  )
));

$.gulp.task('build', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'sass:build',
    'html',
    'libsJS:build',
    'js:build',
    'svg',
    'img:build',
    'webp',
    'fonts'
  )
));

$.gulp.task('default', $.gulp.series(
  'dev',
  $.gulp.parallel(
    'watch',
    'serve'
  )
));