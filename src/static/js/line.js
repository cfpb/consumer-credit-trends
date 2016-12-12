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

var lineCharts = {
  'Auto Loans - Originations': {
    dataUrl: 'https://raw.githubusercontent.com/cfpb/consumer-credit-trends/master/data/num_data_AUT.csv',
    yAxisTickFactor: Math.pow( 10, 6 ),
    yAxisUnit: 'M',
    yAxisLabel: 'Number of Originations (in millions)',
    charts: {
      '#figure-1a__number__auto': { group: 'NO GROUPS' }
    }
  },
  // 'Auto Loans - Volume': {
  //   dataUrl: 'https://raw.githubusercontent.com/cfpb/consumer-credit-trends/master/data/vol_data_AUT.csv',
  //   yAxisTickFactor: Math.pow( 10, 9 ),
  //   yAxisUnit: 'B',
  //   yAxisLabel: 'Loan Volume (in billions of dollars)',
  //   charts: {
  //     '#figure-1a__volume__auto': { group: 'NO GROUPS' }
  //   }
  // },
  // 'Auto Loans - Borrower Risk Profiles': {
  //   dataUrl: 'https://raw.githubusercontent.com/cfpb/consumer-credit-trends/master/data/volume_data_Score_Level_AUT.csv',
  //   yAxisTickFactor: Math.pow( 10, 9 ),
  //   yAxisUnit: 'B',
  //   yAxisLabel: 'Loan Volume (in billions of dollars)',
  //   charts: {
  //     '#auto-loan_vol-deep-subprime': { group: 'Deep Subprime' },
  //     '#auto-loan_vol-subprime': { group: 'Subprime' },
  //     '#auto-loan_vol-near-prime': { group: 'Near Prime' },
  //     '#auto-loan_vol-prime': { group: 'Prime' },
  //     '#auto-loan_vol-superprime': { group: 'Superprime' }
  //   }
  // },
  // 'Auto Loans - Income Level': {
  //   dataUrl: 'https://raw.githubusercontent.com/cfpb/consumer-credit-trends/master/data/volume_data_Income_Level_AUT.csv',
  //   yAxisTickFactor: Math.pow( 10, 9 ),
  //   yAxisUnit: 'B',
  //   yAxisLabel: 'Loan Volume (in billions of dollars)',
  //   charts: {
  //     '#auto-loan_vol-low': { group: 'Low'},
  //     '#auto-loan_vol-moderate': { group: 'Moderate'},
  //     '#auto-loan_vol-middle': { group: 'Middle'},
  //     '#auto-loan_vol-high': { group: 'High' }
  //   }
  // },
  // 'Auto Loans - Age Groups': {
  //   dataUrl: 'https://raw.githubusercontent.com/cfpb/consumer-credit-trends/master/data/volume_data_Age_Group_AUT.csv',
  //   yAxisTickFactor: Math.pow( 10, 9 ),
  //   yAxisUnit: 'B',
  //   yAxisLabel: 'Loan Volume (in billions of dollars)',
  //   charts: {
  //     '#auto-loan_vol-younger-than-30': { group: 'Younger than 30' },
  //     '#auto-loan_vol-30-to-44': { group: '30 - 44' },
  //     '#auto-loan_vol-45-to-64': { group: '45 - 64' },
  //     '#auto-loan_vol-65-and-older': { group: '65 and older' }
  //   }
  // },
  // 'Credit Cards - Originations': {
  //   dataUrl: 'https://raw.githubusercontent.com/cfpb/consumer-credit-trends/master/data/num_data_CRC.csv',
  //   yAxisTickFactor: Math.pow( 10, 6 ),
  //   yAxisUnit: 'M',
  //   yAxisLabel: 'Number of Originations (in millions)',
  //   charts: {
  //     '#credit-card_num-originations': { group: 'NO GROUPS' }
  //   }
  // },
  // 'Credit Cards - Volume': {
  //   dataUrl: 'https://raw.githubusercontent.com/cfpb/consumer-credit-trends/master/data/vol_data_CRC.csv',
  //   yAxisTickFactor: Math.pow( 10, 9 ),
  //   yAxisUnit: 'B',
  //   yAxisLabel: 'Loan Volume (in billions of dollars)',
  //   charts: {
  //     '#credit-card_num-volume': { group: 'NO GROUPS' }
  //   }
  // },
  // 'Credit Cards - Borrower Risk Profiles': {
  //   dataUrl: 'https://raw.githubusercontent.com/cfpb/consumer-credit-trends/master/data/volume_data_Score_Level_CRC.csv',
  //   yAxisTickFactor: Math.pow( 10, 9 ),
  //   yAxisUnit: 'B',
  //   yAxisLabel: 'Loan Volume (in billions of dollars)',
  //   charts: {
  //     '#credit-card_vol-deep-subprime': { group: 'Deep Subprime' },
  //     '#credit-card_vol-subprime': { group: 'Subprime' },
  //     '#credit-card_vol-near-prime': { group: 'Near Prime' },
  //     '#credit-card_vol-prime': { group: 'Prime' },
  //     '#credit-card_vol-superprime': { group: 'Superprime' }
  //   }
  // },
  // 'Credit Cards - Income Level': {
  //   dataUrl: 'https://raw.githubusercontent.com/cfpb/consumer-credit-trends/master/data/volume_data_Income_Level_CRC.csv',
  //   yAxisTickFactor: Math.pow( 10, 9 ),
  //   yAxisUnit: 'B',
  //   yAxisLabel: 'Loan Volume (in billions of dollars)',
  //   charts: {
  //     '#credit-card_vol-low': { group: 'Low'},
  //     '#credit-card_vol-moderate': { group: 'Moderate'},
  //     '#credit-card_vol-middle': { group: 'Middle'},
  //     '#credit-card_vol-high': { group: 'High' }
  //   }
  // },
  // 'Credit Cards - Age Groups': {
  //   dataUrl: 'https://raw.githubusercontent.com/cfpb/consumer-credit-trends/master/data/volume_data_Age_Group_CRC.csv',
  //   yAxisTickFactor: Math.pow( 10, 9 ),
  //   yAxisUnit: 'B',
  //   yAxisLabel: 'Loan Volume (in billions of dollars)',
  //   charts: {
  //     '#credit-card_vol-younger-than-30': { group: 'Younger than 30' },
  //     '#credit-card_vol-30-to-44': { group: '30 - 44' },
  //     '#credit-card_vol-45-to-64': { group: '45 - 64' },
  //     '#credit-card_vol-65-and-older': { group: '65 and older' }
  //   }
  // },
  // 'Mortgages - Originations': {
  //   dataUrl: 'https://raw.githubusercontent.com/cfpb/consumer-credit-trends/master/data/num_data_MTG.csv',
  //   yAxisTickFactor: Math.pow( 10, 6 ),
  //   yAxisUnit: 'M',
  //   yAxisLabel: 'Number of Originations (in millions)',
  //   charts: {
  //     '#mortgage_num-originations': { group: 'NO GROUPS' }
  //   }
  // },
  // 'Mortgages - Volume': {
  //   dataUrl: 'https://raw.githubusercontent.com/cfpb/consumer-credit-trends/master/data/vol_data_MTG.csv',
  //   yAxisTickFactor: Math.pow( 10, 9 ),
  //   yAxisUnit: 'B',
  //   yAxisLabel: 'Loan Volume (in billions of dollars)',
  //   charts: {
  //     '#mortgage_num-volume': { group: 'NO GROUPS' }
  //   }
  // },
  // 'Mortgages - Borrower Risk Profiles': {
  //   dataUrl: 'https://raw.githubusercontent.com/cfpb/consumer-credit-trends/master/data/volume_data_Score_Level_MTG.csv',
  //   yAxisTickFactor: Math.pow( 10, 9 ),
  //   yAxisUnit: 'B',
  //   yAxisLabel: 'Loan Volume (in billions of dollars)',
  //   charts: {
  //     '#mortgage_vol-deep-subprime': { group: 'Deep Subprime' },
  //     '#mortgage_vol-subprime': { group: 'Subprime' },
  //     '#mortgage_vol-near-prime': { group: 'Near Prime' },
  //     '#mortgage_vol-prime': { group: 'Prime' },
  //     '#mortgage_vol-superprime': { group: 'Superprime' }
  //   }
  // },
  // 'Mortgages - Income Level': {
  //   dataUrl: 'https://raw.githubusercontent.com/cfpb/consumer-credit-trends/master/data/volume_data_Income_Level_MTG.csv',
  //   yAxisTickFactor: Math.pow( 10, 9 ),
  //   yAxisUnit: 'B',
  //   yAxisLabel: 'Loan Volume (in billions of dollars)',
  //   charts: {
  //     '#mortgage_vol-low': { group: 'Low'},
  //     '#mortgage_vol-moderate': { group: 'Moderate'},
  //     '#mortgage_vol-middle': { group: 'Middle'},
  //     '#mortgage_vol-high': { group: 'High' }
  //   }
  // },
  // 'Mortgages - Age Groups': {
  //   dataUrl: 'https://raw.githubusercontent.com/cfpb/consumer-credit-trends/master/data/volume_data_Age_Group_MTG.csv',
  //   yAxisTickFactor: Math.pow( 10, 9 ),
  //   yAxisUnit: 'B',
  //   yAxisLabel: 'Loan Volume (in billions of dollars)',
  //   charts: {
  //     '#mortgage_vol-younger-than-30': { group: 'Younger than 30' },
  //     '#mortgage_vol-30-to-44': { group: '30 - 44' },
  //     '#mortgage_vol-45-to-64': { group: '45 - 64' },
  //     '#mortgage_vol-65-and-older': { group: '65 and older' }
  //   }
  // },
  // 'Student Loans - Originations': {
  //   dataUrl: 'https://raw.githubusercontent.com/cfpb/consumer-credit-trends/master/data/num_data_STU.csv',
  //   yAxisTickFactor: Math.pow( 10, 6 ),
  //   yAxisUnit: 'M',
  //   yAxisLabel: 'Number of Originations (in millions)',
  //   charts: {
  //     '#student-loan_num-originations': { group: 'NO GROUPS' }
  //   }
  // },
  // 'Student Loans - Volume': {
  //   dataUrl: 'https://raw.githubusercontent.com/cfpb/consumer-credit-trends/master/data/vol_data_STU.csv',
  //   yAxisTickFactor: Math.pow( 10, 9 ),
  //   yAxisUnit: 'B',
  //   yAxisLabel: 'Loan Volume (in billions of dollars)',
  //   charts: {
  //     '#student-loan_num-volume': { group: 'NO GROUPS' }
  //   }
  // },
  // 'Student Loans - Borrower Risk Profiles': {
  //   dataUrl: 'https://raw.githubusercontent.com/cfpb/consumer-credit-trends/master/data/volume_data_Score_Level_STU.csv',
  //   yAxisTickFactor: Math.pow( 10, 9 ),
  //   yAxisUnit: 'B',
  //   yAxisLabel: 'Loan Volume (in billions of dollars)',
  //   charts: {
  //     '#student-loan_vol-deep-subprime': { group: 'Deep Subprime' },
  //     '#student-loan_vol-subprime': { group: 'Subprime' },
  //     '#student-loan_vol-near-prime': { group: 'Near Prime' },
  //     '#student-loan_vol-prime': { group: 'Prime' },
  //     '#student-loan_vol-superprime': { group: 'Superprime' }
  //   }
  // },
  // 'Student Loans - Income Level': {
  //   dataUrl: 'https://raw.githubusercontent.com/cfpb/consumer-credit-trends/master/data/volume_data_Income_Level_STU.csv',
  //   yAxisTickFactor: Math.pow( 10, 9 ),
  //   yAxisUnit: 'B',
  //   yAxisLabel: 'Loan Volume (in billions of dollars)',
  //   charts: {
  //     '#student-loan_vol-low': { group: 'Low'},
  //     '#student-loan_vol-moderate': { group: 'Moderate'},
  //     '#student-loan_vol-middle': { group: 'Middle'},
  //     '#student-loan_vol-high': { group: 'High' }
  //   }
  // },
  // 'Student Loans - Age Groups': {
  //   dataUrl: 'https://raw.githubusercontent.com/cfpb/consumer-credit-trends/master/data/volume_data_Age_Group_STU.csv',
  //   yAxisTickFactor: Math.pow( 10, 9 ),
  //   yAxisUnit: 'B',
  //   yAxisLabel: 'Loan Volume (in billions of dollars)',
  //   charts: {
  //     '#student-loan_vol-younger-than-30': { group: 'Younger than 30' },
  //     '#student-loan_vol-30-to-44': { group: '30 - 44' },
  //     '#student-loan_vol-45-to-64': { group: '45 - 64' },
  //     '#student-loan_vol-65-and-older': { group: '65 and older' }
  //   }
  // }
}

