const path = require('path');

module.exports = {
    mode: "none",

    entry: './client/src/index.js',

    output: {
        path: path.resolve(__dirname, './client/dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [{
            test: /\.js$/,
            loader: "babel-loader",
            include: [
                path.resolve(__dirname, './client/src')
            ],
            options: {
                presets: ["@babel/env", "@babel/react"]
            }
        }]
    }
}