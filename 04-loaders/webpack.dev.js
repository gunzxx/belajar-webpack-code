const path = require('path');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'output'),
        filename: 'dev.js',
    },
    watch: true,
    devtool: false,
}