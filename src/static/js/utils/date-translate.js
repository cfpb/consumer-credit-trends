'use strict';

// If 0 = January 2000, then we will translate an int to a month and year!

function translate( int ) {
  var year = Math.floor( int / 12 ) + 2000;
  var month = int % 12 + 1;
  if ( month < 10 ) {
    month = '0' + month;
  }

  return year + '-' + month + '-01';
}

module.exports = translate;