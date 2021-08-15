const path = require('path');

const sharedConfig = require('./webpack.config.shared');

module.exports = {
  ...sharedConfig,

  devtool: 'source-map',
  entry: './src/electron/main.js',
  target: 'electron-main',

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  externals: { sqlite3: 'commonjs sqlite3' },
};
