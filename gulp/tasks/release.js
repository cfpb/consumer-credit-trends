'use strict';

/* Notes:
   - The release task copies all the HTML files from the development directory, 'dist', to the 'charts' directory
   - The 'charts' folder is tracked in version control and deployed to Github for review and production use.
*/


var gulp = require( 'gulp' );
var plugins = require( 'gulp-load-plugins' )();
var config = require( '../config' );
var handleErrors = require( '../utils/handle-errors' );
var browserSync = require( 'browser-sync' );
var release = config.copy.release;
var deleteLines = require('gulp-delete-lines');
var htmlreplace = require('gulp-html-replace');
var htmlmin = require('gulp-htmlmin');

// gulp.task('release:minify', function() {
//   return gulp.src( '/*.html' )
//     .pipe(htmlmin( {
//       maxLineLength: 200
//     } ) )
//     .pipe(gulp.dest( 'dist' ) );
// });

// Add charts.min.css to static chart files as <style> tag
gulp.task('release:addStyleElement', [ 'release:copyFiles' ], function() {
  gulp.src( './dist/**/*.html' )
    .pipe(htmlreplace({
      'css': {
        src: gulp.src( './dist/static/css/charts.min.css' ),
        tpl: '<style>%s</style>'
      }
    }))

    .pipe(gulp.dest( './dist' ));
});

gulp.task( 'release:copyFiles', 
  [ 'clean:releaseFiles' ],
  function() {
  return gulp.src( release.src )
    .on( 'error', handleErrors )
    .pipe( gulp.dest( release.dest ) )
    .pipe( browserSync.reload( {
      stream: true
    } ) );
} );

gulp.task( 'release',
  [
    'handlebars:dom',
  ], function() {

    // remove script tag from static file output
  // gulp.src( release.destFiles )
  //   .pipe(htmlreplace({
  //     'js': {
  //       src: '',
  //       tpl: ''
  //     }
  //   }))
  //   .pipe( gulp.dest( release.dest + '/charts/') );

  // remove scripts
  gulp.src( release.destFiles )
    .pipe( deleteLines( {
      'filters': [
        /<script\s+class=/i,
        // /huh/
        // /<script class="jsdom" src="http:\/\/localhost:3000\/static\/js\/main\.min\.js"><\/script>/
        // /<script src="\.\.\/\.\.\/\.\.\/static\/js\/main\.min\.js"><\/script>/
      ]
    } ) )
    // return gulp.src( '/*.html' )
    // .pipe(htmlmin( {
    //   maxLineLength: 200
    // } ) )
    // .pipe(gulp.dest( 'dist' ) );
    .pipe( gulp.dest( release.dest + '/charts/') );

} );