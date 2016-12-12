"use strict";

var charts = [{
  // Auto loans: Origination activity
  "title": "Number of loans originated",
  "chartType": "line",
  "yAxisUnit": "M",
  "market": "auto-loans",
  "reportType": "origination-activity",
  "figureID": "figure-1a",
  "source": "num_data_AUT.csv",
  "elementID": "figure-1a__number__auto"
},
{
  "title": "Volume of loans originated",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "auto-loans",
  "reportType": "origination-activity",
  "figureID": "figure-1a",
  "source": "vol_data_AUT.csv",
  "elementID": "figure-1a__volume__auto"
},
{
  "title": "",
  "chartType": "map",
  "market": "auto-loans",
  "reportType": "origination-activity",  
  "figureID": "figure-1c",
  "source": "map_data_AUT.csv",
  "elementID": "figure-1c__map__auto"
},
{
  "title": "Number of loans originated",
  "chartType": "bar",
  "market": "auto-loans",
  "reportType": "origination-activity",  
  "figureID": "figure-1b",
  "source": "yoy_data_all_AUT.csv",
  "elementID": "auto-loan_yoy-number"
},
{
  "title": "Volume of loans originated",
  "chartType": "bar",
  "market": "auto-loans",
  "reportType": "origination-activity",  
  "figureID": "figure-1b",
  "source": "yoy_data_all_AUT.csv",
  "elementID": "auto-loan_yoy-volume"
},
{ // Borrower Risk Profiles: Credit score
  "title": "Deep subprime (credit scores below 580)",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "auto-loans",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2a",
  "source": "volume_data_Score_Level_AUT.csv",
  "elementID": "figure-2a__deep-subprime__auto",
  // Only add a group property if the data file needs to be filtered!
  "group": "Deep Subprime"
},
{
  "title": "Subprime (credit scores 580 - 619)",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "auto-loans",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2a",
  "source": "volume_data_Score_Level_AUT.csv",
  "elementID": "figure-2a__subprime__auto",
  "group": "Subprime"
},
{
  "title": "Near prime (credit scores 620 - 679)",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "auto-loans",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2a",
  "source": "volume_data_Score_Level_AUT.csv",
  "elementID": "figure-2a__near-prime__auto",
  "group": "Near Prime"
},
{
  "title": "Prime (credit scores 680 - 719)",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "auto-loans",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2a",
  "source": "volume_data_Score_Level_AUT.csv",
  "elementID": "figure-2a__prime__auto",
  "group": "Prime"
},
{
  "title": "Superprime (credit scores 720 and above)",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "auto-loans",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2a",
  "source": "volume_data_Score_Level_AUT.csv",
  "elementID": "figure-2a__superprime__auto",
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
  "yAxisUnit": "B",
  "market": "auto-loans",
  "reportType": "income-level",  
  "figureID": "figure-3a",
  "source": "volume_data_Income_Level_AUT.csv",
  "elementID": "figure-3a__low__auto",
  "group": "Low"
},
{
  "title": "Moderate income (relative income 50 to 79%)",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "auto-loans",
  "reportType": "income-level",  
  "figureID": "figure-3a",
  "source": "volume_data_Income_Level_AUT.csv",
  "elementID": "figure-3a__moderate__auto",
  "group": "Moderate"
},
{
  "title": "Middle income (relative income 80 to 119%)",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "auto-loans",
  "reportType": "income-level",  
  "figureID": "figure-3a",
  "source": "volume_data_Income_Level_AUT.csv",
  "elementID": "figure-3a__middle__auto",
  "group": "Middle"
},
{
  "title": "High income (relative income 120% or above)",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "auto-loans",
  "reportType": "income-level",  
  "figureID": "figure-3a",
  "source": "volume_data_Income_Level_AUT.csv",
  "elementID": "figure-3a__high__auto",
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
// Borrower age
{ // Lending level Line charts
  "title": "Younger than 30",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "auto-loans",
  "reportType": "borrower-age",  
  "figureID": "figure-4a",
  "source": "volume_data_Age_Group_AUT.csv",
  "elementID": "figure-4a__younger-than-30__auto",
  "group": "Younger than 30"
},
{
  "title": "Age 30 to 44",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "auto-loans",
  "reportType": "borrower-age",  
  "figureID": "figure-4a",
  "source": "volume_data_Age_Group_AUT.csv",
  "elementID": "figure-4a__30-to-44__auto",
  "group": "30 - 44"
},
{
  "title": "Age 45 to 64",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "auto-loans",
  "reportType": "borrower-age",  
  "figureID": "figure-4a",
  "source": "volume_data_Age_Group_AUT.csv",
  "elementID": "figure-4a__45-to-64__auto",
  "group": "45 - 64"
},
{
  "title": "Age 65 and older",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "auto-loans",
  "reportType": "borrower-age",  
  "figureID": "figure-4a",
  "source": "volume_data_Age_Group_AUT.csv",
  "elementID": "figure-4a__65-and-older__auto",
  "group": "65 and older"
},
// { // Year over year bar charts
//   "title": "Younger than 30",
//   "chartType": "bar",
//   "market": "auto-loans",
//   "reportType": "borrower-age",  
//   "figureID": "figure-4b",
//   "source": "source.csv",
//   "elementID": "element"
// },
// {
//   "title": "Age 30 to 44",
//   "chartType": "bar",
//   "market": "auto-loans",
//   "reportType": "borrower-age",  
//   "figureID": "figure-4b",
//   "source": "source.csv",
//   "elementID": "element"
// },
// {
  // "title": "Age 45 to 64",
//   "chartType": "bar",
//   "market": "auto-loans",
//   "reportType": "borrower-age",  
//   "figureID": "figure-4b",
//   "source": "source.csv",
//   "elementID": "element"
// },
// {
  // "title": "Age 65 and older",
//   "chartType": "bar",
//   "market": "auto-loans",
//   "reportType": "borrower-age",  
//   "figureID": "figure-4b",
//   "source": "source.csv",
//   "elementID": "element"
// },
{ // Credit cards: Origination activity
  "title": "Number of loans originated",
  "chartType": "line",
  "yAxisUnit": "M",
  "market": "credit-cards",
  "reportType": "origination-activity",
  "figureID": "figure-1a",
  "source": "num_data_CRC.csv",
  "elementID": "figure-1a__number__credit-cards"
},
{
  "title": "Volume of loans originated",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "credit-cards",
  "reportType": "origination-activity",
  "figureID": "figure-1a",
  "source": "vol_data_CRC.csv",
  "elementID": "figure-1a__volume__credit-cards"
},
{
  "title": "",
  "chartType": "map",
  "market": "credit-cards",
  "reportType": "origination-activity",  
  "figureID": "figure-1c",
  "source": "map_data_CRC.csv",
  "elementID": "figure-1c__map__credit-cards"
},
// {
//   "title": "Number of loans originated",
//   "chartType": "bar",
//   "market": "credit-cards",
//   "reportType": "origination-activity",  
//   "figureID": "figure-1b",
//   "source": "yoy_data_all_AUT.csv",
//   "elementID": "auto-loan_yoy-number"
// },
// {
//   "title": "Volume of loans originated",
//   "chartType": "bar",
//   "market": "credit-cards",
//   "reportType": "origination-activity",  
//   "figureID": "figure-1b",
//   "source": "yoy_data_all_AUT.csv",
//   "elementID": "auto-loan_yoy-volume"
// },
{ // Borrower Risk Profiles: Credit score
  "title": "Deep subprime (credit scores below 580)",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "credit-cards",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2a",
  "source": "volume_data_Score_Level_CRC.csv",
  "elementID": "figure-2a__deep-subprime__credit-cards",
  // Only add a group property if the data file needs to be filtered!
  "group": "Deep Subprime"
},
{
  "title": "Subprime (credit scores 580 - 619)",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "credit-cards",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2a",
  "source": "volume_data_Score_Level_CRC.csv",
  "elementID": "figure-2a__subprime__credit-cards",
  "group": "Subprime"
},
{
  "title": "Near prime (credit scores 620 - 679)",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "credit-cards",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2a",
  "source": "volume_data_Score_Level_CRC.csv",
  "elementID": "figure-2a__near-prime__credit-cards",
  "group": "Near Prime"
},
{
  "title": "Prime (credit scores 680 - 719)",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "credit-cards",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2a",
  "source": "volume_data_Score_Level_CRC.csv",
  "elementID": "figure-2a__prime__credit-cards",
  "group": "Prime"
},
{
  "title": "Superprime (credit scores 720 and above)",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "credit-cards",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2a",
  "source": "volume_data_Score_Level_CRC.csv",
  "elementID": "figure-2a__superprime__credit-cards",
  "group": "Superprime"
},
// { // Year over year changes
//   "title": "Deep subprime (credit scores below 580)",
//   "chartType": "bar",
//   "market": "credit-cards",
//   "reportType": "borrower-risk-profiles",  
//   "figureID": "figure-2b",
//   "source": "yoy_data_Score_Level_CRC.csv",
//   "elementID": "auto-loan_yoy-deep-subprime"
// },
// {
//   "title": "Subprime (credit scores 580 - 619)",
//   "chartType": "bar",
//   "market": "credit-cards",
//   "reportType": "borrower-risk-profiles",  
//   "figureID": "figure-2b",
//   "source": "yoy_data_Score_Level_CRC.csv",
//   "elementID": "auto-loan_yoy-subprime"
// },
// {
//   "title": "Near prime (credit scores 620 - 679)",
//   "chartType": "bar",
//   "market": "credit-cards",
//   "reportType": "borrower-risk-profiles",  
//   "figureID": "figure-2b",
//   "source": "yoy_data_Score_Level_CRC.csv",
//   "elementID": "auto-loan_yoy-near-prime"
// },
// {
//   "title": "Prime (credit scores 680 - 719)",
//   "chartType": "bar",
//   "market": "credit-cards",
//   "reportType": "borrower-risk-profiles",  
//   "figureID": "figure-2b",
//   "source": "yoy_data_Score_Level_CRC.csv",
//   "elementID": "auto-loan_yoy-prime"
// },
// {
//   "title": "Superprime (credit scores 720 and above)",
//   "chartType": "bar",
//   "market": "credit-cards",
//   "reportType": "borrower-risk-profiles",  
//   "figureID": "figure-2b",
//   "source": "yoy_data_Score_Level_CRC.csv",
//   "elementID": "auto-loan_yoy-superprime"
// },
// Income level
{ // Lending level Line charts
  "title": "Low income (relative income less than 50%)",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "credit-cards",
  "reportType": "income-level",  
  "figureID": "figure-3a",
  "source": "volume_data_Income_Level_CRC.csv",
  "elementID": "figure-3a__low__credit-cards",
  "group": "Low"
},
{
  "title": "Moderate income (relative income 50 to 79%)",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "credit-cards",
  "reportType": "income-level",  
  "figureID": "figure-3a",
  "source": "volume_data_Income_Level_CRC.csv",
  "elementID": "figure-3a__moderate__credit-cards",
  "group": "Moderate"
},
{
  "title": "Middle income (relative income 80 to 119%)",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "credit-cards",
  "reportType": "income-level",  
  "figureID": "figure-3a",
  "source": "volume_data_Income_Level_CRC.csv",
  "elementID": "figure-3a__middle__credit-cards",
  "group": "Middle"
},
{
  "title": "High income (relative income 120% or above)",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "credit-cards",
  "reportType": "income-level",  
  "figureID": "figure-3a",
  "source": "volume_data_Income_Level_CRC.csv",
  "elementID": "figure-3a__high__credit-cards",
  "group": "High"
},
// { // Year over year bar charts
//   "title": "Low income (relative income less than 50%)",
//   "chartType": "bar",
//   "market": "credit-cards",
//   "reportType": "income-level",  
//   "figureID": "figure-3b",
//   "source": "source.csv",
//   "elementID": "element"
// },
// {
//   "title": "Moderate income (relative income 50 to 79%)",
//   "chartType": "bar",
//   "market": "credit-cards",
//   "reportType": "income-level",  
//   "figureID": "figure-3b",
//   "source": "source.csv",
//   "elementID": "element"
// },
// {
//   "title": "Middle income (relative income 80 to 119%)",
//   "chartType": "bar",
//   "market": "credit-cards",
//   "reportType": "income-level",  
//   "figureID": "figure-3b",
//   "source": "source.csv",
//   "elementID": "element"
// },
// {
//   "title": "High income (relative income 120% or above)",
//   "chartType": "bar",
//   "market": "credit-cards",
//   "reportType": "income-level",  
//   "figureID": "figure-3b",
//   "source": "source.csv",
//   "elementID": "element"
// }
// Borrower age
{ // Lending level Line charts
  "title": "Younger than 30",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "credit-cards",
  "reportType": "borrower-age",  
  "figureID": "figure-4a",
  "source": "volume_data_Age_Group_CRC.csv",
  "elementID": "figure-4a__younger-than-30__credit-cards",
  "group": "Younger than 30"
},
{
  "title": "Age 30 to 44",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "credit-cards",
  "reportType": "borrower-age",  
  "figureID": "figure-4a",
  "source": "volume_data_Age_Group_CRC.csv",
  "elementID": "figure-4a__30-to-44__credit-cards",
  "group": "30 - 44"
},
{
  "title": "Age 45 to 64",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "credit-cards",
  "reportType": "borrower-age",  
  "figureID": "figure-4a",
  "source": "volume_data_Age_Group_CRC.csv",
  "elementID": "figure-4a__45-to-64__credit-cards",
  "group": "45 - 64"
},
{
  "title": "Age 65 and older",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "credit-cards",
  "reportType": "borrower-age",  
  "figureID": "figure-4a",
  "source": "volume_data_Age_Group_CRC.csv",
  "elementID": "figure-4a__65-and-older__credit-cards",
  "group": "65 and older"
},
// { // Year over year bar charts
//   "title": "Younger than 30",
//   "chartType": "bar",
//   "market": "credit-cards",
//   "reportType": "borrower-age",  
//   "figureID": "figure-4b",
//   "source": "source.csv",
//   "elementID": "element"
// },
// {
//   "title": "Age 30 to 44",
//   "chartType": "bar",
//   "market": "credit-cards",
//   "reportType": "borrower-age",  
//   "figureID": "figure-4b",
//   "source": "source.csv",
//   "elementID": "element"
// },
// {
  // "title": "Age 45 to 64",
//   "chartType": "bar",
//   "market": "credit-cards",
//   "reportType": "borrower-age",  
//   "figureID": "figure-4b",
//   "source": "source.csv",
//   "elementID": "element"
// },
// {
  // "title": "Age 65 and older",
//   "chartType": "bar",
//   "market": "credit-cards",
//   "reportType": "borrower-age",  
//   "figureID": "figure-4b",
//   "source": "source.csv",
//   "elementID": "element"
// }
{
  // Mortgages: Origination activity
  "title": "Number of loans originated",
  "chartType": "line",
  "yAxisUnit": "M",
  "market": "mortgages",
  "reportType": "origination-activity",
  "figureID": "figure-1a",
  "source": "num_data_MTG.csv",
  "elementID": "figure-1a__number__mortgage"
},
{
  "title": "Volume of loans originated",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "mortgages",
  "reportType": "origination-activity",
  "figureID": "figure-1a",
  "source": "vol_data_MTG.csv",
  "elementID": "figure-1a__volume__mortgage"
},
{
  "title": "",
  "chartType": "map",
  "market": "mortgages",
  "reportType": "origination-activity",  
  "figureID": "figure-1c",
  "source": "map_data_MTG.csv",
  "elementID": "figure-1c__map__mortgage"
},
// {
//   "title": "Number of loans originated",
//   "chartType": "bar",
//   "market": "mortgages",
//   "reportType": "origination-activity",  
//   "figureID": "figure-1b",
//   "source": "yoy_data_all_MTG.csv",
//   "elementID": "auto-loan_yoy-number"
// },
// {
//   "title": "Volume of loans originated",
//   "chartType": "bar",
//   "market": "mortgages",
//   "reportType": "origination-activity",  
//   "figureID": "figure-1b",
//   "source": "yoy_data_all_MTG.csv",
//   "elementID": "auto-loan_yoy-volume"
// },
{ // Borrower Risk Profiles: Credit score
  "title": "Deep subprime (credit scores below 580)",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "mortgages",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2a",
  "source": "volume_data_Score_Level_MTG.csv",
  "elementID": "figure-2a__deep-subprime__mortgage",
  // Only add a group property if the data file needs to be filtered!
  "group": "Deep Subprime"
},
{
  "title": "Subprime (credit scores 580 - 619)",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "mortgages",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2a",
  "source": "volume_data_Score_Level_MTG.csv",
  "elementID": "figure-2a__subprime__mortgage",
  "group": "Subprime"
},
{
  "title": "Near prime (credit scores 620 - 679)",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "mortgages",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2a",
  "source": "volume_data_Score_Level_MTG.csv",
  "elementID": "figure-2a__near-prime__mortgage",
  "group": "Near Prime"
},
{
  "title": "Prime (credit scores 680 - 719)",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "mortgages",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2a",
  "source": "volume_data_Score_Level_MTG.csv",
  "elementID": "figure-2a__prime__mortgage",
  "group": "Prime"
},
{
  "title": "Superprime (credit scores 720 and above)",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "mortgages",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2a",
  "source": "volume_data_Score_Level_MTG.csv",
  "elementID": "figure-2a__superprime__mortgage",
  "group": "Superprime"
},
// { // Year over year changes
//   "title": "Deep subprime (credit scores below 580)",
//   "chartType": "bar",
//   "market": "mortgages",
//   "reportType": "borrower-risk-profiles",  
//   "figureID": "figure-2b",
//   "source": "yoy_data_Score_Level_MTG.csv",
//   "elementID": "auto-loan_yoy-deep-subprime"
// },
// {
//   "title": "Subprime (credit scores 580 - 619)",
//   "chartType": "bar",
//   "market": "mortgages",
//   "reportType": "borrower-risk-profiles",  
//   "figureID": "figure-2b",
//   "source": "yoy_data_Score_Level_MTG.csv",
//   "elementID": "auto-loan_yoy-subprime"
// },
// {
//   "title": "Near prime (credit scores 620 - 679)",
//   "chartType": "bar",
//   "market": "mortgages",
//   "reportType": "borrower-risk-profiles",  
//   "figureID": "figure-2b",
//   "source": "yoy_data_Score_Level_MTG.csv",
//   "elementID": "auto-loan_yoy-near-prime"
// },
// {
//   "title": "Prime (credit scores 680 - 719)",
//   "chartType": "bar",
//   "market": "mortgages",
//   "reportType": "borrower-risk-profiles",  
//   "figureID": "figure-2b",
//   "source": "yoy_data_Score_Level_MTG.csv",
//   "elementID": "auto-loan_yoy-prime"
// },
// {
//   "title": "Superprime (credit scores 720 and above)",
//   "chartType": "bar",
//   "market": "mortgages",
//   "reportType": "borrower-risk-profiles",  
//   "figureID": "figure-2b",
//   "source": "yoy_data_Score_Level_MTG.csv",
//   "elementID": "auto-loan_yoy-superprime"
// },
// Income level
{ // Lending level Line charts
  "title": "Low income (relative income less than 50%)",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "mortgages",
  "reportType": "income-level",  
  "figureID": "figure-3a",
  "source": "volume_data_Income_Level_MTG.csv",
  "elementID": "figure-3a__low__mortgage",
  "group": "Low"
},
{
  "title": "Moderate income (relative income 50 to 79%)",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "mortgages",
  "reportType": "income-level",  
  "figureID": "figure-3a",
  "source": "volume_data_Income_Level_MTG.csv",
  "elementID": "figure-3a__moderate__mortgage",
  "group": "Moderate"
},
{
  "title": "Middle income (relative income 80 to 119%)",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "mortgages",
  "reportType": "income-level",  
  "figureID": "figure-3a",
  "source": "volume_data_Income_Level_MTG.csv",
  "elementID": "figure-3a__middle__mortgage",
  "group": "Middle"
},
{
  "title": "High income (relative income 120% or above)",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "mortgages",
  "reportType": "income-level",  
  "figureID": "figure-3a",
  "source": "volume_data_Income_Level_MTG.csv",
  "elementID": "figure-3a__high__mortgage",
  "group": "High"
},
// { // Year over year bar charts
//   "title": "Low income (relative income less than 50%)",
//   "chartType": "bar",
//   "market": "mortgages",
//   "reportType": "income-level",  
//   "figureID": "figure-3b",
//   "source": "source.csv",
//   "elementID": "element"
// },
// {
//   "title": "Moderate income (relative income 50 to 79%)",
//   "chartType": "bar",
//   "market": "mortgages",
//   "reportType": "income-level",  
//   "figureID": "figure-3b",
//   "source": "source.csv",
//   "elementID": "element"
// },
// {
//   "title": "Middle income (relative income 80 to 119%)",
//   "chartType": "bar",
//   "market": "mortgages",
//   "reportType": "income-level",  
//   "figureID": "figure-3b",
//   "source": "source.csv",
//   "elementID": "element"
// },
// {
//   "title": "High income (relative income 120% or above)",
//   "chartType": "bar",
//   "market": "mortgages",
//   "reportType": "income-level",  
//   "figureID": "figure-3b",
//   "source": "source.csv",
//   "elementID": "element"
// }
// Borrower age
{ // Lending level Line charts
  "title": "Younger than 30",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "mortgages",
  "reportType": "borrower-age",  
  "figureID": "figure-4a",
  "source": "volume_data_Age_Group_MTG.csv",
  "elementID": "figure-4a__younger-than-30__mortgage",
  "group": "Younger than 30"
},
{
  "title": "Age 30 to 44",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "mortgages",
  "reportType": "borrower-age",  
  "figureID": "figure-4a",
  "source": "volume_data_Age_Group_MTG.csv",
  "elementID": "figure-4a__30-to-44__mortgage",
  "group": "30 - 44"
},
{
  "title": "Age 45 to 64",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "mortgages",
  "reportType": "borrower-age",  
  "figureID": "figure-4a",
  "source": "volume_data_Age_Group_MTG.csv",
  "elementID": "figure-4a__45-to-64__mortgage",
  "group": "45 - 64"
},
{
  "title": "Age 65 and older",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "mortgages",
  "reportType": "borrower-age",  
  "figureID": "figure-4a",
  "source": "volume_data_Age_Group_MTG.csv",
  "elementID": "figure-4a__65-and-older__mortgage",
  "group": "65 and older"
},
// { // Year over year bar charts
//   "title": "Younger than 30",
//   "chartType": "bar",
//   "market": "mortgages",
//   "reportType": "borrower-age",  
//   "figureID": "figure-4b",
//   "source": "source.csv",
//   "elementID": "element"
// },
// {
//   "title": "Age 30 to 44",
//   "chartType": "bar",
//   "market": "mortgages",
//   "reportType": "borrower-age",  
//   "figureID": "figure-4b",
//   "source": "source.csv",
//   "elementID": "element"
// },
// {
  // "title": "Age 45 to 64",
//   "chartType": "bar",
//   "market": "mortgages",
//   "reportType": "borrower-age",  
//   "figureID": "figure-4b",
//   "source": "source.csv",
//   "elementID": "element"
// },
// {
  // "title": "Age 65 and older",
//   "chartType": "bar",
//   "market": "mortgages",
//   "reportType": "borrower-age",  
//   "figureID": "figure-4b",
//   "source": "source.csv",
//   "elementID": "element"
// },
{
  // Student loans: Origination activity
  "title": "Number of loans originated",
  "chartType": "line",
  "yAxisUnit": "M",
  "market": "student-loans",
  "reportType": "origination-activity",
  "figureID": "figure-1a",
  "source": "num_data_STU.csv",
  "elementID": "figure-1a__number__student"
},
{
  "title": "Volume of loans originated",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "student-loans",
  "reportType": "origination-activity",
  "figureID": "figure-1a",
  "source": "vol_data_STU.csv",
  "elementID": "figure-1a__volume__student"
},
{
  "title": "",
  "chartType": "map",
  "market": "student-loans",
  "reportType": "origination-activity",  
  "figureID": "figure-1c",
  "source": "map_data_STU.csv",
  "elementID": "figure-1c__map__student"
},
// {
//   "title": "Number of loans originated",
//   "chartType": "bar",
//   "market": "student-loans",
//   "reportType": "origination-activity",  
//   "figureID": "figure-1b",
//   "source": "yoy_data_all_STU.csv",
//   "elementID": "auto-loan_yoy-number"
// },
// {
//   "title": "Volume of loans originated",
//   "chartType": "bar",
//   "market": "student-loans",
//   "reportType": "origination-activity",  
//   "figureID": "figure-1b",
//   "source": "yoy_data_all_STU.csv",
//   "elementID": "auto-loan_yoy-volume"
// },
{ // Borrower Risk Profiles: Credit score
  "title": "Deep subprime (credit scores below 580)",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "student-loans",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2a",
  "source": "volume_data_Score_Level_STU.csv",
  "elementID": "figure-2a__deep-subprime__student",
  // Only add a group property if the data file needs to be filtered!
  "group": "Deep Subprime"
},
{
  "title": "Subprime (credit scores 580 - 619)",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "student-loans",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2a",
  "source": "volume_data_Score_Level_STU.csv",
  "elementID": "figure-2a__subprime__student",
  "group": "Subprime"
},
{
  "title": "Near prime (credit scores 620 - 679)",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "student-loans",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2a",
  "source": "volume_data_Score_Level_STU.csv",
  "elementID": "figure-2a__near-prime__student",
  "group": "Near Prime"
},
{
  "title": "Prime (credit scores 680 - 719)",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "student-loans",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2a",
  "source": "volume_data_Score_Level_STU.csv",
  "elementID": "figure-2a__prime__student",
  "group": "Prime"
},
{
  "title": "Superprime (credit scores 720 and above)",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "student-loans",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2a",
  "source": "volume_data_Score_Level_STU.csv",
  "elementID": "figure-2a__superprime__student",
  "group": "Superprime"
},
// { // Year over year changes
//   "title": "Deep subprime (credit scores below 580)",
//   "chartType": "bar",
//   "market": "student-loans",
//   "reportType": "borrower-risk-profiles",  
//   "figureID": "figure-2b",
//   "source": "yoy_data_Score_Level_STU.csv",
//   "elementID": "auto-loan_yoy-deep-subprime"
// },
// {
//   "title": "Subprime (credit scores 580 - 619)",
//   "chartType": "bar",
//   "market": "student-loans",
//   "reportType": "borrower-risk-profiles",  
//   "figureID": "figure-2b",
//   "source": "yoy_data_Score_Level_STU.csv",
//   "elementID": "auto-loan_yoy-subprime"
// },
// {
//   "title": "Near prime (credit scores 620 - 679)",
//   "chartType": "bar",
//   "market": "student-loans",
//   "reportType": "borrower-risk-profiles",  
//   "figureID": "figure-2b",
//   "source": "yoy_data_Score_Level_STU.csv",
//   "elementID": "auto-loan_yoy-near-prime"
// },
// {
//   "title": "Prime (credit scores 680 - 719)",
//   "chartType": "bar",
//   "market": "student-loans",
//   "reportType": "borrower-risk-profiles",  
//   "figureID": "figure-2b",
//   "source": "yoy_data_Score_Level_STU.csv",
//   "elementID": "auto-loan_yoy-prime"
// },
// {
//   "title": "Superprime (credit scores 720 and above)",
//   "chartType": "bar",
//   "market": "student-loans",
//   "reportType": "borrower-risk-profiles",  
//   "figureID": "figure-2b",
//   "source": "yoy_data_Score_Level_STU.csv",
//   "elementID": "auto-loan_yoy-superprime"
// },
// Income level
{ // Lending level Line charts
  "title": "Low income (relative income less than 50%)",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "student-loans",
  "reportType": "income-level",  
  "figureID": "figure-3a",
  "source": "volume_data_Income_Level_STU.csv",
  "elementID": "figure-3a__low__student",
  "group": "Low"
},
{
  "title": "Moderate income (relative income 50 to 79%)",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "student-loans",
  "reportType": "income-level",  
  "figureID": "figure-3a",
  "source": "volume_data_Income_Level_STU.csv",
  "elementID": "figure-3a__moderate__student",
  "group": "Moderate"
},
{
  "title": "Middle income (relative income 80 to 119%)",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "student-loans",
  "reportType": "income-level",  
  "figureID": "figure-3a",
  "source": "volume_data_Income_Level_STU.csv",
  "elementID": "figure-3a__middle__student",
  "group": "Middle"
},
{
  "title": "High income (relative income 120% or above)",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "student-loans",
  "reportType": "income-level",  
  "figureID": "figure-3a",
  "source": "volume_data_Income_Level_STU.csv",
  "elementID": "figure-3a__high__student",
  "group": "High"
},
// { // Year over year bar charts
//   "title": "Low income (relative income less than 50%)",
//   "chartType": "bar",
//   "market": "student-loans",
//   "reportType": "income-level",  
//   "figureID": "figure-3b",
//   "source": "source.csv",
//   "elementID": "element"
// },
// {
//   "title": "Moderate income (relative income 50 to 79%)",
//   "chartType": "bar",
//   "market": "student-loans",
//   "reportType": "income-level",  
//   "figureID": "figure-3b",
//   "source": "source.csv",
//   "elementID": "element"
// },
// {
//   "title": "Middle income (relative income 80 to 119%)",
//   "chartType": "bar",
//   "market": "student-loans",
//   "reportType": "income-level",  
//   "figureID": "figure-3b",
//   "source": "source.csv",
//   "elementID": "element"
// },
// {
//   "title": "High income (relative income 120% or above)",
//   "chartType": "bar",
//   "market": "student-loans",
//   "reportType": "income-level",  
//   "figureID": "figure-3b",
//   "source": "source.csv",
//   "elementID": "element"
// }
// Borrower age
{ // Lending level Line charts
  "title": "Younger than 30",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "student-loans",
  "reportType": "borrower-age",  
  "figureID": "figure-4a",
  "source": "volume_data_Age_Group_STU.csv",
  "elementID": "figure-4a__younger-than-30__student",
  "group": "Younger than 30"
},
{
  "title": "Age 30 to 44",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "student-loans",
  "reportType": "borrower-age",  
  "figureID": "figure-4a",
  "source": "volume_data_Age_Group_STU.csv",
  "elementID": "figure-4a__30-to-44__student",
  "group": "30 - 44"
},
{
  "title": "Age 45 to 64",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "student-loans",
  "reportType": "borrower-age",  
  "figureID": "figure-4a",
  "source": "volume_data_Age_Group_STU.csv",
  "elementID": "figure-4a__45-to-64__student",
  "group": "45 - 64"
},
{
  "title": "Age 65 and older",
  "chartType": "line",
  "yAxisUnit": "B",
  "market": "student-loans",
  "reportType": "borrower-age",  
  "figureID": "figure-4a",
  "source": "volume_data_Age_Group_STU.csv",
  "elementID": "figure-4a__65-and-older__student",
  "group": "65 and older"
},
// { // Year over year bar charts
//   "title": "Younger than 30",
//   "chartType": "bar",
//   "market": "student-loans",
//   "reportType": "borrower-age",  
//   "figureID": "figure-4b",
//   "source": "source.csv",
//   "elementID": "element"
// },
// {
//   "title": "Age 30 to 44",
//   "chartType": "bar",
//   "market": "student-loans",
//   "reportType": "borrower-age",  
//   "figureID": "figure-4b",
//   "source": "source.csv",
//   "elementID": "element"
// },
// {
  // "title": "Age 45 to 64",
//   "chartType": "bar",
//   "market": "student-loans",
//   "reportType": "borrower-age",  
//   "figureID": "figure-4b",
//   "source": "source.csv",
//   "elementID": "element"
// },
// {
  // "title": "Age 65 and older",
//   "chartType": "bar",
//   "market": "student-loans",
//   "reportType": "borrower-age",  
//   "figureID": "figure-4b",
//   "source": "source.csv",
//   "elementID": "element"
// },
]

module.exports = charts;