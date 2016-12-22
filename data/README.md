# About this data

## File names

File names contain prefixes that represent the type of aggregate data, and suffixes that represent the type of market the data describes.

<table id="prefix">
  <tbody>
    <tr>
      <th>Prefix</th>
      <th>Definition</th>
    </tr>
    <tr>
      <td>map_data</td>
      <td>Geographic map data containing year-over-year changes for each U.S. state</td>
    </tr>
    <tr>
      <td>num_data</td>
      <td>Number of new loan originations</td>
    </tr>
    <tr>
      <td>vol_data</td>
      <td>Loan volume in dollars</td>
    </tr>
    <tr>
      <td>volume_data_Age_Group</td>
      <td>Loan volume in dollars by age group</td>
    </tr>
    <tr>
      <td>volume_data_yoy_data_Income_Level</td>
      <td>Loan volume in dollars by income level</td>
    </tr>
    <tr>
      <td>volume_data_Score_Level</td>
      <td>Loan volume in dollars by credit score group</td>
    </tr>
    <tr>
      <td>yoy_data_all</td>
      <td>Year-over-year percentage change in new loan originations</td>
    </tr>
    <tr>
      <td>yoy_data_Age_Group</td>
      <td>Year-over-year percentage change in new loan originations by age group</td>
    </tr>
    <tr>
      <td>yoy_data_Income_Level</td>
      <td>Year-over-year percentage change in new loan originations by income level group</td>
    </tr>
    <tr>
      <td>yoy_data_Score_Level</td>
      <td>Year-over-year percentage change in new loan originations by credit score group</td>
    </tr>
  </tbody>
</table>


<table id="suffix">
  <tbody>
    <tr>
      <th>Suffix</th>
      <th>Definition</th>
    </tr>
    <tr>
      <td>AUT</td>
      <td>Auto loans</td>
    </tr>
    <tr>
      <td>CRC</td>
      <td>Credit card</td>
    </tr>
    <tr>
      <td>HCE</td>
      <td> </td>
    </tr>
    <tr>
      <td>HLC</td>
      <td>Home Equity Line of Credit (HELOC)</td>
    </tr>
    <tr>
      <td>MTG</td>
      <td>Mortgage</td>
    </tr>
    <tr>
      <td>PER</td>
      <td>Personal loans</td>
    </tr>
    <tr>
      <td>RET</td>
      <td>Retail loans</td>
    </tr>
    <tr>
      <td>STU</td>
      <td>Student loans</td>
    </tr>
  </tbody>
</table>

### Map files

