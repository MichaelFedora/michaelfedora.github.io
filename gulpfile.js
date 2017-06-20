// @ts-check
// tsc  & node-sass
// move html, assets, js, etc
// move package.json
// npm install --production

var gulp = require('gulp');
var plumber = require('gulp-plumber'); // continue on error (i.e. 'watch')
var sequence = require('run-sequence'); // run things in sequence (i.e. not-parallel)
var inject = require('gulp-js-text-inject'); // inject html into js files

var tsc = require('gulp-typescript');
var tsProject = tsc.createProject('tsconfig.json'); // compile es6 to es5
var sass = require('gulp-sass'); // compile sass to css

var del = require('del'); // delete files (clean)

var webpackConfig = require('./webpack.config.js');
var webpackStream = require('webpack-stream'); // packing!
var webpack = require('webpack');

let destStage = 'stage';
let destBuild = 'dist';


gulp.task('clean', () => {
  return del([destStage, destBuild]);
});

gulp.task('clean:light', () => {
  return del([destBuild + '/**/*'], [destStage + '/**/*']);
});

gulp.task('tsc', () => {
  return tsProject.src()
            .pipe(plumber())
            .pipe(tsProject()).js
            .pipe(gulp.dest(destStage));
            // I used to run a fork and do gzip too, but I wasn't getting all my js files :(
});

gulp.task('sass', () => {
  return gulp.src('src/**/*.scss')
              .pipe(plumber())
              .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
              .pipe(gulp.dest(destStage));
});

gulp.task('html', () => { // move html files
  return gulp.src('src/**/*.html')
            .pipe(plumber())
            .pipe(gulp.dest(destStage));
});

gulp.task('assets', () => { // move assets
  return gulp.src('src/assets/**/*')
            .pipe(plumber())
            .pipe(gulp.dest(destBuild + '/assets'));
});

gulp.task('index', () => { // move root assets...
  return gulp.src(['src/index.html', 'src/favicon.ico', 'src/.nojekyll', 'src/404.html'])
            .pipe(plumber())
            .pipe(gulp.dest(destBuild));
});

gulp.task('inject:stage', () => {
  return gulp.src(destStage + '/**/*.js')
    .pipe(inject({
      relative: true
    }))
    .pipe(gulp.dest(destStage));
});

gulp.task('bundle', () => {
  return gulp.src('')
          .pipe(plumber()) //          development | production
          .pipe(webpackStream(webpackConfig('development'), webpack))
          .pipe(gulp.dest(destBuild));
});

gulp.task('bundle:prod', () => {
  return gulp.src('')
          .pipe(plumber()) //          development | production
          .pipe(webpackStream(webpackConfig('production'), webpack))
          .pipe(gulp.dest(destBuild));
});

gulp.task('tidy', () => {
  return del(destStage);
})

gulp.task('build', (cb) => sequence('clean:light', ['tsc', 'sass', 'html', 'index', 'assets'], 'inject:stage', 'bundle', 'tidy', cb)); // build everything (don't uglify)
gulp.task('build:prod', (cb) => sequence('clean:light', ['tsc', 'sass', 'html', 'index', 'assets'], 'inject:stage', 'bundle:prod', 'tidy', cb)); // build everything

gulp.task('watch', (cb) => {
  gulp.watch('src/**/*.js', ['tsc']);
  gulp.watch('src/**/*.scss', ['sass']);
  gulp.watch('src/**/*.html', ['html']);
  gulp.watch('src/assets/**/*', ['assets']);
  cb();
});

// TODO: do something with webpack(?) - server instead of re-publishing every time :T
gulp.task('live', (cb) => sequence('clean', 'build', 'watch', cb));
