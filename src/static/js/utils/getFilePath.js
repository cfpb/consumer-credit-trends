"use strict";

/**
 * Return a file path for the given chart object.
 *
 * @param {chart} obj from the charts.js array
 * @return {string} file path to the location of the chart in the /dist/ folder.
 */
function getFilePath( chart ) {
  var market = chart.market;
  var reportType = chart.reportType;
  var figureID = chart.figureID;
  var chartType = chart.chartType;
  var elementID = chart.elementID;
  var filePath = 'charts/' + market + '/' + reportType + '/' + elementID + '.html';
  return filePath;
}

module.exports = getFilePath;