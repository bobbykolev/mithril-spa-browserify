var gulp = require('gulp');
var gulpif = require('gulp-if');
//var uglify = require('gulp-uglify');
//var notify = require('gulp-notify');
//var gutil = require('gulp-util');
var gulpIgnore = require('gulp-ignore');
//var argv = require('yargs').argv;
//var development = !(argv.ENV === "production");

var paths = require('../paths');

gulp.task('jsLibs', function(){
    //var condition = /animate.min.js|angular.min.js|angular-route.min.js|angular-touch.min.js|jquery.min.|angular-sanitize.min.js|angulartics.min.js|angulartics-ga.min.js/;
    var condition = /mithril.min./;

    return gulp.src(paths.libs)
        .pipe(gulpIgnore.include(condition))
        .pipe(gulp.dest(paths.outputLibs));
});

gulp.task('libraries', ['jsLibs'], function(){
    
});