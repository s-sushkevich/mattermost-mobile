// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

const paths = {
    defaultColorsSrc: './app/default/constants/colorThemes.js',
    customColorsSrc: (name) => `./app/custom/${name}/constants/colorThemes.js`,
    colorsDest: './app/constants',
    defaultStringsSrc: './app/default/localeStrings',
    customStringsSrc: (name) => `./app/custom/${name}/localeStrings`,
    stringsDest: './assets/override/i18n',
    customImagesSrc: (name) => `./app/custom/${name}/images`,
    defaultImagesSrc: './app/default/images',
    imagesDest: './assets/override/images',
};

module.exports = {
    paths,
};
