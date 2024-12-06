const path = require("path");

module.exports = {
    entry: "./src/index.js", // Entry file
    output: {
        path: path.resolve(__dirname, "dist/assets"), // Output directory
        filename: "bundle.js", // Output file
    },
    mode: "development", // or "production"
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
    watch: true
};