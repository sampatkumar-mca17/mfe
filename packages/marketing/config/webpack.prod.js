const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.common');
const moduleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');
const domain = process.env.PRODUCTION_DOMAIN;
const prodConfig = {
    mode:'production',
    output:{
        filename:'[name].[contenthash].js',
        publicPath: '/marketing/latest/'
    },
    plugins:[
        new moduleFederationPlugin({
            name:'marketing',
            filename:'remoteEntry.js',
            exposes:{
                './MarketingApp': './src/bootstrap'
            },
            shared:packageJson.dependencies
        })
    ]
}

module.exports = merge(commonConfig,prodConfig);
