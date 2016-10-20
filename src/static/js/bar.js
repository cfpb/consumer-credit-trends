'use strict';

var d3 = require( './d3/d3.js' );

var margin = {top: 20, right: 20, bottom: 70, left: 100},
    width = 850 - margin.left - margin.right,
    height = 550 - margin.top - margin.bottom;

var x = d3.scaleBand()
    .range( [ 0, width ] )
    .padding( .10 );

var y = d3.scaleLinear()
    .range( [ height, 0 ] );

var svg = d3.select( '#bar' )
  .append( 'svg' )
    .attr( 'width', width + margin.left + margin.right)
    .attr( 'height', height + margin.top + margin.bottom)
  .append( 'g' )
    .attr( 'transform', 
          'translate( ' + margin.left + ',' + margin.top + ' )' );  

var data = [
  { date: '2009-01-01', amount: -40 },
  { date: '2009-02-01', amount: -38 },
  { date: '2009-03-01', amount: -35 },
  { date: '2009-04-01', amount: -31 },
  { date: '2009-05-01', amount: -33 },
  { date: '2009-06-01', amount: -25 },
  { date: '2009-07-01', amount: -22 },
  { date: '2009-08-01', amount: -16 },
  { date: '2009-09-01', amount: -12 },
  { date: '2009-10-01', amount: -9 },
  { date: '2009-11-01', amount: -5 },
  { date: '2009-12-01', amount: -1 },
  { date: '2010-01-01', amount: 4 },
  { date: '2010-02-01', amount: 10 },
  { date: '2010-03-01', amount: 12 },
  { date: '2010-04-01', amount: 9 },
  { date: '2010-05-01', amount: 15 },
  { date: '2010-06-01', amount: 26 },
  { date: '2010-07-01', amount: 28 },
  { date: '2010-08-01', amount: 16 },
  { date: '2010-09-01', amount: 12 },
  { date: '2010-10-01', amount: 9 },
  { date: '2010-11-01', amount: 5 },
  { date: '2010-12-01', amount: -1 },
  { date: '2011-01-01', amount: -4 },
  { date: '2011-02-01', amount: -3 },
  { date: '2011-03-01', amount: -12 },
  { date: '2011-04-01', amount: -15 },
  { date: '2011-05-01', amount: -21 },
  { date: '2011-06-01', amount: -25 },
  { date: '2011-07-01', amount: -22 },
  { date: '2011-08-01', amount: -16 },
  { date: '2011-09-01', amount: -12 },
  { date: '2011-10-01', amount: -9 },
  { date: '2011-11-01', amount: -5 },
  { date: '2011-12-01', amount: -1 },
  { date: '2012-01-01', amount: 4 },
  { date: '2012-02-01', amount: 10 },
  { date: '2012-03-01', amount: 12 },
  { date: '2012-04-01', amount: 9 },
  { date: '2012-05-01', amount: 15 },
  { date: '2012-06-01', amount: 26 },
  { date: '2012-07-01', amount: 28 },
  { date: '2012-08-01', amount: 16 },
  { date: '2012-09-01', amount: 12 },
  { date: '2012-10-01', amount: 9 },
  { date: '2012-11-01', amount: 5 },
  { date: '2012-12-01', amount: -1 },
  { date: '2013-01-01', amount: -4 },
  { date: '2013-02-01', amount: -3 },
  { date: '2013-03-01', amount: -12 },
  { date: '2013-04-01', amount: -15 },
  { date: '2013-05-01', amount: -21 },
  { date: '2013-06-01', amount: -25 },
  { date: '2013-07-01', amount: -22 },
  { date: '2013-08-01', amount: -16 },
  { date: '2013-09-01', amount: -12 },
  { date: '2013-10-01', amount: -9 },
  { date: '2013-11-01', amount: -5 },
  { date: '2013-12-01', amount: -1 },
  { date: '2014-01-01', amount: 4 },
  { date: '2014-02-01', amount: 10 },
  { date: '2014-03-01', amount: 12 },
  { date: '2014-04-01', amount: 9 },
  { date: '2014-05-01', amount: 15 },
  { date: '2014-06-01', amount: 26 },
  { date: '2014-07-01', amount: 28 },
  { date: '2014-08-01', amount: 16 },
  { date: '2014-09-01', amount: 12 },
  { date: '2014-10-01', amount: 9 },
  { date: '2014-11-01', amount: 5 },
  { date: '2014-12-01', amount: -1 },
]

data.forEach( function( d ) {
  d.date = d.date;
  d.amount = +d.amount;
} );

var ymin = d3.min( data, function(d) { return d.amount } ) - 2,
    ymax = d3.max( data, function(d) { return d.amount; } );

x.domain( data.map( function( d ) { return d.date; } ) );
y.domain( [ ymin, ymax ] );

svg.append( 'g' )
    .attr( 'class', 'x axis' )
    .attr( 'transform', 'translate( 0,' + height + ')' )
    .call(
      d3.axisBottom( x )
      .tickValues( x.domain().filter(
        function( d, i ) {
          return !( i % 12 );
        } )
      )
      .tickFormat( function( d, i ) { return d.substr( 0, 4 ) } )
    )
  .selectAll( 'text' )
    .style( 'text-anchor', 'middle' )
    .merge;

svg.append( 'g' )
    .attr( 'class', 'y axis')
    .call( d3.axisLeft( y ).ticks( ( ymax - ymin ) / 20 ) );

svg.append( 'text' )
    .attr( 'transform', 'rotate(-90)' )
    .attr( 'text-anchor', 'middle' )
    .attr( 'x', -1 * ( height + ymin ) / 2 )
    .attr( 'y', -50 )
    .style( 'font-size', '.75em' )
    .text( 'Year-over-year change (%)' );

svg.selectAll( 'bar' )
    .data(data)
  .enter().append( 'rect' )
    .attr( 'class', 'bar' )
    .attr( 'x', function(d) { return x( d.date ); })
    .attr( 'width' , x.bandwidth() )
    .attr( 'y', function( d ) { return y( Math.max( 0, d.amount ) ); })
    .attr( 'height',
      function( d ) {
        return Math.abs( y( d.amount ) - y( 0 ) );
      } )
    .attr( 'fill', '#2CB34A' );

