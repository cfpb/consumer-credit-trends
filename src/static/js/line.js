'use strict';

var chartBuilder = require( 'cfpb-chart-builder' );
var d3 = require( 'd3' );
var formatDates = require( './formatDates.js' );
var charts = require( './templates/charts.js' ); 
var dateTranslate = require( './utils/date-translate.js' );
var strToNum = require( './utils/string-to-number.js' );
var formatTime = d3.utcFormat( '%b %Y' );
var parseTime = d3.utcParse( '%Y-%m-%d' );
var DATA_FILE_PATH = 'https://raw.githubusercontent.com/cfpb/consumer-credit-trends/master/data/';

function init() {

  // Draw bar chart for each object in charts config
  for ( var i = 0; i < charts.length; i++ ) {
    var chartInfo = charts[i];

    if ( chartInfo.chartType === 'line' && document.getElementById( chartInfo.elementID ) 
      ) {
      chartInfo.dataUrl = DATA_FILE_PATH + chartInfo.source;
      makeDataIntoLineCharts( chartInfo );
    }
  };


}


// ******** //
// HELPER FUNCTIONS
// ******** //

function makeDataIntoLineCharts( chartInfo ) {
  d3.csv( chartInfo.dataUrl, function( error, rawData ) {

    var defaultOpts = {
      baseWidth: 650,
      baseHeight: 500,
      paddingDecimal: .1,
      margin: {
        top: 85, right: 20, bottom: 50, left: 75
      }
    }

    var data = rawData;
    if ( chartInfo.hasOwnProperty( 'group') ) {
      var dataGroups = separateLineDataGroups( rawData );
      data = dataGroups[chartInfo.group];
    }

    var maxMonth = getMaxMonth( data );

    data = reformatLineData( data, maxMonth, chartInfo.hasOwnProperty( 'group') );

    chartInfo.yAxisTickFactor = Math.pow( 10, 9 );
    chartInfo.yAxisLabel = 'Volume of Originations (in billions of dollars)'

    if ( chartInfo.yAxisUnit === 'M' ) {
      chartInfo.yAxisTickFactor = Math.pow( 10, 6 );
      chartInfo.yAxisLabel = 'Number of Originations (in millions)'
    }

    var props = {
      data: data,
      selector: '#' + chartInfo.elementID,
      yAxisTickFactor: chartInfo.yAxisTickFactor,
        lineSets: {
          'Unadjusted': {
            classes: 'line line__unadjusted',
            showInLegend: true
          },
          'Unadjusted Projected': {
            classes: 'line line__unadjusted line__projected',
            showInLegend: false
          },
          'Seasonally Adjusted': {
            classes: 'line line__adjusted',
            showInLegend: true
          },
          'Seasonally Adjusted Projected': {
            classes: 'line line__adjusted line__projected',
            showInLegend: false
          }
        },
        labels: {
          yAxisLabel: chartInfo.yAxisLabel,
          yAxisUnit: chartInfo.yAxisUnit
        }
    };

      var line = new chartBuilder.lineChart( props );
      var lineChart = line.drawGraph( defaultOpts );
      addProjectedToLine( lineChart, maxMonth - 6,
        defaultOpts.baseHeight - defaultOpts.margin.top - defaultOpts.margin.bottom );

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
function reformatLineData( rawData, maxMonth, multiGroup ) {
  var copies = [],
      data = [];
  // format the rawdata
  for ( var x = 0; x < rawData.length; x++ ) {
    var obj = {};
    obj.x = parseTime( dateTranslate( +rawData[x].month ) );
    obj.y = +rawData[x].num || +rawData[x].volume;
    obj.y = Math.floor( obj.y );
    if ( multiGroup === true ) {
      obj.set = rawData[x].seasonal
    } else {
      obj.set = rawData[x].group;
    }

    // if the data is exactly seven months old, make a copy for Projected
    if ( +rawData[x].month === maxMonth - 6 ) {
      copies.push( {
        x: obj.x,
        y: obj.y,
        set: obj.set
      } );
    }

    // If data is from last seven months, add 'Projected' to set
    if ( +rawData[x].month >= maxMonth - 6 ) {
      obj.set += ' Projected'
    } 

    // add data if it's 2009 or after
    if ( obj.x >= parseTime( '2009-01-01') ) {
      data.push( obj );
    }
  };

  // Now the copies need to go back in. This allows the Projected line to
  // start at the end of the non-Projected line!
  data = data.concat( copies );

  return data;
}

function addProjectedToLine( chartObject, date, height ) {
  var date = parseTime( dateTranslate( date ) ),
      x = chartObject.x,
      y = chartObject.y;

  var line = chartObject.chart.append( 'line' )
      .attr( 'x1', x( date ) )
      .attr( 'x2', x( date ) )
      .attr( 'y1', -30 )
      .attr( 'y2', height )
      .classed( 'axis__projected', true);

  chartObject.chart.append( 'text' )
      .attr('x', x( date ) )
      .attr('y', -60 )
      .attr( 'class', 'gray-text' )
      .style( 'text-anchor', 'end' )
      .text( 'Values after ' + formatTime( date ) );
  
  chartObject.chart.append( 'text' )
      .attr( 'x', x( date ) )
      .attr( 'y', -40 )
      .attr( 'class', 'gray-text' )
      .style( 'text-anchor', 'end' )
      .text( 'are projected' )
}

function separateLineDataGroups( rawData ) {
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