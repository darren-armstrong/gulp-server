var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server for development
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./app/"
        }
    });
	
	gulp.watch("app/*").on('change', browserSync.reload);
	gulp.watch("app/*/*").on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync']);

/* production code
var gulp = require('gulp'),
	connect = require('gulp-connect');

gulp.task('webserver', function(){
	connect.server({
		root: ['./app/']
	});
});

gulp.task('default', ['webserver']);*/