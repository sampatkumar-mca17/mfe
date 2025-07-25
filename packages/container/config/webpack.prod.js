const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.common');
const moduleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');
const domain = process.env.PRODUCTION_DOMAIN;
const prodConfig = {
    mode:'production',
    output:{
        filename:'[name].[contenthash].js',
        publicPath: '/container/latest/'
    },
    plugins:[
        new moduleFederationPlugin({
            name:'container',
            remotes:{
                marketing:`marketing@${domain}/marketing/latest/remoteEntry.js`
            },
            shared:packageJson.dependencies
        })
    ]
}

module.exports = merge(commonConfig,prodConfig);