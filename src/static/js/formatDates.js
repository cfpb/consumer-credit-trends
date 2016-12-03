'use strict';

var START_YEAR = 2000;
var END_YEAR = 2016;
var MONTHS_LIST = [
  'January', 
  'February', 
  'March', 
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

function _createYearsList() {
  var years = [];

  for (var year = START_YEAR; year <= END_YEAR; year++) {
      years.push(year);
  }

  return years;
}


function init(monthIndex) {
  var month = '';
  var year = '';
  var yearsList = _createYearsList();

  month = MONTHS_LIST[monthIndex % MONTHS_LIST.length];
  
  var year = yearsList[Math.trunc(monthIndex / 12)];

  return month + ' ' + year;
}

// console.log(
//   // january 2000
//   'month 0 is ' + init(0) + 
//   // September 2000
//   ' and month 10 is ' + init(10) + 
//   // april 2001
//   ' and month 15 is ' + init(15) +
//   // january 2002
//   ' and month 24 is ' + init(24) +
//   ' and month 50 is ' + init(50) +

//   // may 2008
//   ' and month 100 is ' + init(100) + 

//   // september 2016
//   ' and month 200 is ' + init(200)
//   );

module.exports = { init: init };
