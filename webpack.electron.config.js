const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: './src/electron/main.js',
  target: 'electron-main',

  resolve: {
    extensions: ['.js', '.jsx'],
  },

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
};
