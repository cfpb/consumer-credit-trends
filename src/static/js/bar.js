'use strict';

var chartBuilder = require( 'cfpb-chart-builder' );
var d3 = require( 'd3' );
var charts = require( './templates/charts.js' ); 
var dateTranslate = require( './utils/date-translate.js' );
var strToNum = require( './utils/string-to-number.js' );
var formatTime = d3.utcFormat( '%b %Y' );
var parseTime = d3.utcParse( '%Y-%m-%d' );

// @todo define these shared constants in charts.js
var DATA_FILE_PATH = 'https://raw.githubusercontent.com/cfpb/consumer-credit-trends/master/data/';

function init() {

  // Draw bar chart for each object in charts config
  for ( var i = 0; i < charts.length; i++ ) {
    var chartInfo = charts[i];

    if ( chartInfo.chartType === 'bar' && document.getElementById( chartInfo.elementID ) ) {
      chartInfo.dataUrl = DATA_FILE_PATH + chartInfo.source;
      makeDataIntoBarCharts( chartInfo );
    }
  };

}


// HELPER FUNCTIONS

function makeDataIntoBarCharts( chartInfo ) {
  d3.csv( chartInfo.dataUrl, function( error, rawData ) {
    var data = rawData;

    var defaultOpts = {
      baseWidth: 650,
      baseHeight: 500,
      paddingDecimal: .1,
      margin: {
        top: 85, right: 20, bottom: 50, left: 75
      }
    }

    if ( chartInfo.hasOwnProperty( 'group' ) ) {
      var dataGroups = separateBarDataGroups( rawData );
      data = dataGroups[chartInfo.group];
    }

    var props = {
      data: reformatBarData( data ),
      selector: '#' + chartInfo.elementID,
      labels: {
        yAxisLabel: 'Year-over-year change (%)',
        yTickUnit: '%'
      }
    };

    var bars = new chartBuilder.barChart( props );
    var barChart = bars.drawGraph( defaultOpts );
    addProjectedToBar( barChart, defaultOpts );

  } );
}

// find the latest month
function getMaxMonth( rawData ) {
  // find the latest month
  var maxMonth = 0;
  for ( var x = 0; x < rawData.length; x++ ) {
    if ( +rawData[x].month > maxMonth ) {
      maxMonth = +rawData[x].month;
    }
  };

  return maxMonth;
}

// reformat the csv data into a format for chart-builder
function reformatBarData( rawData ) {
  var data = [];

   for (var x = 0; x < rawData.length; x++ ) {
    var obj = {
      label: dateTranslate( rawData[x].month ),
      amount: strToNum ( rawData[x].yoy ) * 100
    }; 

    // add data if it's 2009 or after
    if ( parseTime( obj.label ) >= parseTime( '2009-01-01') ) {
      data.push( obj );
    }

  }

  return data;
}

function addProjectedToBar( svg, options ) {
  var height = options.baseHeight -
            options.margin.top - options.margin.bottom;
  // Recolor the last six bars
  var x = 0,
      date = '',
      foo = svg.chart.selectAll( 'rect' );

  foo.filter( function( d, i ) {
      if ( i === foo.size() - 7 ) {
        date = parseTime( d.label );
      } else if ( i === foo.size() - 6 ) {
        x = this.getAttribute( 'x' );
      }

      return i > foo.size() - 7;
    } )
    .attr( 'class', 'bar__projected' );

  var line = svg.chart.append( 'line' )
        .attr( 'x1', x )
        .attr( 'x2', x )
        .attr( 'y1', -30 )
        .attr( 'y2', height )
        .classed( 'axis__projected', true);

  svg.chart.append( 'text' )
      .attr('x', x )
      .attr('y', -60 )
      .attr( 'class', 'gray-text' )
      .style( 'text-anchor', 'end' )
      .text( 'Values after ' + formatTime( date ) );
  
  svg.chart.append( 'text' )
      .attr( 'x', x )
      .attr( 'y', -40 )
      .attr( 'class', 'gray-text' )
      .style( 'text-anchor', 'end' )
      .text( 'are projected' )

}

function separateBarDataGroups( rawData ) {
    var obj = {};

    for (var x = 0; x < rawData.length; x++ ) {
      if ( !obj.hasOwnProperty( rawData[x].group ) ) {
        obj[rawData[x].group] = [];
      }
      obj[rawData[x].group].push( rawData[x] );
    }

    return obj;
}


module.exports = init;
