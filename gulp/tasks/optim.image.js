'use strict';

module.exports = function () {
    $.gulp.task('optim:image', function () {
        return $.gulp.src('./source/_rawImg/**/*.*')
            .pipe($.imagemin([
                $.imagemin.gifsicle({interlaced: true}),
                $.imageminJpegRecompress($.config.imageminJpegRecompressConfig),
                $.imageminPngquant($.config.imageminPngquantConfig),
                $.imagemin.svgo({plugins: [{removeViewBox: false}]})
            ]))
            .pipe($.gulp.dest('./source/images'));
    });
};
