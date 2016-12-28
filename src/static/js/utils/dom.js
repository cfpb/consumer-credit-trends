#!/usr/bin/env node
'use strict';

var jsdom = require( 'jsdom' ).jsdom;
var fs = require( 'fs' );
var charts = require( '../templates/charts.js' );
var getFilePath = require( '../utils/get-file-path.js' );
var LOCALHOST_PATH = 'http://localhost:8081/';

// run for each chart.
for ( var i = 0; i < charts.length; i++ ) {
  var chart = charts[i];

  jsdom.env( {
    url: LOCALHOST_PATH + getFilePath( chart ),
    scripts: [ 'http://localhost:8081/static/js/main.min.js' ],
    done: function( err, window ) {

      if ( err ) {
        process.stdout.write( err );
      }

      /**
       * Copies the dynamic, rendered HTML for each chart to a compiled static
        HTML file.
       *
       */
      function getSVG() {
        var code = window.document.querySelector( 'html' ).outerHTML;
        var filePath =
          window.location.href.split( /^http:\/\/localhost:8081\// )[1];
        fs.writeFileSync( './' + filePath, code );
        process.stdout.write( 'location is ' + window.location.href + '\n' );
        process.stdout.write( 'writing to: ' + filePath + '\n' );
      }

      window.setTimeout( getSVG, 17000 );

    }
  } );
}
