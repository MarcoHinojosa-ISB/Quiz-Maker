var express = require('express');
var quizRoutes = require('./backend/routes/quizzes.route.js');
var submissionRoutes = require('./backend/routes/submissions.route.js');
var userRoutes = require('./backend/routes/users.route.js');

const config = {
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
  },
  devServer: {
    historyApiFallback: true,
    before(app){
      app.use(express.json());
      app.use(express.urlencoded({ extended: false }));

      app.use('/api', [quizRoutes, submissionRoutes, userRoutes]);
    }
  },
};

module.exports = config;
