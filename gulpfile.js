// Dependencies
const browsersync = require('browser-sync')
const gulp = require('gulp')
const sass = require('gulp-sass')
const watch = require('gulp-watch')

// Create a local server
const browserSync = () => {
  browsersync.init({
    server: { baseDir: './' }
  })
}
const hotReload = (done) => {
  browsersync.reload()
  done()
}

// Compile .scss as .css
const sassCompile = () => {
  return gulp.src('./styles/sass/style.scss')
    .pipe(sass())
    .on('error', e => console.log(`Has occurred an error in a Sass file: ${e.message}`))
    .pipe(gulp.dest('./styles/css/'))
    .pipe(browsersync.stream())
}

// Check for updates
const watchChanges = () => {
  gulp.watch('./styles/sass/**/*.scss', sassCompile)
  gulp.watch('./**/*.html', hotReload)
  gulp.watch('./js/**/*.js', hotReload)
}

// Define parallel task
const start = gulp.parallel(sassCompile, browserSync, watchChanges)

// Export tasks
exports.browserSync = browserSync
exports.sassCompile = sassCompile
exports.start = start
exports.watchChanges = watchChanges