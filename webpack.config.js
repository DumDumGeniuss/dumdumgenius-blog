var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
    context: __dirname + '/src',
    devtool: debug ? "inline-sourcemap" : null,
    entry: __dirname + "/src/js/index.js",
    output: {
        path: __dirname + "/src",
        filename: "main.min.js"
    },
    module: {
        loaders: [
            {
                test:/\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }

        ],
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],
};
