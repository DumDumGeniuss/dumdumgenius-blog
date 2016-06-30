module: {
    loaders: [
        {
            test:/\.jsx?$/,
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
    ]
}