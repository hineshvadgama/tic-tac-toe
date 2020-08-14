const path = require('path');

module.exports = {
    devServer: {
        contentBase: path.resolve(__dirname, './src'),
        historyApiFallback: true,
        port: 3000
    },
    entry: path.resolve(__dirname, './src/index.js'),
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(woff|woff2|eot|ttf|otf)/, use: 'file-loader' }
        ]
    },
    output: {
        filename: 'bundle.js'
    }
}
