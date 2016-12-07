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


gulp.task( 'release:copyFiles', function() {
  return gulp.src( release.src )
    // .pipe( plugins.changed( release.dest ) ) // this doesn't always notice changes!
    .pipe( inlineCss( {
      preserveMediaQueries: true
    }) )
    .on( 'error', handleErrors )
    // @todo: generate directory structure in handlebars task based on the data passed from charts.json
    // .pipe( plugins.rename( {
    //   dirname: 'auto-loans/origination-activity',
    //   extname: '.html'
    // } ) )
    .pipe( gulp.dest( release.dest ) )
    .pipe( browserSync.reload( {
      stream: true
    } ) );
} );

gulp.task( 'release',
  [
    'release:copyFiles'
  ]
);