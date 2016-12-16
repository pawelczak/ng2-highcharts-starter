module.exports = {
    devtool: 'inline-source-map',

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: [
                    'awesome-typescript-loader',
                    'angular2-template-loader'
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loaders: [
                    'to-string-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            }
        ]

    }
};
