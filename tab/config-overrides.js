var webpack = require('webpack');

module.exports = function override(config, env) {

    config.plugins = (config.plugins || []).concat([
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1
        })
    ]);

    config.output.filename = 'tab-main.js';
    return config;
}
