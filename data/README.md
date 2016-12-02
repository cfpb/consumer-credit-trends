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
      <td>definition</td>
    </tr>
    <tr>
      <td>vol_data</td>
      <td>definition</td>
    </tr>
    <tr>
      <td>num_data</td>
      <td>definition</td>
    </tr>
    <tr>
      <td>volume_data_Age_Group</td>
      <td>definition</td>
    </tr>
    <tr>
      <td>volume_data_yoy_data_Income_Level</td>
      <td>definition</td>
    </tr>
    <tr>
      <td>volume_data_Score_Level</td>
      <td>definition</td>
    </tr>
    <tr>
      <td>yoy_data_Age_Group</td>
      <td>definition</td>
    </tr>
    <tr>
      <td>yoy_data_all</td>
      <td>definition</td>
    </tr>
    <tr>
      <td>yoy_data_Income_Level</td>
      <td>definition</td>
    </tr>
    <tr>
      <td>yoy_data_Score_Level</td>
      <td>definition</td>
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
  </tbody>
</table>

 - AUT = Auto loans
 - CRC = credit card
 - HCE = 
 - HLC = heloc
 - MTG = mortgage
 - PER = personal loans
 - RET = retail loans
 - STU = student loans

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

### Number

### Volume

### Year over year
