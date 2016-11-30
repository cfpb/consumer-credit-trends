'use strict';

require('./env.js');


var TOKEN = process.env.GITHUB_ACCESS_TOKEN_KEY;

function getMetaData(file) {
   // GET /repos/:owner/:repo/contents/:path

}


var GitHub = require('github-api');

// by default all requests are unauthenticated
// unauthenticated clients are limited to 60 request per hour
// var noAuth = new GitHub();

// you can also provide an OAuth token to authenticate the requests
var oauthAuth = new GitHub({
  token: TOKEN
});

console.log('your token was set to ' +TOKEN)