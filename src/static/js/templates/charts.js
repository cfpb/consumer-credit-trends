"use strict";

var charts = [{
  "title": "Number of loans originated",
  "chartType": "line",
  "market": "auto-loans",
  "reportType": "origination-activity",
  "figureID": "figure-1a",
  "source": "num_data_AUT.csv",
  "elementID": "figure-1a__number"
},
{
  "title": "Volume of loans originated",
  "chartType": "line",
  "market": "auto-loans",
  "reportType": "origination-activity",
  "figureID": "figure-1a",
  "source": "vol_data_AUT.csv",
  "elementID": "figure-1a__volume"
},
{
  "title": "Number of loans originated",
  "chartType": "bar",
  "market": "auto-loans",
  "reportType": "origination-activity",  
  "figureID": "figure-1b",
  "source": "yoy_data_all_AUT.csv",
  "elementID": "figure-1b__number"
}]

module.exports = charts;