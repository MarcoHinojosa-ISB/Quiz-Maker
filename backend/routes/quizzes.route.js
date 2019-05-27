const express = require('express');
const QuizzesRepository = require('../repositories/quizzes.repository.js');

const quizRoutes = express.Router();
const quizzesRepository = new QuizzesRepository();

quizRoutes.post('/quiz', (req, res) => {
  quizzesRepository.createQuiz(req.body, (err) => {
    err ? res.status(500).send(err) : res.status(200).send('ok');
  });
});

quizRoutes.get('/quizzes', (req, res) => {
  quizzesRepository.getQuizzes(req.query, (err, result) => {
    err ? res.status(500).send(err) : res.status(200).send(result);
  });
});

quizRoutes.get('/quiz', (req, res) => {
  quizzesRepository.getQuiz(req.query, (err, result) => {
    err ? res.status(500).send(err) : res.status(200).send(result);
  });
});

module.exports = quizRoutes;
