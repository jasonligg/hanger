const path = require('path');

const config = {
  entry: './src/App/index.js',
  output: {
    path: path.resolve(`${__dirname}/build`),
    filename: 'bundle.js',
  },
  mode: process.env.NODE_ENV,
  devServer: {
    proxy: {
      '/': 'http://localhost:3000/',
      // '/signup': 'http://localhost:3000/',
      // '/login': 'http://localhost:3000/',
      // '/authorized': 'http://localhost:3000/',
    },
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  performance: {
    hints: false,
  },
};

module.exports = config;
