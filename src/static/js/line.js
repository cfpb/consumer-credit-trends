'use strict';

var d3 = require( './d3/d3.js' );
var formatDates = require( './formatDates.js' ).init();
var DATE_FILE_URL = 'https://raw.githubusercontent.com/cfpb/consumer-credit-trends/master/data/vol_data_AUT.csv';

// set the dimensions and margins of the graph
var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// parse the date / time
// var parseTime = d3.timeParse("%d-%b-%y");

// set the ranges
var x = d3.scaleLinear().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);


var valueline = d3.line()
      .x(function(d) { return x(d.month); })
      .y(function(d) { return y(d.num); });

// append the svg obgect to the #graph element
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select("#line").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");


// Get the data
d3.csv(DATE_FILE_URL, function(error, data) {
  if (error) throw error;

  // format the data
  data.forEach(function(d) {
      d.month = +d.month;
      d.num = +d.num;
      if (d.group == 'Seasonally Adjusted') {
        d.group = true;
      } else {
        d.group = false;
      }
  });

  var adjustedData = data.filter(function(d) { return d.group == true; });

  var unadjustedData = data.filter(function(d) { return d.group == false; });

  // Scale the range of the data
  x.domain(d3.extent(data, function(d) { 
    return d.month; }));
  // x.domain( data.map( function( d ) { return d.date; } ) );
  y.domain([0, d3.max(data, function(d) { 
    return d.num; })]);

  // Add the valueline path for adjusted data
  svg.append("path")
      .data([adjustedData])
      .classed("line line__adjusted", true)
      .attr("d", valueline);

      // add unadjusted line
  svg.append("path")
      .data([unadjustedData])
      .classed("line line__unadjusted", true)
      .attr("d", valueline);

  // Add the X Axis
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x)
        // .tickValues( x.domain().filter(
        //   function( data, i ) {
        //     return !( i % 12 );
        //   } )
        // )
        // .tickFormat( function( data, i ) { return data.substr( 0, 4 ) } )
        );

  // Add the Y Axis
  svg.append("g")
      .call(d3.axisLeft(y)
        .ticks(5, ".2s")
      );

});