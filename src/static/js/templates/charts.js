"use strict";

var charts = [{
  // Auto loans: Lending Levels
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
// {
//   "title": "",
//   "chartType": "map",
//   "market": "auto-loans",
//   "reportType": "origination-activity",  
//   "figureID": "figure-1c",
//   "source": "map_data_AUT.csv",
//   "elementID": "auto-loan_geo-changes"
// },
// {
//   "title": "Number of loans originated",
//   "chartType": "bar",
//   "market": "auto-loans",
//   "reportType": "origination-activity",  
//   "figureID": "figure-1b",
//   "source": "yoy_data_all_AUT.csv",
//   "elementID": "auto-loan_yoy-number"
// },
// {
//   "title": "Volume of loans originated",
//   "chartType": "bar",
//   "market": "auto-loans",
//   "reportType": "origination-activity",  
//   "figureID": "figure-1b",
//   "source": "yoy_data_all_AUT.csv",
//   "elementID": "auto-loan_yoy-volume"
// },
{ // Borrower Risk Profiles: Credit score
  "title": "Deep subprime (credit scores below 580)",
  "chartType": "line",
  "market": "auto-loans",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2a",
  "source": "volume_data_Score_Level_AUT.csv",
  "elementID": "figure-2a__deep-subprime",
  // Only add a group property if the data file needs to be filtered!
  "group": "Deep Subprime"
},
{
  "title": "Subprime (credit scores 580 - 619)",
  "chartType": "line",
  "market": "auto-loans",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2a",
  "source": "volume_data_Score_Level_AUT.csv",
  "elementID": "figure-2a__subprime",
  "group": "Subprime"
},
{
  "title": "Near prime (credit scores 620 - 679)",
  "chartType": "line",
  "market": "auto-loans",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2a",
  "source": "volume_data_Score_Level_AUT.csv",
  "elementID": "figure-2a__near-prime",
  "group": "Near Prime"
},
{
  "title": "Prime (credit scores 680 - 719)",
  "chartType": "line",
  "market": "auto-loans",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2a",
  "source": "volume_data_Score_Level_AUT.csv",
  "elementID": "figure-2a__prime",
  "group": "Prime"
},
{
  "title": "Superprime (credit scores 720 and above)",
  "chartType": "line",
  "market": "auto-loans",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2a",
  "source": "volume_data_Score_Level_AUT.csv",
  "elementID": "figure-2a__superprime",
  "group": "Superprime"
},
// { // Year over year changes
//   "title": "Deep subprime (credit scores below 580)",
//   "chartType": "bar",
//   "market": "auto-loans",
//   "reportType": "borrower-risk-profiles",  
//   "figureID": "figure-2b",
//   "source": "yoy_data_Score_Level_AUT.csv",
//   "elementID": "auto-loan_yoy-deep-subprime"
// },
// {
//   "title": "Subprime (credit scores 580 - 619)",
//   "chartType": "bar",
//   "market": "auto-loans",
//   "reportType": "borrower-risk-profiles",  
//   "figureID": "figure-2b",
//   "source": "yoy_data_Score_Level_AUT.csv",
//   "elementID": "auto-loan_yoy-subprime"
// },
// {
//   "title": "Near prime (credit scores 620 - 679)",
//   "chartType": "bar",
//   "market": "auto-loans",
//   "reportType": "borrower-risk-profiles",  
//   "figureID": "figure-2b",
//   "source": "yoy_data_Score_Level_AUT.csv",
//   "elementID": "auto-loan_yoy-near-prime"
// },
// {
//   "title": "Prime (credit scores 680 - 719)",
//   "chartType": "bar",
//   "market": "auto-loans",
//   "reportType": "borrower-risk-profiles",  
//   "figureID": "figure-2b",
//   "source": "yoy_data_Score_Level_AUT.csv",
//   "elementID": "auto-loan_yoy-prime"
// },
// {
//   "title": "Superprime (credit scores 720 and above)",
//   "chartType": "bar",
//   "market": "auto-loans",
//   "reportType": "borrower-risk-profiles",  
//   "figureID": "figure-2b",
//   "source": "yoy_data_Score_Level_AUT.csv",
//   "elementID": "auto-loan_yoy-superprime"
// },
// Income level
{ // Lending level Line charts
  "title": "Low income (relative income less than 50%)",
  "chartType": "line",
  "market": "auto-loans",
  "reportType": "income-level",  
  "figureID": "figure-3a",
  "source": "volume_data_Income_Level_AUT.csv",
  "elementID": "figure-3a__low",
  "group": "Low"
},
{
  "title": "Moderate income (relative income 50 to 79%)",
  "chartType": "line",
  "market": "auto-loans",
  "reportType": "income-level",  
  "figureID": "figure-3a",
  "source": "volume_data_Income_Level_AUT.csv",
  "elementID": "figure-3a__moderate",
  "group": "Moderate"
},
{
  "title": "Middle income (relative income 80 to 119%)",
  "chartType": "line",
  "market": "auto-loans",
  "reportType": "income-level",  
  "figureID": "figure-3a",
  "source": "volume_data_Income_Level_AUT.csv",
  "elementID": "figure-3a__middle",
  "group": "Middle"
},
{
  "title": "High income (relative income 120% or above)",
  "chartType": "line",
  "market": "auto-loans",
  "reportType": "income-level",  
  "figureID": "figure-3a",
  "source": "volume_data_Income_Level_AUT.csv",
  "elementID": "figure-3a__high",
  "group": "High"
},
// { // Year over year bar charts
//   "title": "Low income (relative income less than 50%)",
//   "chartType": "bar",
//   "market": "auto-loans",
//   "reportType": "income-level",  
//   "figureID": "figure-3b",
//   "source": "source.csv",
//   "elementID": "element"
// },
// {
//   "title": "Moderate income (relative income 50 to 79%)",
//   "chartType": "bar",
//   "market": "auto-loans",
//   "reportType": "income-level",  
//   "figureID": "figure-3b",
//   "source": "source.csv",
//   "elementID": "element"
// },
// {
//   "title": "Middle income (relative income 80 to 119%)",
//   "chartType": "bar",
//   "market": "auto-loans",
//   "reportType": "income-level",  
//   "figureID": "figure-3b",
//   "source": "source.csv",
//   "elementID": "element"
// },
// {
//   "title": "High income (relative income 120% or above)",
//   "chartType": "bar",
//   "market": "auto-loans",
//   "reportType": "income-level",  
//   "figureID": "figure-3b",
//   "source": "source.csv",
//   "elementID": "element"
// }
]

module.exports = charts;