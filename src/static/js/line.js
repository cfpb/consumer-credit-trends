'use strict';

var d3 = require( './d3/d3.js' );

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
      .y(function(d) { return y(d.loans); });

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
// d3.csv("../static/data/data.csv", function(error, data) {
var psv = d3.dsvFormat(" ");

// d3.text('../static/data/bal_data_AUT.txt', function(error, data) {
d3.text('https://raw.githubusercontent.com/cfpb/ccp-test/master/data/bal_data_AUT.txt', function(error, data) {
  // console.log(data);

  var formattedData = psv.parse(data);
  // console.log(formattedData);
  // console.log(formattedData.columns)

  if (error) throw error;

  // format the data
  formattedData.forEach(function(d) {
      d.month = +d.month;
      d.loans = +d.loans;
      if (d.adjusted == 'Seasonally Adjusted') {
        d.adjusted = true;
      } else {
        d.adjusted = false;
      }
  });

  var adjustedData = formattedData.filter(function(d) { return d.adjusted == true; });

  var unadjustedData = formattedData.filter(function(d) { return d.adjusted == false; });

  // Scale the range of the data
  x.domain(d3.extent(formattedData, function(d) { 
    return d.month; }));
  y.domain([0, d3.max(formattedData, function(d) { 
    return d.loans; })]);

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
      .call(d3.axisBottom(x));

  // Add the Y Axis
  svg.append("g")
      .call(d3.axisLeft(y)
        .ticks(5, ".2s")
      );

});

// var psv = d3.dsvFormat(" ");

// d3.text('../static/data/bal_data_AUT.txt', function(error, data) {
//   console.log(data);

//   var reformattedData = psv.parse(data);
//   console.log(reformattedData);
//   console.log(data.columns)

// });

// console.log(psv.parse(testData));
