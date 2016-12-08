'use strict';

var chartBuilder = require( 'cfpb-chart-builder' );
var d3 = require( 'd3' );
var getFipsAbbr = require( './utils/state-fips.js' ).getAbbr;
var dateTranslate = require( './utils/date-translate.js' );
var strToNum = require( './utils/string-to-number.js' );


var autoLoanMapData = [];
var DATA_URLS = {
  MAP: 'https://raw.githubusercontent.com/cfpb/credit-market-trends/master/data/map_data_AUT.csv',
  YOY_ALL: 'https://raw.githubusercontent.com/cfpb/credit-market-trends/master/data/yoy_data_all_AUT.csv',
  YOY_SCORE: 'https://raw.githubusercontent.com/cfpb/credit-market-trends/master/data/yoy_data_Score_Level_AUT.csv',
  YOY_INCOME: 'https://raw.githubusercontent.com/cfpb/credit-market-trends/master/data/yoy_data_Income_Level_AUT.csv',
  YOY_AGE: 'https://raw.githubusercontent.com/cfpb/credit-market-trends/master/data/yoy_data_Age_Group_AUT.csv'
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

// Draw the Origination charts

d3.csv( DATA_URLS.YOY_ALL, function( error, rawData ) {

  var dataNumber = [],
      dataVolume = [];

  for (var x = 0; x < rawData.length; x++ ) {
    var obj = {
      label: dateTranslate( rawData[x].month ),
      amount: strToNum ( rawData[x].yoy ) * 100
    };

    if ( rawData[x].group === 'Number of Loans' ) {
      dataNumber.push( obj );
    } else if ( rawData[x].group === 'Dollar Volume' ) {
      dataVolume.push( obj );
    }

  }

  // Draw the YoY Number of Loans bar chart
  var yoyNumProps = {
    data: dataNumber,
    selector: '#auto-loan_yoy-number',
    labels: {
      yAxisLabel: 'Year-over-year Change (%)',
      yTickUnit: '%'
    }
  };

  var yoyNum = new chartBuilder.barChart( yoyNumProps );

  var yoyNumOpts = {
    baseWidth: 770,
    baseHeight: 500,
    paddingDecimal: .1,
    margin: {
      top: 20, right: 20, bottom: 70, left: 100
    },
    zeroLine: true
  }

  var yoyNumChart = yoyNum.drawGraph( yoyNumOpts );

  // Draw the YoY volume bar chart
  var yoyVolProps = {
    data: dataVolume,
    selector: '#auto-loan_yoy-volume',
    labels: {
      yAxisLabel: 'Year-over-year Change (%)',
      yTickUnit: '%'
    }
  };

  var yoyVol = new chartBuilder.barChart( yoyVolProps );

  var yoyVolOpts = {
    baseWidth: 770,
    baseHeight: 500,
    paddingDecimal: .1,
    margin: {
      top: 20, right: 20, bottom: 70, left: 100
    },
    zeroLine: true
  }

  var yoyVolChart = yoyVol.drawGraph( yoyVolOpts );
} );


// Draw Borrower Risk Profile Charts

d3.csv( DATA_URLS.YOY_SCORE, function( error, rawData ) {
  var dataDeepSub =[],
      dataSub = [],
      dataNear = [],
      dataPrime = [],
      dataSuper = [];

  var defaultOpts = {
    baseWidth: 770,
    baseHeight: 500,
    paddingDecimal: .1,
    margin: {
      top: 20, right: 20, bottom: 70, left: 100
    },
    zeroLine: true
  }

  for (var x = 0; x < rawData.length; x++ ) {
    var obj = {
      label: dateTranslate( rawData[x].month ),
      amount: strToNum( rawData[x].yoy ) * 100
    };

    // @todo: Make this way more elegant
    if ( rawData[x].month >= 108) {    
      if ( rawData[x].group === 'Deep Subprime' ) {
          dataDeepSub.push( obj );
        } else if ( rawData[x].group === 'Subprime' ) {
          dataSub.push( obj );
        } else if ( rawData[x].group === 'Near Prime' ) {
          dataNear.push( obj );
        } else if ( rawData[x].group === 'Prime' ) {
          dataPrime.push( obj );
        } else if ( rawData[x].group === 'Superprime' ) {
          dataSuper.push( obj );
        }
      }
  }

  // Draw the YoY Deep Subprime bar chart
  var yoyDeepProps = {
    data: dataDeepSub,
    selector: '#auto-loan_yoy-deep-subprime',
    labels: {
      yAxisLabel: 'Year-over-year Change (%)',
      yTickUnit: '%'
    }
  };

  var yoyDeep = new chartBuilder.barChart( yoyDeepProps );

  var yoyDeepOpts = defaultOpts;

  var yoyDeepChart = yoyDeep.drawGraph( yoyDeepOpts );

  // Draw the YoY Subprime bar chart
  var yoySubProps = {
    data: dataSub,
    selector: '#auto-loan_yoy-subprime',
    labels: {
      yAxisLabel: 'Year-over-year Change (%)',
      yTickUnit: '%'
    }
  };

  var yoySub = new chartBuilder.barChart( yoySubProps );

  var yoySubOpts = defaultOpts;

  var yoySubChart = yoySub.drawGraph( yoySubOpts );

  // Draw the YoY Near Prime bar chart
  var yoyNearProps = {
    data: dataNear,
    selector: '#auto-loan_yoy-near-prime',
    labels: {
      yAxisLabel: 'Year-over-year Change (%)',
      yTickUnit: '%'
    }
  };

  var yoyNear = new chartBuilder.barChart( yoyNearProps );

  var yoyNearOpts = defaultOpts;

  var yoyNearChart = yoyNear.drawGraph( yoyNearOpts );

  // Draw the YoY Prime bar chart
  var yoyPrimeProps = {
    data: dataPrime,
    selector: '#auto-loan_yoy-prime',
    labels: {
      yAxisLabel: 'Year-over-year Change (%)',
      yTickUnit: '%'
    }
  };

  var yoyPrime = new chartBuilder.barChart( yoyPrimeProps );

  var yoyPrimeOpts = defaultOpts;

  var yoyPrimeChart = yoyPrime.drawGraph( yoyPrimeOpts );


  // Draw the YoY Superprime bar chart
  var yoySuperProps = {
    data: dataSuper,
    selector: '#auto-loan_yoy-superprime',
    labels: {
      yAxisLabel: 'Year-over-year Change (%)',
      yTickUnit: '%'
    }
  };

  var yoySuper = new chartBuilder.barChart( yoySuperProps );

  var yoySuperOpts = defaultOpts;

  var yoySuperChart = yoySuper.drawGraph( yoySuperOpts );

} );

// Draw Income Group Charts

d3.csv( DATA_URLS.YOY_INCOME, function( error, rawData ) {
  var dataLow =[],
      dataModerate = [],
      dataMiddle = [],
      dataHigh = [];

  var defaultOpts = {
    baseWidth: 770,
    baseHeight: 500,
    paddingDecimal: .1,
    margin: {
      top: 20, right: 20, bottom: 70, left: 100
    },
    zeroLine: true
  }

  for (var x = 0; x < rawData.length; x++ ) {
    var obj = {
      label: dateTranslate( rawData[x].month ),
      amount: strToNum( rawData[x].yoy ) * 100
    };

    // @todo: Make this way more elegant
    if ( rawData[x].month >= 108 ) {
      if ( rawData[x].group === 'Low' ) {
        dataLow.push( obj );
      } else if ( rawData[x].group === 'Moderate' ) {
        dataModerate.push( obj );
      } else if ( rawData[x].group === 'Middle' ) {
        dataMiddle.push( obj );
      } else if ( rawData[x].group === 'High' ) {
        dataHigh.push( obj );
      }      
    }

  }

  // Draw the YoY Low bar chart
  var yoyLowProps = {
    data: dataLow,
    selector: '#auto-loan_yoy-low',
    labels: {
      yAxisLabel: 'Year-over-year Change (%)',
      yTickUnit: '%'
    }
  };

  var yoyLow = new chartBuilder.barChart( yoyLowProps );

  var yoyLowOpts = defaultOpts;

  var yoyLowChart = yoyLow.drawGraph( yoyLowOpts );

  // Draw the YoY Moderate bar chart
  var yoyModerateProps = {
    data: dataModerate,
    selector: '#auto-loan_yoy-moderate',
    labels: {
      yAxisLabel: 'Year-over-year Change (%)',
      yTickUnit: '%'
    }
  };

  var yoyModerate = new chartBuilder.barChart( yoyModerateProps );

  var yoyModerateOpts = defaultOpts;

  var yoyModerateChart = yoyModerate.drawGraph( yoyModerateOpts );

  // Draw the YoY Middle bar chart
  var yoyMiddleProps = {
    data: dataMiddle,
    selector: '#auto-loan_yoy-middle',
    labels: {
      yAxisLabel: 'Year-over-year Change (%)',
      yTickUnit: '%'
    }
  };

  var yoyMiddle = new chartBuilder.barChart( yoyMiddleProps );

  var yoyMiddleOpts = defaultOpts;

  var yoyMiddleChart = yoyMiddle.drawGraph( yoyMiddleOpts );

  // Draw the YoY High bar chart
  var yoyHighProps = {
    data: dataHigh,
    selector: '#auto-loan_yoy-high',
    labels: {
      yAxisLabel: 'Year-over-year Change (%)',
      yTickUnit: '%'
    }
  };

  var yoyHigh = new chartBuilder.barChart( yoyHighProps );

  var yoyHighOpts = defaultOpts;

  var yoyHighChart = yoyHigh.drawGraph( yoyHighOpts );

} );

// Draw Age Group Charts

d3.csv( DATA_URLS.YOY_AGE, function( error, rawData ) {
  var dataYoungerThan30 =[],
      data30To44 = [],
      data45To64 = [],
      data65AndOlder = [];

  var defaultOpts = {
    baseWidth: 770,
    baseHeight: 500,
    paddingDecimal: .1,
    margin: {
      top: 20, right: 20, bottom: 70, left: 100
    },
    zeroLine: true
  }

  for (var x = 0; x < rawData.length; x++ ) {
    var obj = {
      label: dateTranslate( rawData[x].month ),
      amount: strToNum( rawData[x].yoy ) * 100
    };
    if ( rawData[x].month >= 108 ) {
    // @todo: Make this way more elegant
      if ( rawData[x].group === 'Younger than 30' ) {
        dataYoungerThan30.push( obj );
      } else if ( rawData[x].group === '30 - 44' ) {
        data30To44.push( obj );
      } else if ( rawData[x].group === '45 - 64' ) {
        data45To64.push( obj );
      } else if ( rawData[x].group === '65 and older' ) {
        data65AndOlder.push( obj );
      }
    }
  }

  // Draw the YoY Low bar chart
  var yoyYoungerThan30Props = {
    data: dataYoungerThan30,
    selector: '#auto-loan_yoy-younger-than-30',
    labels: {
      yAxisLabel: 'Year-over-year Change (%)',
      yTickUnit: '%'
    }
  };

  var yoyYoungerThan30 = new chartBuilder.barChart( yoyYoungerThan30Props );

  var yoyYoungerThan30Opts = defaultOpts;

  var yoyYoungerThan30Chart = yoyYoungerThan30.drawGraph( yoyYoungerThan30Opts );

  // Draw the YoY Moderate bar chart
  var yoy30To44Props = {
    data: data30To44,
    selector: '#auto-loan_yoy-30-to-44',
    labels: {
      yAxisLabel: 'Year-over-year Change (%)',
      yTickUnit: '%'
    }
  };

  var yoy30To44 = new chartBuilder.barChart( yoy30To44Props );

  var yoy30To44Opts = defaultOpts;

  var yoy30To44Chart = yoy30To44.drawGraph( yoy30To44Opts );

  // Draw the YoY Middle bar chart
  var yoy45To64Props = {
    data: data45To64,
    selector: '#auto-loan_yoy-45-to-64',
    labels: {
      yAxisLabel: 'Year-over-year Change (%)',
      yTickUnit: '%'
    }
  };

  var yoy45To64 = new chartBuilder.barChart( yoy45To64Props );

  var yoy45To64Opts = defaultOpts;

  var yoy45To64Chart = yoy45To64.drawGraph( yoy45To64Opts );

  // Draw the YoY High bar chart
  var yoy65AndOlderProps = {
    data: data65AndOlder,
    selector: '#auto-loan_yoy-65-and-older',
    labels: {
      yAxisLabel: 'Year-over-year Change (%)',
      yTickUnit: '%'
    }
  };

  var yoy65AndOlder = new chartBuilder.barChart( yoy65AndOlderProps );

  var yoy65AndOlderOpts = defaultOpts;

  var yoy65AndOlderChart = yoy65AndOlder.drawGraph( yoy65AndOlderOpts );

} );
