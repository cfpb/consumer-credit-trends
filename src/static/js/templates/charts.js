"use strict";

var charts = [{
  "title": "Number of loans originated",
  "chartType": "line",
  "market": "auto-loans",
  "reportType": "origination-activity",
  "figureID": "figure-1a",
  "source": "https://raw.githubusercontent.com/cfpb/consumer-credit-trends/master/data/num_data_AUT.csv"
},
{
  "title": "Volume of loans originated",
  "chartType": "line",
  "market": "auto-loans",
  "reportType": "origination-activity",
  "figureID": "figure-1b",
  "source": "https://raw.githubusercontent.com/cfpb/consumer-credit-trends/master/data/vol_data_AUT.csv"
},
{
  "title": "Number of loans originated",
  "chartType": "bar",
  "market": "auto-loans",
  "reportType": "origination-activity",  
  "figureID": "figure-1c",
  "source": "https://raw.githubusercontent.com/cfpb/consumer-credit-trends/master/data/yoy_data_all_AUT.csv"
}]

module.exports = charts;