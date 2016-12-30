'use strict';

var fs = require( 'fs' );
var glob = require( 'glob' );

/**
 * Set up file paths
 */
var loc = {
  src:  './src',
  dev: './dev',
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
    dest: loc.dev,
    releaseDest: loc.prod + '/charts/'
  },
  styles: {
    cwd:      loc.src + '/static/css',
    src:      '/main.less',
    dest:     loc.dev + '/static/css',
    settings: {
      paths: glob.sync( loc.lib + '/cf-*/src/' ),
      compress: false
    }
  },
  chartStyles: {
    cwd:      loc.src + '/static/css',
    src:      '/charts.less',
    dest:     loc.dev + '/static/css',
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
    dest: loc.dev + '/static/js/',
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
    dest: loc.dev + '/static/img'
  },
  copy: {
    release: {
      src: loc.dev + '/**/*.html',
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
      dest: loc.dev
    },
    icons: {
      src:  loc.lib + '/cf-icons/src/fonts/*',
      dest: loc.dev + '/static/fonts/'
    },
    vendorJs: {
      src: [
        loc.lib + '/box-sizing-polyfill/boxsizing.htc',
        loc.lib + '/html5shiv/dev/html5shiv-printshiv.min.js'
      ],
      dest: loc.dev + '/static/js/'
    }
  }
};
