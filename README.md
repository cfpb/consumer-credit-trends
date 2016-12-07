# credit-market-trends

Coming soon.

![Screenshot of credit-market-trends](screenshot.png)


## Installation

This project requires that you have [Node.js](https://nodejs.org/en/) installed.

To run this website locally:

1. Clone repo
1. In Terminal, run `./setup.sh` from the root directory. This will install the required Node modules for the project.
1. Create an `env.js` file and add your [Github personal access token](https://github.com/blog/1509-personal-api-tokens) there:

  ```bash
  cp src/static/js/env_SAMPLE.js src/static/js/env.js
  ```
1. Run `gulp build`
1. run the following command:
  ```
  gulp watch
  ```
1. go to [http://localhost:8080/](http://localhost:8080/) in your browser


## Documentation

[Documentation about the data](data/README.md) is available and contains definitions for each column and field value in the csv files.


## Getting help

Use the [issue tracker](https://github.com/cfpb/credit-market-trends/issues) to follow the
development conversation.
If you find a bug not listed in the issue tracker,
please [file a bug report](https://github.com/cfpb/credit-market-trends/issues/new?body=
%23%23%20URL%0D%0D%0D%23%23%20Actual%20Behavior%0D%0D%0D%23%23%20Expected%20Behavior
%0D%0D%0D%23%23%20Steps%20to%20Reproduce%0D%0D%0D%23%23%20Screenshot&labels=bug).


## Getting involved

We welcome your feedback and contributions.
See the [contribution guidelines](CONTRIBUTING.md) for more details.

Additionally, you may want to consider
[contributing to the Chart Builder](https://github.com/cfpb/cfpb-chart-builder),
which is the chart generator and library used to create the d3 data visualizations in this project.


## Open source licensing info
1. [TERMS](TERMS.md)
2. [LICENSE](LICENSE)
3. [CFPB Source Code Policy](https://github.com/cfpb/source-code-policy/)


## Credits and references

This project uses: 

- [Capital Framework](https://github.com/cfpb/capital-framework)
for its user interface and layout components.
- [CFPB Chart Builder](https://github.com/cfpb/cfpb-chart-builder)
for its data visualizations.
