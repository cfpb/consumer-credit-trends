'use strict';

var d3 = require( './d3/d3.js' );
var formatDates = require( './formatDates.js' );

var DATE_FILE_URL = 'https://raw.githubusercontent.com/cfpb/consumer-credit-trends/master/data/vol_data_AUT.csv';
var margin = {top: 20, right: 20, bottom: 30, left: 100};
var width = 770 - margin.left - margin.right;
var height = 350 - margin.top - margin.bottom;

// set the ranges
// @todo: update bottom range to equal the floor of the data set
var x = d3.scaleTime().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

var parseTime = d3.timeParse("%B %Y");

var valueline = d3.line()
      .x(function(d) { return x(d.month); })
      .y(function(d) { return y(d.num); });

// append the svg obgect to the #graph element
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select("#line").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .classed("chart chart__line", true)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");


// Get the data
d3.csv(DATE_FILE_URL, function(error, data) {
  if (error) throw error;

  // format the data
  data.forEach(function(d) {
      var monthIndex = +d.month;
      d.month = +d.month;
      d.num = +d.num / Math.pow(10, 9);
      if (d.group == 'Seasonally Adjusted') {
        d.group = true;
      } else {
        d.group = false;
      }
      var humanDate = formatDates(monthIndex); // January 2000
      var parsedDate = parseTime(humanDate); // timestamp
      d.month = parsedDate;
  });

  var adjustedData = data.filter(function(d) { return d.group == true; });

  var unadjustedData = data.filter(function(d) { return d.group == false; });

  // Scale the range of the data
  x.domain(d3.extent(data, function(d) {    
    return d.month;})
  );

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
    .call( d3.axisBottom(x)
       .tickFormat(d3.timeFormat("%b %Y"))
    );

  // Add the Y Axis
  svg.append("g")
      .call(d3.axisLeft(y)
        .ticks(5)
      );

  // text label for the y axis
  svg.append("text")             
    .attr( 'transform', 'rotate(-90)' )
    .attr( 'text-anchor', 'middle' )
    .attr( 'y', -50 )
    .style( 'font-size', '.75em' )
    .text( 'Loan volume (in billions of dollars)' );

});