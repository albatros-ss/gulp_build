'use strict';

global.$ = {
  package: require('./package.json'),
  config: require('./gulp/config'),
  path: {
    task: require('./gulp/paths/tasks.js'),
    jsFoundation: require('./gulp/paths/js.foundation.js'),
    cssFoundation: require('./gulp/paths/css.foundation.js'),
    app: require('./gulp/paths/app.js')
  },
  gulp: require('gulp'),
  del: require('del'),
  browserSync: require('browser-sync').create(),
  gp: require('gulp-load-plugins')()
};

$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  'clean',
  'html',
  'pug',
  $.gulp.parallel(
    'sass',
    'js:foundation',
    'js:process',
    'copy:image',
    'css:foundation',
    'copy:favicon',
    'copy:fonts',
    'sprite:svg'
  ),
  $.gulp.parallel(
    'watch',
    'serve'
  )
));

$.gulp.task('build', $.gulp.series(
  'clean',
  'html',
  'pug',
  $.gulp.parallel(
    'sass',
    'js:foundation',
    'js:process',
    'copy:image',
    'css:foundation',
    'copy:favicon',
    'copy:fonts',
    'sprite:svg'
  )
));

