const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: path.join(__dirname, './'),

  entry: [
    'webpack-dev-server/client?http://localhost:3000', // dev server client
    'webpack/hot/dev-server',                          // HMR
    './src/index.js'                                   // your entry file
  ],

  output: {
    path: path.join(__dirname, 'public', 'assets'),
    filename: 'js/app.js',
    publicPath: '/assets/'
  },

  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },

  performance: {
    hints: false
  },

  module: {
    rules: [
      {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react', 'env']
      }
    },
    {
      test: /\.(scss|css)$/,
      use: [
        'style-loader',
        'css-loader' //s,
        // 'sass-loader'
      ]
    },
    {
      test: /\.(jpg|jpeg|gif|png)$/,
      exclude: /node_modules/,
      loader: 'url-loader?limit=1024&name=images/[name].[ext]'
    }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

devServer: {
  contentBase: path.join(__dirname, "public"),
  watchContentBase: true,
  compress: true,
  port: 3000,
  hot: true,
  inline: true,
  historyApiFallback: true,
  watchOptions: {
    poll: 1000,
    ignored: /node_modules/
  }
}
};
