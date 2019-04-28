const config = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: '/node-modules/'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader',
        exclude: '/node-modules/'
      }
    ]
  },
  entry: ['./src/entry.js', './src/entry.scss'],
  output: {
    path: __dirname + '/src/build',
    publicPath: '/src/build',
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true,
  },
};

module.exports = config;
