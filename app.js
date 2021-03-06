var express = require('express');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var quizRoutes = require('./backend/routes/quizzes.route.js');
var submissionRoutes = require('./backend/routes/submissions.route.js');
var userRoutes = require('./backend/routes/users.route.js');

app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/src', express.static(__dirname + '/src'));

app.use('/api', [quizRoutes, submissionRoutes, userRoutes]);

app.use('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});


module.exports = app;
