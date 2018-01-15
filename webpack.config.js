const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('dotenv').config();

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: 'client/index.html',
  filename: 'index.html',
  inject: 'body',
});

const webpackConfig = {
  entry: ['babel-polyfill', './client/index.js'],
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  externals: {
    cheerio: 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  devServer: {
    contentBase: './client',
    inline: true,
    hot: true,
    port: 3000,
  },
  node: {
    fs: 'empty',
    dns: 'empty',
    net: 'empty',
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0'],
        },
      },
      {
        test: /\.html$/,
        loader: 'html-loader?attrs[]=video:src'
      }, 
      {
        test: /\.mp4$/,
        loader: 'url-loader?limit...'
    },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'url-loader?limit=10000',
          'img-loader'
        ]
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
//   plugins: [
//     new webpack.HotModuleReplacementPlugin(),
//     HtmlWebpackPluginConfig,
//     new ExtractTextPlugin({
//       filename: 'style.css',
//       allChunks: true,
//     }),
//   ],
};

module.exports = webpackConfig;
