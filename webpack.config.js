'use strict'; // eslint-disable-line semi

module.exports = {
  entry: './app/index.jsx', // entry point is the index.jsx in the app folder in the root of your project folder
  output: {
    path: __dirname,
    filename: './public/bundle.js' // bundle.js is in the public folder in the root of your project folder
  },
  context: __dirname,
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '*']
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react', 'env', 'stage-2'] // if you aren't using 'babel-preset-es2015', then omit the 'es2015'
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      }
    ]
  },
  plugins: []
};
