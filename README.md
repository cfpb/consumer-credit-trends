# Obsolete
Repository is being kept for information purposes. Please see https://github.com/cfpb/consumer-credit-trends-data/ for current development and archival data.

# Consumer credit trends
Explore recent developments in consumer credit markets.

![Screenshot of consumer-credit-trends](screenshot.png)

## This project is a work in progress
Nothing presented in the issues or in this repo is a final product unless it is marked as such or appears on http://www.consumerfinance.gov/data-research/consumer-credit-trends/. Some copy or formulas may be replaced with dummy text to ensure that we follow any and all privacy and security procedures at the CFPB. All the designs, layouts, and evolution of our decision making process are accurate.

## We want your feedback, but will not be able to respond to everyone
We are working under an agile framework, and plan to use this repo to publish, receive feedback, and iterate on that feedback as often as possible. Our goal is to see user trends and reactions to our work. We want as much feedback as possible to help us make informed decisions so that we can make this tool better. Unfortunately, we will not be able to respond to every piece of feedback or comment we receive, but intend to respond with our progress through the evolution of the tool.

## Installation

This project requires that you have [Node.js](https://nodejs.org/en/) installed.

To run this website locally:

1. Clone repo
1. Create an `env.js` file and add your [Github personal access token](https://github.com/blog/1509-personal-api-tokens) there:

  ```bash
  cp src/static/js/env_SAMPLE.js src/static/js/env.js
  ```
1. In Terminal, run `./setup.sh` from the root directory. This will install the required Node modules for the project.
1. Run the following command:
  ```
  gulp watch
  ```
  This should open a new window in your browser with the `/dev/index.html` file visible at [`http://localhost:3000/`](http://localhost:3000/)

## Release workflow

When working on feature branches that are still in development, use the workflow described above in the [Installation](#installation) instructions.

For publishing the graphs to compiled HTML for use in a production environment, use the following Release workflow.

1. Create a pull request for any new code contributions.

1. To share the compiled files with your code changes, follow the [Github Pages and Travis setup](#Github-Pages-and-Travis-setup) steps.

1. Once your pull requested is reviewed and merged, Travis CI will deploy the compiled HTML files to Github pages, which can be reviewed at [https://cfpb.github.io/consumer-credit-trends/](https://cfpb.github.io/consumer-credit-trends/).

1. When the Github pages charts are approved for deployment to production, use Jenkins to trigger the deployment to consumerfinance.gov.

## Github Pages and Travis setup

Generate compiled files for sharing your work with reviewers by pushing your PR feature branch code to your forked repo. This requires some configuration in Travis.

.... add steps here to fork and set up github token and all that.

### Set up your Travis CI for your forked repo

You only need to do these steps once.

1. Fork the consumer-credit-trends repository to your personal Github account. 

1. Enable Travis for the forked repository by visiting [https://travis-ci.org/yourGithubUsername/consumer-credit-trends/](https://travis-ci.org/yourGithubUsername/consumer-credit-trends/) updating the URL with your Github username. Click 'Activate repository' to allow Travis CI to access your repo.

1. Go to Settings from your repo. This is where you will add your Github Personal Access Token to trigger the build to your fork's `gh-pages` branch.

1. Create a [Personal Access Token in your Github Settings page](https://github.com/settings/tokens).

1. Copy the Personal Access Token and paste it into the value field in Travis CI Settings under 'Environment Variables.'

1. Enter 'GITHUB_TOKEN' in the 'name' field for Travis CI. 

1. **Do NOT** turn on the 'Display value in build log' button. Click Add.

### Push your feature branches to your forked Github Pages site

1. Push your code from your local feature branch to your fork's master branch (here named `origin`):
  ```
  git push origin feature-branch:master
  ```

1. This will trigger a Travis CI deployment to gh-pages. View your build in Travis at 

1. View your changes on your forked gh-pages branch at the following URL, replacing with your username: [https://yourUsername.github.io/consumer-credit-trends/](https://yourUsername.github.io/consumer-credit-trends/)

## Testing locally before a deployment

To test the release workflow on your local machine, follow these steps to generate compiled HTML files of the graphs.

gulp release

1. Check out and pull from the latest `gh-pages` branch from upstream.

  ```
  git checkout gh-pages
  git pull upstream gh-pages
  ```
1. Create a new branch and check it out locally:

  ```
  git checkout -b release-v2000
  ```
1. Merge your feature branch work into your release branch locally:

  ```
  git merge feature-branch-2000
  ```
1. Build the front end using gulp:

  ```
  gulp build
  ```
1. In a new Terminal window, run the release task to generate your production-ready HTML:

  ```
  gulp release
  ```

1. Review your production HTML locally to check that it's ready to commit (no server required - just open the HTML file at `consumer-credit-trends/index.html` in your browser).
1. Commit your production ready files, `index.html` and the `charts` folder, to your release branch and push to Github:

  ```
  git add index.html
  git add charts
  git commit -m ''
  git push origin release-v2000
  ```
1. Submit your pull request to the `gh-pages` branch for review.
1. Optional: test your production pages in Github by merging your release branch to **your** fork of `gh-pages`. You can then post the link to your PR for others to easily review.

  ```
  git checkout gh-pages
  git merge release-v2000
  git push origin gh-pages
  ```
1. Once it's merged, visit https://cfpb.github.io/consumer-credit-trends/ to view the published HTML files.

## About the data

[Documentation about the data](data/README.md) is available and contains definitions for each column and field value in the csv files.

## Troubleshooting

Common errors and their causes:

#### Scenario: Running `gulp release` task

##### setTimeout error

```bash
      window.setTimeout( getSVG, 10000 );
            ^

TypeError: Cannot read property 'setTimeout' of undefined
```
This error happens when you run `gulp release` without a local server running. Make sure you have the `gulp watch` task running in a separate Terminal window when you run `gulp release`. See [Release Workflow](#release-workflow) instructions for more details.

##### release:copyFiles error

```bash
Using gulpfile ~/Sites/consumer-credit-trends/gulpfile.js
Starting 'connect'...
Finished 'connect' after 35 ms
Starting 'clean:releaseFiles'...
Finished 'clean:releaseFiles' after 6.93 ms
Starting 'release:copyFiles'...
events.js:160
      throw er; // Unhandled 'error' event
      ^

Error: listen EADDRINUSE :::8081
```

You are already running a server with `gulp watch`, so the release task fails. Close the terminal process or window running `gulp watch` and re-run the `gulp release` task.

## Getting help

Use the [issue tracker](https://github.com/cfpb/consumer-credit-trends/issues) to follow the
development conversation.
If you find a bug not listed in the issue tracker,
please [file a bug report](https://github.com/cfpb/consumer-credit-trends/issues/new?body=
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
