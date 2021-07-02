const path = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  target: 'electron-renderer',
  devtool: 'inline-source-map',
  entry: ['./src/index.jsx', './src/styles/index.scss'],

  resolve: {
    extensions: ['.js', '.ts', '.jsx'],
    // alias: {
    //   components: path.resolve(__dirname, './src/components/'),
    //   constants: path.resolve(__dirname, './src/constants/'),
    //   models: path.resolve(__dirname, './src/models/'),
    //   server: path.resolve(__dirname, './src/server/'),
    //   styles: path.resolve(__dirname, './src/styles/'),
    //   utils: path.resolve(__dirname, './src/utils/'),
    // },
  },

  output: {
    path: path.resolve(__dirname, 'dist/renderer'),
    filename: 'js/[name].js',
    assetModuleFilename: 'images/[hash][ext][query]',
    publicPath: './',
  },

  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },

      { test: /\.html$/, use: ['html-loader'] },

      {
        test: /\.(sc|sa|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },

      { test: /\.(png|svg|jpg|jpeg|gif)$/i, type: 'asset/resource' },
    ],
  },

  devServer: {
    historyApiFallback: true,
    compress: true,
    hot: true,
    port: 3000,
    publicPath: '/',
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),

    new MiniCssExtractPlugin({ filename: 'index.css' }),
  ],
};
