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

module.exports = init;
