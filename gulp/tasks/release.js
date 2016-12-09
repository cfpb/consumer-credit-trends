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
var inlineCss = require( 'gulp-inline-css' );
var release = config.copy.release;
var deleteLines = require('gulp-delete-lines');

gulp.task('release:removeScripts', function() {
  gulp.src( release.destFiles )
    .pipe( deleteLines( {
      'filters': [
        /<script\s/i
      ]
    } ) )
    .pipe( gulp.dest( release.dest ) );
});

// gulp.task( 'release:css', function() {
//   return gulp.src( release.src )
//     .pipe( inlineCss( {
//       preserveMediaQueries: true
//     }) )
//     .on( 'error', handleErrors )
//     .pipe( gulp.dest( './dist' ) )
//     .pipe( browserSync.reload( {
//       stream: true
//     } ) );
// } );


gulp.task( 'release:copyFiles', function() {
  return gulp.src( release.src )
    .on( 'error', handleErrors )
    .pipe( gulp.dest( release.dest ) )
    .pipe( browserSync.reload( {
      stream: true
    } ) );
} );

gulp.task( 'release',
  [
    // 'release:css',
    'release:copyFiles',
    'handlebars:dom',
    'release:removeScripts'
  ]
);