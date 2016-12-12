'use strict';

var fs = require( 'fs' );
var glob = require( 'glob' );

/**
 * Set up file paths
 */
var loc = {
  src:  './src',
  dist: './dist',
  prod: './',
  lib:  './node_modules', // eslint-disable-line no-sync, no-inline-comments, max-len
  test: './test'
};

module.exports = {
  loc: loc,
  pkg: JSON.parse( fs.readFileSync( 'package.json' ) ), // eslint-disable-line no-sync, no-inline-comments, max-len
  banner:
      '/*!\n' +
      ' *  <%= pkg.name %> - v<%= pkg.version %>\n' +
      ' *  <%= pkg.homepage %>\n' +
      ' *  Licensed <%= pkg.license %> by' +
      ' Consumer Financial Protection Bureau tech@cfpb.gov\n' +
      ' */',
  lint: {
    src: [
      loc.src + '/static/js/**/*.js',
      loc.src + '/static/js/*.js',
      loc.test + '/unit_tests/**/*.js',
      loc.test + '/browser_tests/**/*.js'
    ],
    gulp: [
      'gulpfile.js',
      'gulp/**/*.js'
    ]
  },
  test: {
    src:   loc.src + '/static/js/**/*.js',
    tests: loc.test
  },
  clean: {
    dest: loc.dist,
    releaseDest: loc.prod + '/charts/'
  },
  styles: {
    cwd:      loc.src + '/static/css',
    src:      '/main.less',
    dest:     loc.dist + '/static/css',
    settings: {
      paths: glob.sync( loc.lib + '/cf-*/src/' ),
      compress: false
    }
  },
  chartStyles: {
    cwd:      loc.src + '/static/css',
    src:      '/charts.less',
    dest:     loc.dist + '/static/css',
    settings: {
      paths: glob.sync( loc.lib + '/cf-*/src/' ),
      compress: true
    }
  },
  scripts: {
    src: [
      loc.src + '/static/js/metadata.js',
      loc.src + '/static/js/bar.js',
      loc.src + '/static/js/tile-map.js',
      loc.src + '/static/js/formatDates.js',
      loc.src + '/static/js/templates/charts.js',
      loc.src + '/static/js/utils/getFilePath.js',
      loc.src + '/static/js/line.js',
      loc.src + '/static/js/main.js'
    ],
    dest: loc.dist + '/static/js/',
    name: 'main.js'
  },
  handlebarsTemplates: {
    src: [
      loc.src + '/static/js/templates/**',
      loc.src + '/static/index.html'
    ],
    dom: loc.src + '/static/js/utils/dom.js',
    charts: loc.src + '/static/js/templates/charts.js'
  },
  images: {
    src:  loc.src + '/static/img/**',
    dest: loc.dist + '/static/img'
  },
  copy: {
    release: {
      src: loc.dist + '/**/*.html',
      destFiles: loc.prod + '/charts/**/*.html',
      dest: loc.prod
    },
    files: {
      src: [
        // loc.src + '/**/*.html', // use .hbs templates instead
        loc.src + '/**/*.pdf',
        loc.src + '/_*/**/*',
        loc.src + '/robots.txt',
        loc.src + '/favicon.ico',
        '!' + loc.lib + '/**/*.html'
      ],
      dest: loc.dist
    },
    icons: {
      src:  loc.lib + '/cf-icons/src/fonts/*',
      dest: loc.dist + '/static/fonts/'
    },
    vendorJs: {
      src: [
        loc.lib + '/box-sizing-polyfill/boxsizing.htc',
        loc.lib + '/html5shiv/dist/html5shiv-printshiv.min.js'
      ],
      dest: loc.dist + '/static/js/'
    }
  }
};
