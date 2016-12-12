'use strict';

var chartBuilder = require( 'cfpb-chart-builder' );
var d3 = require( 'd3' );
var getFipsAbbr = require( './utils/state-fips.js' ).getAbbr;
var dateTranslate = require( './utils/date-translate.js' );
var strToNum = require( './utils/string-to-number.js' );
var formatTime = d3.utcFormat( '%b %Y' );
var charts = require( './templates/charts.js' ); 

function init() {

  console.log( ' map it upppp')

  var tileMaps = {
    'Auto Loans': {
      'selector': '#figure-1c__map__auto',
      'dataUrl': 'https://raw.githubusercontent.com/cfpb/consumer-credit-trends/master/data/map_data_AUT.csv'
    },
    'Credit Cards': {
      'selector': '#figure-1c__map__credit-cards',
      'dataUrl': 'https://raw.githubusercontent.com/cfpb/consumer-credit-trends/master/data/map_data_CRC.csv'
    },
    'Mortgages': {
      'selector': '#figure-1c__map__mortgage',
      // 'selector': '#mortgage_geo-changes',
      'dataUrl': 'https://raw.githubusercontent.com/cfpb/consumer-credit-trends/master/data/map_data_MTG.csv'
    },
    'Student Loans': {
      'selector': '#figure-1c__map__student',
      // 'selector': '#student-loan_geo-changes',
      'dataUrl': 'https://raw.githubusercontent.com/cfpb/consumer-credit-trends/master/data/map_data_STU.csv'
    }
  };


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

  function makeDataIntoTileMaps( chartInfo ) {


    d3.csv( chartInfo.dataUrl, function( error, rawData ) {
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

      var legendLabels = [ '-25%', '-15%', '-5%', '5%', '15%', '25%' ];

      var autoLoanMapProps = {
        data: data,
        selector: chartInfo.selector,
        valueGrid: valudGrid,
        legendLabels: legendLabels,
      }

      var tileMapObj = new chartBuilder.tileMap( autoLoanMapProps );

      var tileOpts = {
        baseWidth: 650,
        baseHeight: 650,
        paddingDecimal: .1,
        margin: {
          top: 20, right: 20, bottom: 20, left: 20
        }
      }

      var tileMapChart = tileMapObj.drawGraph( tileOpts );

    } );
  }

  for( var key in tileMaps ) {
    var chartInfo = tileMaps[key];
    makeDataIntoTileMaps( chartInfo );
  }


}

module.exports = init;