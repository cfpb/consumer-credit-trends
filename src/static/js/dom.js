#!/usr/bin/env node

var d3 = require( 'd3' );
var jsdom = require( 'jsdom' ).jsdom;
var fs = require( 'fs' );

var body = d3.select( jsdom().documentElement ).select( 'body' );

var width = 500,
    height = 100;

var svg = body.append( 'svg' )
    .classed( 'chart', true )
    .attr( 'width', width )
    .attr( 'height', height )

svg.append( 'text' )
    .text( 'This is just an svg' )
    .attr( 'transform', 'translate(0,50)' )

var result = body.node().innerHTML;

fs.writeFileSync( './src/static/js/templates/partials/chart.hbs', result );
