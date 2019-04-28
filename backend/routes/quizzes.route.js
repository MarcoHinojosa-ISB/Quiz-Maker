const express = require('express');
const QuizzesRepository = require('../repositories/quizzes.repository.js');

const quizRoutes = express.Router();
const quizzesRepository = new QuizzesRepository();

quizRoutes.post('/quiz', (req, res) => {
  quizzesRepository.createQuiz(req.body, (err) => {
    err ? res.status(500).send(err) : res.status(200).send('ok');
  });
});

module.exports = quizRoutes;
