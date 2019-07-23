module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
  entry: ['./src/entry.js', './src/stylesheets/entry.scss'],
  output: {
    path: __dirname + '/src/build',
    publicPath: '/src/build',
    filename: 'bundle.js'
  }
};
