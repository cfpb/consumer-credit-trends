'use strict';

var gulp = require( 'gulp' );
var config = require( '../config' );
var handleErrors = require( '../utils/handle-errors' );
var handlebars = require( 'gulp-compile-handlebars' );
var rename = require( 'gulp-rename' );
var browserSync = require( 'browser-sync' );
var charts = require( '../../src/static/js/templates/charts.json' );
var templateSrc = './src/static/js/templates/svg.hbs';
var templateDest = './dist/charts/';
var fs = require( 'fs' );
var exec = require( 'child_process' ).exec;

gulp.task( 'handlebars:dom', function ( cb ) {
  exec( config.handlebarsTemplates.dom, function ( err, stdout, stderr ) {
    cb( err );
  } );
} );


// Compile templates for each chart using charts config JSON.
gulp.task( 'handlebars:compile', function () {

    for ( var i=0; i < charts.length; i++ ) {
        var chart = charts[i];
        var fileName = chart.figureID;


        gulp.src( templateSrc )
            .pipe( handlebars( chart ) )
            .pipe( rename( fileName + ".html" ) )
            .on( 'error', handleErrors )

            // @todo: pipe svg template files to a folder in /dist/, based on the directory structured by market/report type
            // @todo: run d3 code on the template output files in the /dist/ folders, and copy the flat html to /charts/ folder - this can happen in release task
            .pipe( gulp.dest( templateDest ) )
            .pipe( browserSync.reload( {
              stream: true
            } ) );
    }
} );

// Compile index file containing every chart.
gulp.task( 'handlebars:index', function () {

  var indexSrc = './src/static/js/templates/index.hbs';
  var indexDest = './dist/';

  var options = {
    batch: ['./src/static/js/templates/']
  }

  var chartData = {
    charts: charts
  }

  console.log(chartData.charts)

  gulp.src( indexSrc )
    .pipe( handlebars( chartData, options ) )
    .pipe( rename( {
      extname: '.html'
    } ) )
    .on( 'error', handleErrors )
    .pipe( gulp.dest( indexDest ) )
    .pipe( browserSync.reload( {
      stream: true
    } ) );
    
} );

gulp.task( 'handlebars',
  [
    'handlebars:compile',
    'handlebars:index'
  ]
);
