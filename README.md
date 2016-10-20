### Todos

- Y axis for line charts should be variable based on the values. 
- Y axis should remain consistent for bar charts.
- look into responsive graph designs for ideas how to adapt ours to different screens.

Y axis updates:

- count by increments of 10
- bar charts, the top and bottom limit are 50 and -50, and they remain consistent no matter whether the data changes

X axis years:

- MVP: show all the years from the data on the graphs
- interactive version: allow user to go back in time via the interface (select a time range to view), and default to a certain number of years.


to run this code locally:


1. In Terminal, `cd` into directory
2. run the following command:
  ```
  python -m SimpleHTTPServer
  ```