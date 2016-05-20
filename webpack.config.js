var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: [
        "webpack-dev-server/client?http://localhost:8080",
        "webpack/hot/only-dev-server",
        './app/index'
    ],
    output: {
        path: path.resolve(__dirname, "public"),
        publicPath: "/",
        filename: "browser-bundle.js"
    },
    resolve: {
        modulesDirectories: [
            "app",
            "node_modules"
        ]
    },
    devtool: "source-map",
    devServer: {
        contentBase: path.resolve(__dirname, "public"),
        publicPath: "/",
        colors: true,
        historyApiFallback: true,
        inline: true,
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ["react-hot", "babel"],
                include: path.resolve(__dirname, "app")
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(woff|png|jpg|gif|svg)$/,
                loader: "file-loader?name=static/[name].[ext]"
            }
        ]
    }
};