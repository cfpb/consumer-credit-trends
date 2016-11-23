'use strict';

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var remainders = [0, 0.0833333333, 0.1666666667];

// start and end years for the data
var years = [];
var testYear = [];

for (var year = 2000; year <= 2016; year++) {
    years.push(year);
    testYear.push(new Date(year));
}


console.log(years);
console.log(testYear);

// 0 is January 2000

function displayMonthText(monthIndex) {

  // 0 = january
  // 1 = february
  // 12 = january
  // % 0 = january
  // 12/12 = january
  // 13/12 = february
  var month = months[monthIndex / months.length];
  
  // 0-11 = year 0 (less than 1)
  // 12-23 = year 1 (BETWEEN 1 AND 2)
  // 24-35 = year 2 (2 and 3) 
  // round down
  var year = years[Math.trunc(monthIndex / 12)];

  return month + ' ' + year;    
}

console.log(
    // january 2000
    'month 0 is ' + displayMonthText(0) + 
    // September 2000
    ' and month 10 is ' + displayMonthText(10) + 
    // april 2000
    ' and month 15 is ' + displayMonthText(15) +
    // january 2002
    ' and month 24 is ' + displayMonthText(24) +
    ' and month 100 is ' + displayMonthText(100)
    );
