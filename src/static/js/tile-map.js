'use strict';

var chartBuilder = require( 'cfpb-chart-builder' );
var d3 = require( 'd3' );
var getFipsAbbr = require( './utils/state-fips.js' ).getAbbr;
var dateTranslate = require( './utils/date-translate.js' );
var strToNum = require( './utils/string-to-number.js' );
var formatTime = d3.utcFormat( '%b %Y' );
var charts = require( './templates/charts.js' );

var DATA_FILE_PATH = 'https://raw.githubusercontent.com/cfpb/consumer-credit-trends/master/data/';

function init() {

  var defaultOpts = {
    baseWidth: 770,
    baseHeight: 500,
    paddingDecimal: .1,
    margin: {
      top: 100, right: 20, bottom: 70, left: 75
    }
  }


  // *********** //
  // THE CHARTS
  // *********** //

  // Make the Tile Maps

  function makeDataIntoTileMaps( file, elementID, chartGroup ) {


    d3.csv( DATA_FILE_PATH + file, function( error, rawData ) {
      var data = [];
      for (var x = 0; x < rawData.length; x++ ) {
        var obj = {};
        obj.state = getFipsAbbr( rawData[x].state );
        obj.value = rawData[x].value;
        data.push( obj );
      }

      var valudGrid = [
        { maxValue: -0.15, fillColor: '#64a5d9' },
        { maxValue: -0.05, fillColor: '#c4ddf3' },
        { maxValue: 0.05, fillColor: '#f7f8f9' },
        { maxValue: 0.15, fillColor: '#bbdca2' },
        { maxValue: 'any', fillColor: '#6abf69' }
      ];

      var legendLabels = [ '-25% or less', '-15%', '-5%', '5%', '15%', '25% or more' ];

      var autoLoanMapProps = {
        data: data,
        selector: '#' + elementID,
        valueGrid: valudGrid,
        legendLabels: legendLabels,
      }

      var tileMapObj = new chartBuilder.tileMap( autoLoanMapProps );

      var tileOpts = {
        baseWidth: 650,
        baseHeight: 560,
        paddingDecimal: .1,
        margin: {
          top: 20, right: 20, bottom: 20, left: 20
        }
      }

      var tileMapChart = tileMapObj.drawGraph( tileOpts );

    } );
  }

  for ( var i = 0; i < charts.length; i++ ) {
    var chart = charts[i];
    var source = chart.source;
    var chartID = chart.elementID;
    var chartType = chart.chartType;
    var chartGroup = chart.group ? chart.group : null;

    if ( chartType === 'map' && document.getElementById( chartID ) ) {
      makeDataIntoTileMaps( source, chartID, chartGroup );
    }
  };


}

module.exports = init;
