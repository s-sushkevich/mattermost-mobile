// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

const gulp = require('gulp');
const tap = require('gulp-tap');
const argv = require('yargs').argv;
const fs = require('fs');
const {paths} = require('./gulp-paths');

exports.overrideReleaseAssets = gulp.task('overrideReleaseAssets', () => {
    return gulp.src(`${paths.releaseAssetsSrc}/**/*`).pipe(gulp.dest(paths.releaseAssetsDest, {overwrite: true}));
});

exports.customAppEnvVariables = gulp.task('customAppEnvVariables', (callback) => {
    const customBuildName = argv.custom;
    const customEnvFileSrc = paths.customEnvFileSrc(customBuildName);

    if (fs.existsSync(customEnvFileSrc)) {
        gulp.src(customEnvFileSrc).pipe(gulp.dest(paths.customEnvFileDest, {overwrite: true}));
    }

    return callback();
});

exports.customSplashIos = gulp.task('customSplashIos', (callback) => {
    const customBuildName = argv.custom;
    const splashSrc = paths.customSplashIosSrc(customBuildName);

    if (fs.existsSync(splashSrc)) {
        return gulp.src(`${splashSrc}/*`).pipe(gulp.dest(paths.customSplashIosDest, {overwrite: true}));
    }

    return callback();
});

exports.customSplashAndroid = gulp.task('customSplashAndroid', (callback) => {
    const customBuildName = argv.custom;
    const splashSrc = paths.customSplashAndroidSrc(customBuildName);

    if (fs.existsSync(splashSrc)) {
        return gulp.src(`${splashSrc}/**/*`).pipe(gulp.dest(paths.customSplashAndroidDest, {overwrite: true}));
    }

    return callback();
});

exports.customAppIconIos = gulp.task('customAppIconIos', (callback) => {
    const customBuildName = argv.custom;
    const iconsSrc = paths.customAppIconIosSrc(customBuildName);

    if (fs.existsSync(iconsSrc)) {
        return gulp.src(`${iconsSrc}/*`).pipe(gulp.dest(paths.customAppIconIosDest, {overwrite: true}));
    }

    return callback();
});

exports.customAppIconAndroid = gulp.task('customAppIconAndroid', (callback) => {
    const customBuildName = argv.custom;
    const iconsSrc = paths.customAppIconAndroidSrc(customBuildName);

    if (fs.existsSync(iconsSrc)) {
        return gulp.src(`${iconsSrc}/**/*`).pipe(gulp.dest(paths.customAppIconAndroidDest, {overwrite: true}));
    }

    return callback();
});
