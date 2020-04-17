// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

const gulp = require('gulp');
require('./tasks-general');
require('./tasks-native');

const customTasksToRun = [
    'customColors',
    'customStrings',
    'customImages',
    'overrideReleaseAssets',
    'customSplashIos',
    'customSplashAndroid',
    'customAppEnvVariables',
];

/*** Main series ***/
gulp.task('default', gulp.series('defaultColors'));

gulp.task('custom', gulp.series(...customTasksToRun));
