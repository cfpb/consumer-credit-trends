'use strict';

/* Notes:
   - The release task copies all the HTML files from the development directory, 'dist', to the 'charts' directory
   - The 'charts' folder is tracked in version control and deployed to Github for review and production use.
*/


var gulp = require( 'gulp' );
var config = require( '../config' );
var inlineCss = require('gulp-inline-css');

gulp.task('release:inline', function() {
    return gulp.src('./dist/**/*.html')
        .pipe(inlineCss())
        .pipe(gulp.dest('./css-test'));
});

gulp.task( 'release',
  [
    'copy:release'
  ]
);