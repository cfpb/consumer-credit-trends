#!/usr/bin/env node

var d3 = require( 'd3' );
var jsdom = require( 'jsdom' ).jsdom;
var fs = require( 'fs' );
var charts = require( '../templates/charts.js' );

var LOCALHOST_PATH = 'http://localhost:3000/charts/';
var chartFiles = []

for ( var i = 0; i < charts.length; i++ ) {
    var chart = charts[i];
    var fileName = chart.figureID + '.html';
    chartFiles.push(fileName)
}

// run for each chart file.
for ( var i = 0; i < chartFiles.length; i++ ) {
    var chart = chartFiles[i];

    jsdom.env({
      url: LOCALHOST_PATH + chart,
      scripts: ["http://localhost:3000/static/js/main.min.js"],
      done: function ( err, window ) {

        window.setTimeout( getSVG, 10000 );

        function getSVG() {
            var code = window.document.querySelector( 'html' ).outerHTML;
            fs.writeFileSync( './charts/' + chart, code );
        }
        // run inlineCSS and remove JS scripts.

      }
    });

}
