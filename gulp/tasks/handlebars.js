'use strict';

var gulp = require( 'gulp' );
var config = require( '../config' );
var handleErrors = require( '../utils/handle-errors' );
var handlebars = require( 'gulp-compile-handlebars' );
var rename = require( 'gulp-rename' );
var browserSync = require( 'browser-sync' );
var charts = require( '../../src/static/js/templates/charts.js' );
var templateSrc = './src/static/js/templates/svg.hbs';
var exec = require( 'child_process' ).exec;

// Generate static HTML files for each rendered d3 chart.
gulp.task( 'handlebars:dom',
  [ 'release:addStyleElement' ],
  function( cb ) {
    exec( config.handlebarsTemplates.dom, function( err ) {
      cb( err );
    } );
  } );

// Compile templates for each chart using charts config js.
gulp.task( 'handlebars:compile',
  function() {

    for ( var i = 0; i < charts.length; i++ ) {
      var chart = charts[i];
      var market = chart.market;
      var reportType = chart.reportType;
      var elementID = chart.elementID;
      var filePath = './dist/charts/' + market + '/' + reportType;

      gulp.src( templateSrc )
            .pipe( handlebars( chart ) )
            .pipe( rename( elementID + '.html' ) )
            .on( 'error', handleErrors )
            .pipe( gulp.dest( filePath ) )
            .pipe( browserSync.reload( {
              stream: true
            } ) );
    }
  } );

// Compile index file containing every chart.
gulp.task( 'handlebars:index',
  function() {

    var indexSrc = [
      './src/static/js/templates/index.hbs',
      './src/static/js/templates/auto.hbs'
    ];
    var indexDest = './dist/';

    var options = {
      batch: [ './src/static/js/templates/' ]
    };

    var chartData = {
      charts: charts
    };

  // console.log(chartData.charts)

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
