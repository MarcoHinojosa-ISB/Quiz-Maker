var express = require('express');
var merge = require('webpack-merge');
var webpack = require('webpack');
var common = require('./webpack.common.js');
var quizRoutes = require('./backend/routes/quizzes.route.js');
var submissionRoutes = require('./backend/routes/submissions.route.js');
var userRoutes = require('./backend/routes/users.route.js');

module.exports = merge(common, {
  mode: 'development',
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('development')
      }
  })],
  devServer: {
    historyApiFallback: true,
    before(app){
      app.use(express.json());
      app.use(express.urlencoded({ extended: false }));

      app.use('/api', [quizRoutes, submissionRoutes, userRoutes]);
    }
  }
});