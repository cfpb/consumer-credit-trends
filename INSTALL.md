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