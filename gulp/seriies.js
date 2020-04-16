// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

const gulp = require('gulp');
const argv = require('yargs').argv;
require('./tasks-general');

// const nativeTasks = [
//     'splash_ios',
//     'splash_theme_color',
//     'appIcons_ios',
//     'splash_android',
//     'appIcons_android',
//     'appNameStage',
//     'appNameProd',
// ];
//
// const jsTasksDefault = ['defaultAssets', 'defaultConstants'];
// const jsTasksCustom = ['customAssets', 'customConstants'];
//
// const {withoutNative} = argv;
// const defaultTasksToRun = withoutNative ? jsTasksDefault : [...jsTasksDefault, ...nativeTasks];
// const customTasksToRun = withoutNative ? jsTasksCustom : [...jsTasksCustom, ...nativeTasks];

/*** Main series ***/
gulp.task('default', gulp.series('defaultColors'));

gulp.task('custom', gulp.series('customColors', 'customStrings'));

// /*******************/
//
// gulp.task('watch', () => {
//     gulp.watch('default/**/*', gulp.series('default'));
// });
