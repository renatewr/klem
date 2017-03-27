const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
// importing plugins that do not come by default in webpack
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OfflinePlugin = require('offline-plugin');

const nodeEnv = process.env.NODE_ENV || 'production';

module.exports = {
  context: path.resolve('src'),
  devtool: 'source-map',
  entry: './app.js',
  output: {
    path: path.resolve('dist'),
    publicPath: '/',
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        loaders: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader', //translates css into CommonJs
          },
          {
            loader: 'less-loader', //compiles Less to Css
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')({ browsers: ['> 1%', 'IE >= 10'] })
                ];
              },
            },
          },
          ],
        }),
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015'],
          },
        },
      },
      {
        test: /\.(woff2?|ttf)$/,
        loaders: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$/i,
        loaders: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        loaders: ['raw-loader'],
      },
    ],
  },
  /* module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            ['es2015', { modules: false }],
          ],
        },
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader!autoprefixer-loader!less-loader',
        }),
      },
    ],
  },*/
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'smerteoglindring.html',
      template: 'smerteoglindring.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'velvære.html',
      template: 'velvære.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'hjelpihverdagen.html',
      template: 'hjelpihverdagen.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'om.html',
      template: 'about.html',
    }),
    new CopyWebpackPlugin([
      { from: 'favicons' },
    ]),
    // UglifyJsPlugin
    /* new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
      sourceMap: true,
    }),*/
    new ExtractTextPlugin({
      filename: '[name].css',
    }),
    // environment
    // new webpack.DefinePlugin({
      // 'process.env': { NODE_ENV: JSON.stringify(nodeEnv) },
    // }),
    new OfflinePlugin({
      safeToUseOptionalCaches: true,

      caches: {
        main: [
          'main.js',
          'main.css',
          'index.html',
        ],
        additional: [
          '*.woff',
          '*.woff2',
        ],
        optional: [
          ':rest:',
        ],
      },

      ServiceWorker: {
        events: true,
      },
      AppCache: {
        events: false,
      },
    }),
  ],
};
