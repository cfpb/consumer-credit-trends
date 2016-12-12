'use strict';

var chartBuilder = require( 'cfpb-chart-builder' );
var d3 = require( 'd3' );
var getFipsAbbr = require( './utils/state-fips.js' ).getAbbr;
var dateTranslate = require( './utils/date-translate.js' );
var strToNum = require( './utils/string-to-number.js' );
var formatTime = d3.utcFormat( '%b %Y' );


function init() {

  console.log( ' map it up')

var autoLoanMapData = [];
var DATA_URLS = {
  MAP: 'https://raw.githubusercontent.com/cfpb/consumer-credit-trends/master/data/map_data_AUT.csv'
}

var defaultOpts = {
  baseWidth: 770,
  baseHeight: 500,
  paddingDecimal: .1,
  margin: {
    top: 100, right: 20, bottom: 70, left: 70
  }
}

d3.csv( DATA_URLS.MAP, function( error, rawData ) {
  for (var x = 0; x < rawData.length; x++ ) {
    var obj = {};
    obj.state = getFipsAbbr( rawData[x].state );
    obj.value = rawData[x].value;
    autoLoanMapData.push( obj );
  }

  var autoLoanValueGrid = [
    { maxValue: -0.15, fillColor: '#64a5d9' },
    { maxValue: -0.05, fillColor: '#c4ddf3' },
    { maxValue: 0.05, fillColor: '#f7f8f9' },
    { maxValue: 0.15, fillColor: '#bbdca2' },
    { maxValue: 'any', fillColor: '#6abf69' }
  ];

  var autoMapLegendLabels = [ '-25%', '-15%', '-5%', '5%', '15%', '25%' ];

  var autoLoanMapProps = {
    data: autoLoanMapData,
    selector: '#auto-loan_geo-changes',
    valueGrid: autoLoanValueGrid,
    legendLabels: autoMapLegendLabels,
  }

  var AutoLoanMap = new chartBuilder.tileMap( autoLoanMapProps );

  var AutoLoanMapOptions = {
    baseWidth: 650,
    baseHeight: 650,
    paddingDecimal: .1,
    margin: {
      top: 20, right: 20, bottom: 20, left: 20
    }
  }

  var AutoLoanMapChart = AutoLoanMap.drawGraph( AutoLoanMapOptions );

} );

}

module.exports = init;