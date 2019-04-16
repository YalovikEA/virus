let imagemin = require('gulp-imagemin'),
    imageminJpegRecompress = require('imagemin-jpeg-recompress'),
    pngquant = require('imagemin-pngquant'),
    webp = require('imagemin-webp'),
    extReplace = require('gulp-ext-replace');

module.exports = function () {
  $.gulp.task('img:dev', () => {
    return $.gulp.src(['./src/img/**/*.{png,jpg,gif,webp,svg}', '!./src/img/svg/*'])
      .pipe($.gulp.dest('./build/img/'));
  });

  $.gulp.task('img:build', () => {
    return $.gulp.src('./src/img/**/*.{png,jpg,gif,svg}')
      .pipe($.gp.plumber())
      .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.jpegtran({progressive: true}),
        imageminJpegRecompress({
          loops: 5,
          min: 70,
          max: 75,
          quality: 'medium'
        }),
        imagemin.svgo(),
        imagemin.optipng({optimizationLevel: 3}),
        pngquant({quality: '65-70', speed: 5})
      ], {
      verbose: true
      }))
      .pipe($.gulp.dest('./build/img/'));
  });

  $.gulp.task('webp', () => {
    return $.gulp.src('./src/img/**/*.{png,jpg}')
      .pipe($.gp.plumber())
      .pipe(imagemin([
        webp({
          quality: 75
        })
      ]))
      .pipe(extReplace('.webp'))
      .pipe($.gulp.dest('./build/img/'));
  });
};
