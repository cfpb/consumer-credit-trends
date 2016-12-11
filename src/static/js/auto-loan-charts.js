'use strict';

var chartBuilder = require( 'cfpb-chart-builder' );
var d3 = require( 'd3' );
window.d3 = d3;
var getFipsAbbr = require( './utils/state-fips.js' ).getAbbr;
var dateTranslate = require( './utils/date-translate.js' );
var strToNum = require( './utils/string-to-number.js' );
var formatTime = d3.utcFormat( '%b %Y' );
var parseTime = d3.utcParse( '%Y-%m-%d' );

var lineCharts = {
  'Auto Loan Originations': {
    dataUrl: 'https://raw.githubusercontent.com/cfpb/consumer-credit-trends/master/data/num_data_AUT.csv',
    yAxisTickFactor: Math.pow( 10, 6 ),
    yAxisUnit: 'M',
    yAxisLabel: 'Number of Originations (in millions)',
    charts: {
      '#auto-loan_num-originations': { group: 'NO GROUPS' }
    }
  },
  'Auto Loan Volume': {
    dataUrl: 'https://raw.githubusercontent.com/cfpb/consumer-credit-trends/master/data/vol_data_AUT.csv',
    yAxisTickFactor: Math.pow( 10, 9 ),
    yAxisUnit: 'B',
    yAxisLabel: 'Loan Volume (in billions of dollars)',
    charts: {
      '#auto-loan_num-volume': { group: 'NO GROUPS' }
    }
  },
  'Borrower Risk Profiles': {
    dataUrl: 'https://raw.githubusercontent.com/cfpb/consumer-credit-trends/master/data/volume_data_Score_Level_AUT.csv',
    yAxisTickFactor: Math.pow( 10, 9 ),
    yAxisUnit: 'B',
    yAxisLabel: 'Loan Volume (in billions of dollars)',
    charts: {
      '#auto-loan_vol-deep-subprime': { group: 'Deep Subprime' },
      '#auto-loan_vol-subprime': { group: 'Subprime' },
      '#auto-loan_vol-near-prime': { group: 'Near Prime' },
      '#auto-loan_vol-prime': { group: 'Prime' },
      '#auto-loan_vol-superprime': { group: 'Superprime' }
    }
  },
  'Income Level': {
    dataUrl: 'https://raw.githubusercontent.com/cfpb/consumer-credit-trends/master/data/volume_data_Income_Level_AUT.csv',
    yAxisTickFactor: Math.pow( 10, 9 ),
    yAxisUnit: 'B',
    yAxisLabel: 'Loan Volume (in billions of dollars)',
    charts: {
      '#auto-loan_vol-low': { group: 'Low'},
      '#auto-loan_vol-moderate': { group: 'Moderate'},
      '#auto-loan_vol-middle': { group: 'Middle'},
      '#auto-loan_vol-high': { group: 'High' }
    }
  },
  'Age': {
    dataUrl: 'https://raw.githubusercontent.com/cfpb/consumer-credit-trends/master/data/volume_data_Age_Group_AUT.csv',
    yAxisTickFactor: Math.pow( 10, 9 ),
    yAxisUnit: 'B',
    yAxisLabel: 'Loan Volume (in billions of dollars)',
    charts: {
      '#auto-loan_vol-younger-than-30': { group: 'Younger than 30' },
      '#auto-loan_vol-30-to-44': { group: '30 - 44' },
      '#auto-loan_vol-45-to-64': { group: '45 - 64' },
      '#auto-loan_vol-65-and-older': { group: '65 and older' }
    }
  }
}

var barCharts = {
  'Auto Loan Originations': {
    dataUrl: 'https://raw.githubusercontent.com/cfpb/consumer-credit-trends/master/data/yoy_data_all_AUT.csv',
    yAxisUnit: '%',
    yAxisLabel: 'Year-over-year change (%)',
    charts: {
      '#auto-loan_yoy-number': { group: 'Number of Loans' },
      '#auto-loan_yoy-volume': { group: 'Dollar Volume' }
    }
  },
  'Borrower Risk Profiles': {
    dataUrl: 'https://raw.githubusercontent.com/cfpb/consumer-credit-trends/master/data/yoy_data_Score_Level_AUT.csv',
    yAxisUnit: '%',
    yAxisLabel: 'Year-over-year change (%)',
    charts: {
      '#auto-loan_yoy-deep-subprime': { group: 'Deep Subprime' },
      '#auto-loan_yoy-subprime': { group: 'Subprime' },
      '#auto-loan_yoy-near-prime': { group: 'Near Prime' },
      '#auto-loan_yoy-prime': { group: 'Prime' },
      '#auto-loan_yoy-superprime': { group: 'Superprime' }
    }
  },
  'Income Level': {
    dataUrl: 'https://raw.githubusercontent.com/cfpb/consumer-credit-trends/master/data/yoy_data_Income_Level_AUT.csv',
    yAxisUnit: '%',
    yAxisLabel: 'Year-over-year change (%)',
    charts: {
      '#auto-loan_yoy-low': { group: 'Low'},
      '#auto-loan_yoy-moderate': { group: 'Moderate'},
      '#auto-loan_yoy-middle': { group: 'Middle'},
      '#auto-loan_yoy-high': { group: 'High' }
    }
  },
  'Age': {
    dataUrl: 'https://raw.githubusercontent.com/cfpb/consumer-credit-trends/master/data/yoy_data_Age_Group_AUT.csv',
    yAxisUnit: '%',
    yAxisLabel: 'Year-over-year change (%)',
    charts: {
      '#auto-loan_yoy-younger-than-30': { group: 'Younger than 30' },
      '#auto-loan_yoy-30-to-44': { group: '30 - 44' },
      '#auto-loan_yoy-45-to-64': { group: '45 - 64' },
      '#auto-loan_yoy-65-and-older': { group: '65 and older' }
    }
  }
}

