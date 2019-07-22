const express = require('express');
const quizRoutes = express.Router();

const QuizzesController = require('../controllers/quizzes.controller');
const quizzesController = new QuizzesController();

quizRoutes.post('/quiz', quizzesController.createQuiz);
quizRoutes.get('/quizzes', quizzesController.getQuizzes);
quizRoutes.get('/quiz', quizzesController.getQuiz);

module.exports = quizRoutes;
