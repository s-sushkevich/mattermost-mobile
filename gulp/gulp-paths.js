// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

const paths = {
    defaultColorsSrc: './app/default/constants/colorThemes.js',
    customColorsSrc: (name) => `./app/custom/${name}/constants/colorThemes.js`,
    colorsDest: './app/constants',
};

module.exports = {
    paths,
};
