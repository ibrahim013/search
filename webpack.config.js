const path = require('path');
const webpack = require('webpack');
const dotEnv = require("dotenv");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const parseVariables = dotEnv.config().parsed;
const environmentVariables = {};

for (let envVar in parseVariables) {
  environmentVariables[envVar] = JSON.stringify(parseVariables[envVar]);
}
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
        loaders: ["style-loader", "css-loader","sass-loader"]
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
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    HtmlWebpackPluginConfig,
    new webpack.DefinePlugin({
      "process.env": {
        ...environmentVariables
      }
    })
  ],
};

module.exports = webpackConfig;
