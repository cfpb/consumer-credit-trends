'use strict';

var gulp = require( 'gulp' );
var config = require( '../config' );
var handleErrors = require( '../utils/handle-errors' );
var handlebars = require( 'gulp-compile-handlebars' );
var rename = require( 'gulp-rename' );
var charts = require( '../../src/static/js/templates/charts.json' );
var templateSrc = './src/static/js/templates/svg.hbs';

gulp.task( 'handlebars:compile', function () {
    for ( var i=0; i < charts.length; i++ ) {
        var chart = charts[i];
        var fileName = chart.figureID.toLowerCase();

        gulp.src( templateSrc )
            .pipe( handlebars( chart ) )
            .pipe( rename( fileName + ".html" ) )
            .on( 'error', handleErrors )
            .pipe( gulp.dest( config.copy.release.dest + '/test' ) );
    }
} );

gulp.task( 'handlebars',
  [
    'handlebars:compile'
  ]
);
