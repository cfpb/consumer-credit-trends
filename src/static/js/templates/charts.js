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
{
  "title": "",
  "chartType": "map",
  "market": "auto-loans",
  "reportType": "origination-activity",  
  "figureID": "figure-1c",
  "source": "map_data_AUT.csv",
  "elementID": "figure-1c"
},
{
  "title": "Number of loans originated",
  "chartType": "bar",
  "market": "auto-loans",
  "reportType": "origination-activity",  
  "figureID": "figure-1b",
  "source": "yoy_data_all_AUT.csv",
  "elementID": "figure-1b__number",
  "group": "Number of Loans"
},
{
  "title": "Volume of loans originated",
  "chartType": "bar",
  "market": "auto-loans",
  "reportType": "origination-activity",  
  "figureID": "figure-1b",
  "source": "yoy_data_all_AUT.csv",
  "elementID": "figure-1b__volume",
  "group": "Dollar Volume"
},
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
{ // Year over year changes
  "title": "Deep subprime (credit scores below 580)",
  "chartType": "bar",
  "market": "auto-loans",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2b",
  "source": "yoy_data_Score_Level_AUT.csv",
  "elementID": "auto-loans_yoy-deep-subprime",
  "group": "Deep Subprime"
},
{
  "title": "Subprime (credit scores 580 - 619)",
  "chartType": "bar",
  "market": "auto-loans",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2b",
  "source": "yoy_data_Score_Level_AUT.csv",
  "elementID": "auto-loans_yoy-subprime",
  "group": "Subprime"
},
{
  "title": "Near prime (credit scores 620 - 679)",
  "chartType": "bar",
  "market": "auto-loans",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2b",
  "source": "yoy_data_Score_Level_AUT.csv",
  "elementID": "auto-loans_yoy-near-prime",
  "group": "Near Prime"
},
{
  "title": "Prime (credit scores 680 - 719)",
  "chartType": "bar",
  "market": "auto-loans",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2b",
  "source": "yoy_data_Score_Level_AUT.csv",
  "elementID": "auto-loans_yoy-prime",
  "group": "Prime"
},
{
  "title": "Superprime (credit scores 720 and above)",
  "chartType": "bar",
  "market": "auto-loans",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2b",
  "source": "yoy_data_Score_Level_AUT.csv",
  "elementID": "auto-loans_yoy-superprime",
  "group": "Superprime"
},
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
{ // Year over year bar charts
  "title": "Low income (relative income less than 50%)",
  "chartType": "bar",
  "market": "auto-loans",
  "reportType": "income-level",  
  "figureID": "figure-3b",
  "source": "yoy_data_Income_Level_AUT.csv",
  "elementID": "auto-loans_yoy-low",
  "group": "Low"
},
{
  "title": "Moderate income (relative income 50 to 79%)",
  "chartType": "bar",
  "market": "auto-loans",
  "reportType": "income-level",  
  "figureID": "figure-3b",
  "source": "yoy_data_Income_Level_AUT.csv",
  "elementID": "auto-loans_yoy-moderate",
  "group": "Moderate"
},
{
  "title": "Middle income (relative income 80 to 119%)",
  "chartType": "bar",
  "market": "auto-loans",
  "reportType": "income-level",  
  "figureID": "figure-3b",
  "source": "yoy_data_Income_Level_AUT.csv",
  "elementID": "auto-loans_yoy-middle",
  "group": "Middle"
},
{
  "title": "High income (relative income 120% or above)",
  "chartType": "bar",
  "market": "auto-loans",
  "reportType": "income-level",  
  "figureID": "figure-3b",
  "source": "yoy_data_Income_Level_AUT.csv",
  "elementID": "auto-loans_yoy-high",
  "group": "High"
},
// Borrower age
{ // Lending level Line charts
  "title": "Younger than 30",
  "chartType": "line",
  "market": "auto-loans",
  "reportType": "borrower-age",  
  "figureID": "figure-4a",
  "source": "volume_data_Age_Group_AUT.csv",
  "elementID": "figure-4a__younger-than-30",
  "group": "Younger than 30"
},
{
  "title": "Age 30 to 44",
  "chartType": "line",
  "market": "auto-loans",
  "reportType": "borrower-age",  
  "figureID": "figure-4a",
  "source": "volume_data_Age_Group_AUT.csv",
  "elementID": "figure-4a__30-to-44",
  "group": "30 - 44"
},
{
  "title": "Age 45 to 64",
  "chartType": "line",
  "market": "auto-loans",
  "reportType": "borrower-age",  
  "figureID": "figure-4a",
  "source": "volume_data_Age_Group_AUT.csv",
  "elementID": "figure-4a__45-to-64",
  "group": "45 - 64"
},
{
  "title": "Age 65 and older",
  "chartType": "line",
  "market": "auto-loans",
  "reportType": "borrower-age",  
  "figureID": "figure-4a",
  "source": "volume_data_Age_Group_AUT.csv",
  "elementID": "figure-4a__65-and-older",
  "group": "65 and older"
},
{ // Year over year bar charts
  "title": "Younger than 30",
  "chartType": "bar",
  "market": "auto-loans",
  "reportType": "borrower-age",  
  "figureID": "figure-4b",
  "source": "yoy_data_Age_Group_AUT.csv",
  "elementID": "figure-4b__younger-than-30__auto-loans",
  "group": "Younger than 30"
},
{
  "title": "Age 30 to 44",
  "chartType": "bar",
  "market": "auto-loans",
  "reportType": "borrower-age",  
  "figureID": "figure-4b",
  "source": "yoy_data_Age_Group_AUT.csv",
  "elementID": "figure-4b__30-to-44__auto-loans",
  "group": "30 - 44"
},
{
  "title": "Age 45 to 64",
  "chartType": "bar",
  "market": "auto-loans",
  "reportType": "borrower-age",  
  "figureID": "figure-4b",
  "source": "yoy_data_Age_Group_AUT.csv",
  "elementID": "figure-4b__45-to-64__auto-loans",
  "group": "45 - 64"
},
{
  "title": "Age 65 and older",
  "chartType": "bar",
  "market": "auto-loans",
  "reportType": "borrower-age",  
  "figureID": "figure-4b",
  "source": "yoy_data_Age_Group_AUT.csv",
  "elementID": "figure-4b__65-and-older__auto-loans",
  "group": "65 and older"
},
{ // Credit cards: Lending Levels
  "title": "Number of loans originated",
  "chartType": "line",
  "market": "credit-cards",
  "reportType": "origination-activity",
  "figureID": "figure-1a",
  "source": "num_data_CRC.csv",
  "elementID": "figure-1a__number__credit-cards",
},
{
  "title": "Volume of loans originated",
  "chartType": "line",
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
  "elementID": "credit-cards_geo-changes"
},
{
  "title": "Number of loans originated",
  "chartType": "bar",
  "market": "credit-cards",
  "reportType": "origination-activity",  
  "figureID": "figure-1b",
  "source": "yoy_data_all_AUT.csv",
  "elementID": "figure-1b__yoy-number__credit-cards"
},
{
  "title": "Volume of loans originated",
  "chartType": "bar",
  "market": "credit-cards",
  "reportType": "origination-activity",  
  "figureID": "figure-1b",
  "source": "yoy_data_all_AUT.csv",
  "elementID": "figure-1b__yoy-volume__credit-cards"
},
{ // Borrower Risk Profiles: Credit score
  "title": "Deep subprime (credit scores below 580)",
  "chartType": "line",
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
  "market": "credit-cards",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2a",
  "source": "volume_data_Score_Level_CRC.csv",
  "elementID": "figure-2a__superprime__credit-cards",
  "group": "Superprime"
},
{ // Year over year changes
  "title": "Deep subprime (credit scores below 580)",
  "chartType": "bar",
  "market": "credit-cards",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2b",
  "source": "yoy_data_Score_Level_CRC.csv",
  "elementID": "figure-2b__deep-subprime__credit-cards",
  "group": "Deep Subprime"
},
{
  "title": "Subprime (credit scores 580 - 619)",
  "chartType": "bar",
  "market": "credit-cards",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2b",
  "source": "yoy_data_Score_Level_CRC.csv",
  "elementID": "figure-2b__subprime__credit-cards",
  "group": "Subprime"
},
{
  "title": "Near prime (credit scores 620 - 679)",
  "chartType": "bar",
  "market": "credit-cards",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2b",
  "source": "yoy_data_Score_Level_CRC.csv",
  "elementID": "figure-2b__near-prime__credit-cards",
  "group": "Near Prime"
},
{
  "title": "Prime (credit scores 680 - 719)",
  "chartType": "bar",
  "market": "credit-cards",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2b",
  "source": "yoy_data_Score_Level_CRC.csv",
  "elementID": "figure-2b__prime__credit-cards",
  "group": "Prime"
},
{
  "title": "Superprime (credit scores 720 and above)",
  "chartType": "bar",
  "market": "credit-cards",
  "reportType": "borrower-risk-profiles",  
  "figureID": "figure-2b",
  "source": "yoy_data_Score_Level_CRC.csv",
  "elementID": "figure-2b__superprime__credit-cards",
  "group": "Superprime"
},
// Income level
{ // Lending level Line charts
  "title": "Low income (relative income less than 50%)",
  "chartType": "line",
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
  "market": "credit-cards",
  "reportType": "income-level",  
  "figureID": "figure-3a",
  "source": "volume_data_Income_Level_CRC.csv",
  "elementID": "figure-3a__high__credit-cards",
  "group": "High"
},
{ // Year over year bar charts
  "title": "Low income (relative income less than 50%)",
  "chartType": "bar",
  "market": "credit-cards",
  "reportType": "income-level",  
  "figureID": "figure-3b",
  "source": "yoy_data_Income_Level_CRC.csv",
  "elementID": "figure-3b__low__credit-cards",
  "group": "Low"
},
{
  "title": "Moderate income (relative income 50 to 79%)",
  "chartType": "bar",
  "market": "credit-cards",
  "reportType": "income-level",  
  "figureID": "figure-3b",
  "source": "yoy_data_Income_Level_CRC.csv",
  "elementID": "figure-3b__moderate__credit-cards",
  "group": "Moderate"
},
{
  "title": "Middle income (relative income 80 to 119%)",
  "chartType": "bar",
  "market": "credit-cards",
  "reportType": "income-level",  
  "figureID": "figure-3b",
  "source": "yoy_data_Income_Level_CRC.csv",
  "elementID": "figure-3b__middle__credit-cards",
  "group": "Middle"
},
{
  "title": "High income (relative income 120% or above)",
  "chartType": "bar",
  "market": "credit-cards",
  "reportType": "income-level",  
  "figureID": "figure-3b",
  "source": "yoy_data_Income_Level_CRC.csv",
  "elementID": "figure-3b__high__credit-cards",
  "group": "High"
},
// Borrower age
{ // Lending level Line charts
  "title": "Younger than 30",
  "chartType": "line",
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
  "market": "credit-cards",
  "reportType": "borrower-age",  
  "figureID": "figure-4a",
  "source": "volume_data_Age_Group_CRC.csv",
  "elementID": "figure-4a__65-and-older__credit-cards",
  "group": "65 and older"
},
{ // Year over year bar charts
  "title": "Younger than 30",
  "chartType": "bar",
  "market": "credit-cards",
  "reportType": "borrower-age",  
  "figureID": "figure-4b",
  "source": "yoy_data_Age_Group_CRC.csv",
  "elementID": "figure-4b__younger-than-30__credit-cards",
  "group": "Younger than 30"
},
{
  "title": "Age 30 to 44",
  "chartType": "bar",
  "market": "credit-cards",
  "reportType": "borrower-age",  
  "figureID": "figure-4b",
  "source": "yoy_data_Age_Group_CRC.csv",
  "elementID": "figure-4b__30-to-44__credit-cards",
  "group": "30 - 44"
},
{
  "title": "Age 45 to 64",
  "chartType": "bar",
  "market": "credit-cards",
  "reportType": "borrower-age",  
  "figureID": "figure-4b",
  "source": "yoy_data_Age_Group_CRC.csv",
  "elementID": "figure-4b__45-to-64__credit-cards",
  "group": "45 - 64"
},
{
  "title": "Age 65 and older",
  "chartType": "bar",
  "market": "credit-cards",
  "reportType": "borrower-age",  
  "figureID": "figure-4b",
  "source": "yoy_data_Age_Group_CRC.csv",
  "elementID": "figure-4b__65-and-older__credit-cards",
  "group": "65 and older"
}
]

module.exports = charts;""