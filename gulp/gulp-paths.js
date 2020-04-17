// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

const paths = {
    defaultColorsSrc: './app/default/constants/colorThemes.js',
    customColorsSrc: (name) => `./app/custom/${name}/constants/colorThemes.js`,
    colorsDest: './app/constants',
    customStringsSrc: (name) => `./app/custom/${name}/localeStrings`,
    customStringsDest: './assets/override/i18n',
    customImagesSrc: (name) => `./app/custom/${name}/images`,
    customImagesDest: './assets/override/images',
    releaseAssetsSrc: './assets/base/release',
    releaseAssetsDest: './assets/override/release',
    customSplashIosSrc: (name) => `./app/custom/${name}/nativeAssets/splash_screen/ios`,
    customSplashIosDest: './assets/override/release/splash_screen/ios',
    customSplashAndroidSrc: (name) => `./app/custom/${name}/nativeAssets/splash_screen/android`,
    customSplashAndroidDest: './assets/override/release/splash_screen/android',
};

module.exports = {
    paths,
};
