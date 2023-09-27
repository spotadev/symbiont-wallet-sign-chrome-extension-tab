"use strict";
exports.__esModule = true;
require("webpack-dev-server");
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = function override(config, env) {

    // config.devtool = false;
    config.devtool = 'inline-source-map';

    config.optimization.splitChunks = {
        cacheGroups: {
            "default": false
        }
    };

    config.optimization.runtimeChunk = false;

    config.plugins = config.plugins.filter(
        function (plugin) { return !(plugin instanceof MiniCssExtractPlugin); });

    config.module.rules = config.module.rules.map(function (moduleRule) {
        var _a;
        moduleRule.oneOf = (_a = moduleRule.oneOf) === null ||
            _a === void 0 ? void 0 : _a.map(function (rule) {
                if (!rule.hasOwnProperty('use'))
                    return rule;
                return Object.assign({}, rule, {
                    use: rule.use.map(function (options) {
                        return /mini-css-extract-plugin/.test(options.loader)
                            ? { loader: require.resolve('style-loader'), options: {} }
                            : options;
                    })
                });
            });
        return moduleRule;
    });

    // for axios so we do not have problem with cjs
    // https://github.com/facebook/create-react-app/pull/12021
    config.module.rules = config.module.rules.map(rule => {
        if (rule.oneOf instanceof Array) {
            rule.oneOf[rule.oneOf.length - 1].exclude = [/\.(js|mjs|jsx|cjs|ts|tsx)$/, /\.html$/, /\.json$/];
        }
        return rule;
    });

    config.output.filename = 'content-main.js';
    return config;
};
