'use strict';

var chartBuilder = require( 'cfpb-chart-builder' );

var data = [
  { date: '2009-01-01', amount: -40 },
  { date: '2009-02-01', amount: -38 },
  { date: '2009-03-01', amount: -35 },
  { date: '2009-04-01', amount: -31 },
  { date: '2009-05-01', amount: -33 },
  { date: '2009-06-01', amount: -25 },
  { date: '2009-07-01', amount: -22 },
  { date: '2009-08-01', amount: -16 },
  { date: '2009-09-01', amount: -12 },
  { date: '2009-10-01', amount: -9 },
  { date: '2009-11-01', amount: -5 },
  { date: '2009-12-01', amount: -1 },
  { date: '2010-01-01', amount: 4 },
  { date: '2010-02-01', amount: 10 },
  { date: '2010-03-01', amount: 12 },
  { date: '2010-04-01', amount: 9 },
  { date: '2010-05-01', amount: 15 },
  { date: '2010-06-01', amount: 26 },
  { date: '2010-07-01', amount: 28 },
  { date: '2010-08-01', amount: 16 },
  { date: '2010-09-01', amount: 12 },
  { date: '2010-10-01', amount: 9 },
  { date: '2010-11-01', amount: 5 },
  { date: '2010-12-01', amount: -1 },
  { date: '2011-01-01', amount: -4 },
  { date: '2011-02-01', amount: -3 },
  { date: '2011-03-01', amount: -12 },
  { date: '2011-04-01', amount: -15 },
  { date: '2011-05-01', amount: -21 },
  { date: '2011-06-01', amount: -25 },
  { date: '2011-07-01', amount: -22 },
  { date: '2011-08-01', amount: -16 },
  { date: '2011-09-01', amount: -12 },
  { date: '2011-10-01', amount: -9 },
  { date: '2011-11-01', amount: -5 },
  { date: '2011-12-01', amount: -1 },
  { date: '2012-01-01', amount: 4 },
  { date: '2012-02-01', amount: 10 },
  { date: '2012-03-01', amount: 12 },
  { date: '2012-04-01', amount: 9 },
  { date: '2012-05-01', amount: 15 },
  { date: '2012-06-01', amount: 26 },
  { date: '2012-07-01', amount: 28 },
  { date: '2012-08-01', amount: 16 },
  { date: '2012-09-01', amount: 12 },
  { date: '2012-10-01', amount: 9 },
  { date: '2012-11-01', amount: 5 },
  { date: '2012-12-01', amount: -1 },
  { date: '2013-01-01', amount: -4 },
  { date: '2013-02-01', amount: -3 },
  { date: '2013-03-01', amount: -12 },
  { date: '2013-04-01', amount: -15 },
  { date: '2013-05-01', amount: -21 },
  { date: '2013-06-01', amount: -25 },
  { date: '2013-07-01', amount: -22 },
  { date: '2013-08-01', amount: -16 },
  { date: '2013-09-01', amount: -12 },
  { date: '2013-10-01', amount: -9 },
  { date: '2013-11-01', amount: -5 },
  { date: '2013-12-01', amount: -1 },
  { date: '2014-01-01', amount: 4 },
  { date: '2014-02-01', amount: 10 },
  { date: '2014-03-01', amount: 12 },
  { date: '2014-04-01', amount: 9 },
  { date: '2014-05-01', amount: 15 },
  { date: '2014-06-01', amount: 26 },
  { date: '2014-07-01', amount: 28 },
  { date: '2014-08-01', amount: 16 },
  { date: '2014-09-01', amount: 12 },
  { date: '2014-10-01', amount: 9 },
  { date: '2014-11-01', amount: 5 },
  { date: '2014-12-01', amount: -1 },
];

var properties = {
  data: data,
  selector: '#bar-builder'
};

var someBars = new chartBuilder.barChart( properties );

var options = {
  baseWidth: 600,
  baseHeight: 400,
  paddingDecimal: .1,
  margin: {
    top: 20, right: 20, bottom: 70, left: 100
  }
}

var someBarsChart = someBars.drawGraph( options );
