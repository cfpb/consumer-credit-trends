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

function createYearsList() {

  var years = [];

  for (var year = START_YEAR; year <= END_YEAR; year++) {
      years.push(year);
  }

  return years;

}

// 0 is January 2000

function parseDate(monthIndex) {
  var month = '';
  var years = createYearsList();

  if ( monthIndex % MONTHS_LIST.length === 0 ) {
    // remainder is 0 and you have your month: january
    month = MONTHS_LIST[0];
  } else {
    month = MONTHS_LIST[monthIndex % MONTHS_LIST.length];
  }
  
  var year = years[Math.trunc(monthIndex / 12)];

  return month + ' ' + year;
}

console.log(
  // january 2000
  'month 0 is ' + parseDate(0) + 
  // September 2000
  ' and month 10 is ' + parseDate(10) + 
  // april 2001
  ' and month 15 is ' + parseDate(15) +
  // january 2002
  ' and month 24 is ' + parseDate(24) +
  ' and month 50 is ' + parseDate(50) +

  // may 2008
  ' and month 100 is ' + parseDate(100) + 

  // september 2016
  ' and month 200 is ' + parseDate(200)
  );