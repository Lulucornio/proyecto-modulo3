const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { profile } = require('console');

module.exports = {
  entry: {
    main: './src/assets/js/main.js',
    header: './src/assets/js/header.js',
    dashboard: './src/assets/js/dashboard.js',
    friendProfile: './src/assets/js/friend-profile.js',
    login: './src/assets/js/login.js',
    personalProfile: './src/assets/js/personal-profile.js',
    register: './src/assets/js/register.js',
    results: './src/assets/js/results.js',
    updatePassword: './src/assets/js/update-password.js',
    updateProfile: './src/assets/js/update-profile.js',
    },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      chunks: ['main','header']
    }),
    new HtmlWebpackPlugin({
      filename: 'dashboard.html',
      template: './src/dashboard.html',
      chunks: ['dashboard','header']
    }),
    new HtmlWebpackPlugin({
      filename: 'friend-profile.html',
      template: './src/friend-profile.html',
      chunks: ['friendProfile','header']
    }),
    new HtmlWebpackPlugin({
      filename: 'login.html',
      template: './src/login.html',
      chunks: ['login']
    }),
    new HtmlWebpackPlugin({
      filename: 'personal-profile.html',
      template: './src/personal-profile.html',
      chunks: ['personalProfile','header']
    }),
    new HtmlWebpackPlugin({
      filename: 'register.html',
      template: './src/register.html',
      chunks: ['register']
    }),
    new HtmlWebpackPlugin({
      filename: 'results.html',
      template: './src/results.html',
      chunks: ['results','header']
    }),
    new HtmlWebpackPlugin({
      filename: 'update-password.html',
      template: './src/update-password.html',
      chunks: ['updatePassword']
    }),
    new HtmlWebpackPlugin({
      filename: 'update-profile.html',
      template: './src/update-profile.html',
      chunks: ['updateProfile']
    })
  ],
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, 
        type: 'asset/resource',
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader","css-loader","sass-loader"],
      },
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  }
}