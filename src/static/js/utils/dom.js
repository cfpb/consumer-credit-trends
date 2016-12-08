#!/usr/bin/env node

var d3 = require( 'd3' );
var jsdom = require( 'jsdom' ).jsdom;
var fs = require( 'fs' );

jsdom.env({
  url: "http://localhost:3000/charts/figure-1a.html",
  scripts: ["http://localhost:3000/static/js/main.min.js"],
  done: function ( err, window ) {

    window.setTimeout( getSVG, 10000 );

    function getSVG() {
        var code = window.document.querySelector( 'html' ).outerHTML;
        fs.writeFileSync( './charts/figure-1a.html', code );
    }
    // run inlineCSS and remove JS scripts.

  }
});
