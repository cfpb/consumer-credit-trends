'use strict';

require('./env.js');
var moment = require( 'moment' );

var DATA_REPO = 'consumer-credit-trends';
var DATA_REPO_ORG = 'cfpb';
var DATA_FILE_PATH = 'data/vol_data_AUT.csv';
var TOKEN = process.env.GITHUB_ACCESS_TOKEN_KEY;
var GitHub = require('github-api');
var github = null;
var dataRepo = null;
var most_recent_commit_date = '-';

if (TOKEN !== undefined || TOKEN === 'paste_it_here') {
  github = new GitHub({
    token: TOKEN
  });
} else {
  // unauthenticated clients are limited to 60 requests per hour
  console.warn('No Github personal access token provided. Check the README for instructions on how to update your env.js.')
  github = new GitHub();
}

/**
 * Formats date for when the data was last updated beneath each chart.
 * @param {string} Timestamp - Timestamp of last commit from Github API
 */
function _formatDatePublished( timestamp ) {
  if ( timestamp ) {
    var date_published = moment( timestamp ).format( 'MMMM YYYY' );
    return date_published;
  } else {
    return '-';
  }
}

/**
 * Request info about the data set and files from Github.
 */

function init( ) {

  dataRepo = github.getRepo(DATA_REPO_ORG, DATA_REPO);

  // Get list of commits for branch (uses master by default)
  dataRepo.listCommits( { 'path' : DATA_FILE_PATH } )
    .then( function( commits ) {
      console.log(commits)
      most_recent_commit_date = commits.data[0].commit.author.date;
      console.log('Date published: ' + _formatDatePublished(most_recent_commit_date));
  }, function ( error ) {
    console.error( error );
  } );
}

module.exports = { init: init };