var autoLoanMapData = [];
var DATA_URLS = {
  MAP: 'https://raw.githubusercontent.com/cfpb/consumer-credit-trends/master/data/map_data_AUT.csv',
  YOY_ALL: 'https://raw.githubusercontent.com/cfpb/consumer-credit-trends/master/data/yoy_data_all_AUT.csv',
  YOY_SCORE: 'https://raw.githubusercontent.com/cfpb/consumer-credit-trends/master/data/yoy_data_Score_Level_AUT.csv',
  YOY_INCOME: 'https://raw.githubusercontent.com/cfpb/consumer-credit-trends/master/data/yoy_data_Income_Level_AUT.csv',
  YOY_AGE: 'https://raw.githubusercontent.com/cfpb/consumer-credit-trends/master/data/yoy_data_Age_Group_AUT.csv',
}

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

// Make the TileMap

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

// Make all the line charts

function makeDataIntoLineCharts( chartInfo ) {
  d3.csv( chartInfo['dataUrl'], function( error, rawData ) {
    var dataGroups = {};
    // data sets with a 'seasonal' header have multiple groups,
    // and thus multiple graphs
    if ( rawData[0].hasOwnProperty( 'seasonal' ) ) {
      dataGroups = separateLineDataGroups( rawData );
    } else {
      dataGroups = { 'NO GROUPS': rawData };
    }

    for ( var key in chartInfo.charts ) {
      var group = chartInfo.charts[key].group;
      var maxMonth = getMaxMonth( dataGroups[group] );
      var multiGroup = ( group !== 'NO GROUPS' );
      var data = reformatLineData( dataGroups[group], maxMonth, multiGroup );
      var props = {
        data: data,
        selector: key,
        yAxisTickFactor: chartInfo.yAxisTickFactor,
        lineSets: {
          'Unadjusted': {
            classes: 'line line__adjusted',
            showInLegend: true
          },
          'Unadjusted Projected': {
            classes: 'line line__adjusted line__projected',
            showInLegend: false
          },
          'Seasonally Adjusted': {
            classes: 'line line_unadjusted',
            showInLegend: true
          },
          'Seasonally Adjusted Projected': {
            classes: 'line line_unadjusted line__projected',
            showInLegend: false
          }
        },
        labels: {
          yAxisLabel: chartInfo.yAxisLabel,
          yAxisUnit: chartInfo.yAxisUnit
        }
      };

      var line = new chartBuilder.lineChart( props );
      var lineOpts = Object.create( defaultOpts )
      defaultOpts.height = 550;
      var lineChart = line.drawGraph( lineOpts );
      addProjectedToLine( lineChart, maxMonth - 6,
        lineOpts.baseHeight - lineOpts.margin.top - lineOpts.margin.bottom );


    }

  } );
}

for ( var key in lineCharts ) {
  var chartInfo = lineCharts[key];
  makeDataIntoLineCharts( chartInfo );
}

// Draw the bar charts

function makeDataIntoBarCharts( chartInfo ) {
  d3.csv( chartInfo.dataUrl, function( error, rawData ) {
    var dataGroups = separateBarDataGroups( rawData );

    for ( var key in chartInfo.charts ) {
      var group = chartInfo.charts[key].group;
      var props = {
        data: reformatBarData( dataGroups[group] ),
        selector: key,
        labels: {
          yAxisLabel: chartInfo.yAxisLabel,
          yAxisUnit: chartInfo.yAxisUnit
        }
      };

      var bars = new chartBuilder.barChart( props );
      var barChart = bars.drawGraph( defaultOpts );
      addProjectedToBar( barChart, defaultOpts );
    }

  } );
}

for ( var key in barCharts ) {
  var chartInfo = barCharts[key];
  makeDataIntoBarCharts( chartInfo );
}


// ******** //
// HELPER FUNCTIONS
// ******** //


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
    if ( parseTime( obj.label ) >= parseTime( '2009-0-01') ) {
      data.push( obj );
    }

  }

  return data;
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
    if ( obj.x >= parseTime( '2009-0-01') ) {
      data.push( obj );
    }
  };

  // Now the copies need to go back in. This allows the Projected line to
  // start at the end of the non-Projected line!
  data = data.concat( copies );

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
    .style( 'fill', '#ADDC91' );

  var line = svg.chart.append( 'line' )
        .style( 'stroke', ' #919395' )
        .attr( 'x1', x )
        .attr( 'x2', x )
        .attr( 'y1', -30 )
        .attr( 'y2', height );

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

function addProjectedToLine( chartObject, date, height ) {
  var date = parseTime( dateTranslate( date ) ),
      x = chartObject.x,
      y = chartObject.y;

  var line = chartObject.chart.append( 'line' )
      .style( 'stroke', ' #919395' )
      .attr( 'x1', x( date ) )
      .attr( 'x2', x( date ) )
      .attr( 'y1', -30 )
      .attr( 'y2', height );

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

