var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {
    context: __dirname + '/blog',
    devtool: debug ? "inline-sourcemap" : null,
    entry: __dirname + "/blog/js/index.js",
    output: {
        path: __dirname + "/blog",
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
            },
            {
                test: /\.css$/,
                loader: 'style!css!postcss-loader'
            }

        ],
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],
    postcss: function() {
        return [autoprefixer];
    }
};
