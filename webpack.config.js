const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
/*const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin*/

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js')
  },
  output: {
    filename: '[name][contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    assetModuleFilename: '[name][ext]',
  },
  devtool: 'source-map',
  devServer: {
    static:{
        directory: path.resolve(__dirname, 'dist')
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module:{
    rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.(?:js|mjs|cjs)$/,
            exclude: /node_modules/,
            use:{
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                },
            },
        },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Weather App',
        filename: 'index.html',
        template: 'src/template.html',
    }),
    /*new BundleAnalyzerPlugin(),*/
],
};