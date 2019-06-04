var bodyParser = require('body-parser');
var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

var quizRoutes = require('./backend/routes/quizzes.route.js');
var submissionRoutes = require('./backend/routes/submissions.route.js');

app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/src', express.static(__dirname + '/src'));


app.use('/api', [quizRoutes, submissionRoutes]);

app.use('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});


module.exports = app;
