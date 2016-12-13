#!/usr/bin/env node

var d3 = require( 'd3' );
var jsdom = require( 'jsdom' ).jsdom;
var fs = require( 'fs' );
var charts = require( '../templates/charts.js' );
var getFilePath = require( '../utils/getFilePath.js' );
var LOCALHOST_PATH = 'http://localhost:3000/';

// run for each chart.
for ( var i = 0; i < charts.length; i++ ) {
  var chart = charts[i];

  jsdom.env( {
    url: LOCALHOST_PATH + getFilePath( chart ),
    scripts: ["http://localhost:3000/static/js/main.min.js"],
    done: function ( err, window ) {

      function getSVG() {
        var code = window.document.querySelector( 'html' ).outerHTML;
        var filePath = window.location.href.split(/^http:\/\/localhost:3000\//)[1];
        fs.writeFileSync( './' + filePath, code );
        process.stdout.write( 'location is ' + window.location.href + '\n');
        process.stdout.write( 'writing to: ' + filePath + '\n');
      }

      window.setTimeout( getSVG, 15000 );

    }
  } );
}