var defaultOpts = {
  baseWidth: 770,
  baseHeight: 500,
  paddingDecimal: .1,
  margin: {
    top: 100, right: 20, bottom: 70, left: 75
  }
}


function init() {

  // for ( var i = 0; i < charts.length; i++ ) {
  //   var chart = charts[i];
  //   var source = chart.source;
  //   var chartID = chart.elementID;
  //   var chartType = chart.chartType;
  //   var chartGroup = chart.group ? chart.group : null;

  //   if ( chartType === 'line' && document.getElementById( chartID ) ) {
  //     getData( source, chartID, chartGroup );  
  //   }
  // };

  // Make all the line charts
  console.log( ' line it up')
  for ( var key in lineCharts ) {
    var lineChartInfo = lineCharts[key];
    makeDataIntoLineCharts( lineChartInfo );
  }


  // for ( var i = 0; i < charts.length; i++ ) {
  //   var chart = charts[i];
  //   var source = chart.source;
  //   var chartID = chart.elementID;
  //   var chartType = chart.chartType;
  //   var chartGroup = chart.group ? chart.group : null;

  //   if ( chartType === 'line' && document.getElementById( chartID ) ) {
  //     // makeDataIntoLineCharts( source, chartID, chartGroup );  
  //   }
  // }


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
    if ( obj.x >= parseTime( '2009-0-01') ) {
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

module.exports = init;