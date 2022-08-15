const path = require("path");
const HtmlWepackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.join(__dirname, "src", "index.tsx"),
    output: {
        path: path.resolve(__dirname, "dist/"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"]
                    }
                }
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "ts-loader"
                }
            }
        ]
    },
    resolve: { extensions: ["*", ".tsx", ".ts", ".js", ".jsx" ] },
    devServer: {
        static: "./dist",
        port: 3000,
    },
    plugins: [
        new HtmlWepackPlugin({
            template: path.join(__dirname, "public", "index.html"),
        })
    ]
}