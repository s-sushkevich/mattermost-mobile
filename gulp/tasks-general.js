// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

const gulp = require('gulp');
const argv = require('yargs').argv;
const fs = require('fs');
const {paths} = require('./gulp-paths');

exports.defaultColors = gulp.task('defaultColors', () => {
    return gulp.src(paths.defaultColorsSrc).pipe(gulp.dest(paths.colorsDest, {overwrite: true}));
});

exports.customColors = gulp.task('customColors', () => {
    const customBuildName = argv.custom;

    return gulp.src(paths.customColorsSrc(customBuildName)).pipe(gulp.dest(paths.colorsDest, {overwrite: true}));
});

exports.customStrings = gulp.task('customStrings', (callback) => {
    const customBuildName = argv.custom;

    if (fs.existsSync(paths.customStringsSrc(customBuildName))) {
        return gulp.src(`${paths.customStringsSrc(customBuildName)}/*`).pipe(gulp.dest(paths.customStringsDest, {overwrite: true}));
    }

    return callback();
});

exports.customImages = gulp.task('customImages', (callback) => {
    const customBuildName = argv.custom;

    if (fs.existsSync(paths.customImagesSrc(customBuildName))) {
        return gulp.src(`${paths.customImagesSrc(customBuildName)}/*`).pipe(gulp.dest(paths.customImagesDest, {overwrite: true}));
    }

    return callback();
});
