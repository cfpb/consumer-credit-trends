'use strict';

/* Notes:
   - The release task copies all the HTML files from the development directory,
  'dev', to the 'dist' directory
   - The 'dist' folder is compiled by Travis CI to a gh-pages branch for review and deployment to production.
*/

var gulp = require( 'gulp' );
var config = require( '../config' );
var handleErrors = require( '../utils/handle-errors' );
var browserSync = require( 'browser-sync' );
var release = config.copy.release;
var deleteLines = require( 'gulp-delete-lines' );
var htmlreplace = require( 'gulp-html-replace' );
var htmlmin = require( 'gulp-htmlmin' );
var exit = require( 'gulp-exit' );

// Add charts.min.css to static chart files as <style> tag
gulp.task( 'release:addStyleElement', [ 'release:copyFiles' ], function() {
  gulp.src( './dev/**/*.html' )
    .pipe( htmlreplace( {
      css: {
        src: gulp.src( './dev/static/css/charts.min.css' ),
        tpl: '<style>%s</style>'
      }
    } ) )

    .pipe( gulp.dest( './dev' ) );
} );

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
    'connect',
    'handlebars:dom'
  ], function() {

  // remove scripts
    gulp.src( release.destFiles )
    .pipe( deleteLines( {
      filters: [
        /<script\s+class=/i
      ]
    } ) )
    .pipe( htmlmin( {
      collapseWhitespace: true
    } ) )
    .pipe( gulp.dest( release.dest + '/charts/' ) )
    .pipe( exit() );

  } );