Map files have the prefix `map_data_` in their filename. The suffix represents a specific credit market ([see suffix definitions above](#suffix-definitions)).

<table>
  <tbody>
    <tr>
      <th>Field</th>
      <th>Titles</th>
      <th>Description</th>
      <th>Data type</th>
    </tr>
    <tr>
      <td>state</td>
      <td>State</td>
      <td>U.S. State. Geographic location for this data value. Number is the <a href="https://www.census.gov/geo/reference/ansi_statetables.html">FIPS state numeric code used by the U.S. Census</a>.</td>
      <td>number</td>
    </tr>
    <tr>
      <td>value</td>
      <td>Value</td>
      <td>Year-over-year percentage change in the volume of new loans originated in each state, compared to lending activity from one year ago.  Positive changes mean that the number of loans originated in the state during the month are higher than they were one year ago and negative values indicate that the number of loans has declined.
      </td>
      <td>number</td>
    </tr>
  </tbody>
</table>

### New loan originations

Originations files have the prefix `num_data_` in their filename. The suffix represents a specific credit market ([see suffix definitions above](#suffix-definitions)).

<table>
  <tbody>
    <tr>
      <th>Field</th>
      <th>Titles</th>
      <th>Description</th>
      <th>Data type</th>
    </tr>
    <tr>
      <td>month</td>
      <td>Month</td>
      <td>Month. Represented as a number, starting at 0. January 2000 is 0, February 2000 is 1, and so on.</td>
      <td>number</td>
    </tr>
    <tr>
      <td>num</td>
      <td>Number of originations</td>
      <td>Number of new loan originations.
      </td>
      <td>number</td>
    </tr>
    <tr>
      <td>group</td>
      <td>Adjusted or unadjusted</td>
      <td>Value is either "Seasonally Adjusted" or "Unadjusted."
      </td>
      <td>string</td>
    </tr>
  </tbody>
</table>

### Loan volume

Loan volume files have the prefix `volume_data_` in their filename. The suffix represents a specific credit market ([see suffix definitions above](#suffix-definitions)).

<table>
  <tbody>
    <tr>
      <th>Field</th>
      <th>Titles</th>
      <th>Description</th>
      <th>Data type</th>
    </tr>
    <tr>
      <td>month</td>
      <td>Month</td>
      <td>Month. Represented as a number, starting at 0. January 2000 is 0, February 2000 is 1, and so on.</td>
      <td>number</td>
    </tr>
    <tr>
      <td>num</td>
      <td>Volume</td>
      <td>Loan volume in dollars.
      </td>
      <td>number</td>
    </tr>
    <tr>
      <td>group</td>
      <td>Adjusted or unadjusted</td>
      <td>Value is either "Seasonally Adjusted" or "Unadjusted."
      </td>
      <td>string</td>
    </tr>

  </tbody>
</table>

### Year-over-year

Year-over-year files have the prefix `yoy_data_` in their filename. The suffix represents a specific credit market ([see suffix definitions above](#suffix-definitions)).

<table>
  <tbody>
    <tr>
      <th>Field</th>
      <th>Titles</th>
      <th>Description</th>
      <th>Data type</th>
    </tr>
    <tr>
      <td>month</td>
      <td>Month</td>
      <td>Month. Represented as a number, starting at 0. January 2000 is 0, February 2000 is 1, and so on.</td>
      <td>number</td>
    </tr>
    <tr>
      <td>yoy</td>
      <td>Year-over-year change</td>
      <td>Year-over-year percentage change, compared to lending activity from one year ago.  Positive changes mean that the number during this month is higher than it was one year ago and negative values indicate that the number has declined.
      </td>
      <td>number</td>
    </tr>
    <tr>
      <td>group: all</td>
      <td>Value represented by year-over-year percentage</td>
      <td>Value is either the year-over-year change in "Dollar Volume" or "Number of Loans."
      </td>
      <td>string</td>
    </tr>
    <tr>
      <td>group: score level</td>
      <td>Credit score group</td>
      <td>Value is in one of the following five groups: "Deep Subprime", "Subprime", "Near Prime", "Prime", or "Superprime." <a href="#credit-score-group">See Credit Score group descriptions below</a>.
      </td>
      <td>string</td>
    </tr>
    <tr>
      <td>group: income level</td>
      <td>Income level group</td>
      <td>Value is in one of the following four groups: "Low", "Moderate", "Middle", or "High." <a href="#income-level-group">See Income Level group descriptions below</a>.
      </td>
      <td>string</td>
    </tr>
    <tr>
      <td>group: age</td>
      <td>Age group</td>
      <td>Value is in one of the following four groups: "Younger than 30", "30 - 44", "45 - 64", or "65 and older." <a href="#income-level-group">See Income Level group descriptions below</a>.
      </td>
      <td>string</td>
    </tr>
  </tbody>
</table>


### Credit score group

The credit score groups in this data are described in the following table:

<table>
  <tbody>
    <tr>
      <th>Group Name</th>
      <th>Credit Score Range</th>
    </tr>
    <tr>
      <td>Deep subprime</td>
      <td>Below 580</td>
    </tr>
    <tr>
      <td>Subprime</td>
      <td>580 - 619</td>
    </tr>
    <tr>
      <td>Near-prime</td>
      <td>620 - 659</td>
    </tr>
    <tr>
      <td>Prime</td>
      <td>660 - 719</td>
    </tr>
    <tr>
      <td>Superprime</td>
      <td>720 and above</td>
    </tr>
  </tbody>
</table>


### Income level group

TBA
