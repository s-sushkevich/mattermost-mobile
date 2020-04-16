// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

const gulp = require('gulp');
const argv = require('yargs').argv;
const {paths} = require('./gulp-paths');

exports.defaultColors = gulp.task('defaultColors', () => {
    return gulp.src(paths.defaultColorsSrc).pipe(gulp.dest(paths.colorsDest, {overwrite: true}));
});

exports.customColors = gulp.task('customColors', () => {
    const customBuildName = argv.custom;

    return gulp.src(paths.customColorsSrc(customBuildName)).pipe(gulp.dest(paths.colorsDest, {overwrite: true}));
});

exports.customStrings = gulp.task('customStrings', () => {
    const customBuildName = argv.custom;

    return gulp.src(paths.customStringsSrc(customBuildName)).pipe(gulp.dest(paths.customStringsDest, {overwrite: true}));
});

exports.customImages = gulp.task('customImages', () => {
    const customBuildName = argv.custom;

    return gulp.src(paths.customImagesSrc(customBuildName)).pipe(gulp.dest(paths.customImagesDest, {overwrite: true}));
});
