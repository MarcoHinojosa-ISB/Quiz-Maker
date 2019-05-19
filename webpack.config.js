var bodyParser = require('body-parser');
var quizRoutes = require('./backend/routes/quizzes.route.js');

const config = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader',
        exclude: '/node_modules/'
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
    before(app){
      app.use(bodyParser.json());
      app.use(bodyParser.urlencoded({ extended: false }));

      app.use('/api', quizRoutes);
    }
  },
};

module.exports = config;
