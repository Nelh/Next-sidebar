const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const prefix = require('autoprefixer');
const cp = require('child_process');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');

const env = process.env.NODE_ENV || 'prod';
const processors = [prefix(),cssnano];
const jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
const messages = { 
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build',
};

var paths = {
  styles: {
    src: 'assets/scss/*.scss',
    dest: '_site/assets/css',
    destsecond: 'assets/css',
  },
  scripts: {
    src: 'assets/js/*.js',
    dest: '_site/assets/js',
    destsecond: 'assets/js',
  },
};

/**
 * Build the Jekyll Site
 */
function jekyllBuild() {
  browserSync.notify(messages.jekyllBuild);
  if (env === 'prod') {
    return cp.spawn(jekyll, ['build', '--config', '_config.yml'], { stdio: 'inherit' });
  } else {
    return cp.spawn(jekyll, ['build', '--config', '_config.yml,_config.dev.yml'],{ stdio: 'inherit' });
  }
}

function style() {
  return gulp
    .src(paths.styles.src)
    .pipe(sass({includePaths: ['scss', 'node_modules'],onError: browserSync.notify}))
    .pipe(postcss(processors))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(gulp.dest(paths.styles.destsecond))
    .pipe(browserSync.reload({ stream: true }));
}

// Reload files
function reload(done) {
  browserSync.reload();
  done();
}

// Dest files
function browserSyncServe() {
  browserSync.init({
    server: {
      baseDir: '_site',
    },
  });
}
// Gulp watch files
function watch() {
  gulp.watch(paths.styles.src, style);
  gulp.watch(['*.html','_layouts/*','_includes/*','html/**/*','assets/**/*'],gulp.series(jekyllBuild, reload));
}
/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', gulp.series(jekyllBuild, reload));
/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 * To run locally:
 * $ NODE_ENV=dev gulp
 */
gulp.task('default', gulp.parallel(jekyllBuild, browserSyncServe, watch));
/**
 * Production task
 * $ NODE_ENV=dev prod
 */
gulp.task('deploy', gulp.parallel(reload, jekyllBuild));
