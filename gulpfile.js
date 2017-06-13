const gulp = require('gulp'),
    path = require('path'),
    jade = require('gulp-jade'),
    less = require('gulp-less'),
    browserSync = require('browser-sync');

const config = {
    src: '_src',
    jade: '_src/jade',
    less: '_src/less',
    build: 'build'
};

gulp.task('jade', function(){
    gulp.src(config.jade + '/pages/*.jade')
        .pipe(jade({pretty: true}))
        .pipe(gulp.dest(config.build))
        .on('finish', function() {
            console.log('jade done');
        });
});

gulp.task('less', function(){
    return gulp.src(config.less + '/styles.less')
        .pipe(less({
            includePaths: config.less
        }))
        .pipe(gulp.dest(config.build + '/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', ['less', 'jade'],function(){
    browserSync({
        server: {baseDir: config.build},
        notify: true
    })
});

gulp.task('watch', function(){
    gulp.watch(config.less + '/**', ['less']);
    gulp.watch(['*jade', '**/*.jade'], ['jade']);
});

gulp.task('run', ['browser-sync', 'watch']);