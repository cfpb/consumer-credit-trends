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


## Installation

To run this code locally:

1. Clone repo
1. In Terminal, run `npm install` from root directory
1. Create an `env.js` file and add your Github personal access token there:
  ```
  cp /src/static/js/env_SAMPLE.js /src/static/js/env.js
  ```
1. Run `gulp build`
1. `cd` into the `/dist/` directory
1. run the following command:
  ```
  python -m SimpleHTTPServer
  ```
1. go to [http://localhost:8000/](http://localhost:8000/) in your browser
1. 