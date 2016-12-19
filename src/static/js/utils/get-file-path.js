'use strict';

/**
 * Return a file path for the given chart object.
 *
 * @param {Obj} chart - object from the charts.js array
 * @returns {String} file path to the location of the chart in the
  /dist/ folder.
 */
function getFilePath( chart ) {
  var market = chart.market;
  var reportType = chart.reportType;
  var elementID = chart.elementID;
  var filePath =
   'charts/' + market + '/' + reportType + '/' + elementID + '.html';
  return filePath;
}

module.exports = getFilePath;
