const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './code/main.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
    },
    plugins: [new HtmlWebpackPlugin({ template: "./index.html" })],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.png$/i,
                type: "asset/resource"
            },
            {
                test: /\.(wolf|wolf2)$/i,
                type: "asset/resource"
            }
        ]
    }
}