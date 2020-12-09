const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CopyPlugin = require("copy-webpack-plugin");

const mode = process.env.NODE_ENV;
const devMode = mode !== 'production';


const plugins = [
      new HtmlWebpackPlugin({
            title: 'Test task',
            template: path.resolve(__dirname, './src', './template.html'),
            // inject: 'body',
            filename: devMode ? 'index.html' : 'index.[contenthash].html',
      }),
      new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: devMode ? '[name].css' : '[name].[contenthash].css',
            // chunkFilename: devMode ? '[id].css' : '[id].[contenthash].css',
      }),
      new webpack.DefinePlugin({
            __DEV__: JSON.stringify(devMode),
      }),
      new CleanWebpackPlugin(),
];

if (devMode) {
      // only enable hot in development
      plugins.push(new webpack.HotModuleReplacementPlugin());
};

module.exports = {
      entry: {
            main: path.resolve(__dirname, './src', './index.js'),
      },
      output: {
            path: path.resolve(__dirname, './dist'),
            filename: '[name].[fullhash].js',
      },
      devtool: "source-map",
      plugins,
      mode,
      devServer: {
            historyApiFallback: true,
            contentBase: path.resolve(__dirname, './dist'),
            open: true,
            compress: true,
            hot: true,
            port: 9090,
      },
      module: {
            rules: [
                  {
                        test: /\.(js|jsx)$/,
                        exclude: /node_modules/,
                        use: [
                              {
                                    loader: 'babel-loader',
                                    options: {
                                          presets: ['@babel/preset-env', '@babel/preset-react'],
                                    }
                              }
                        ],
                  },
                  {
                        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                        type: 'asset/inline',
                  },
                  {
                        test: /\.(sa|sc|c)ss$/,
                        use: [
                              MiniCssExtractPlugin.loader,
                              'css-loader',
                        ],
                  },
                  {
                        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                        type: 'asset/inline',
                  },
                  {
                        test: /\.txt$/,
                        type: 'asset/source'
                  },
            ],
      },
};

