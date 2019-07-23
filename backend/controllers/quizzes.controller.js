const Question = require('../models/question.js');
const Quiz = require('../models/quiz.js');

const QuizzesRepository = require('../repositories/quizzes.repository');
const quizzesRepository = new QuizzesRepository();

class QuizzesController{
  createQuiz(req, res){
    quizzesRepository.createQuiz(req.body, (err) => {
      if(err) { 
        res.status(500).send(err);
      } else {
        res.status(200).send('ok');
      }
    });
  }

  getQuizzes(req, res){
    quizzesRepository.getQuizzes(req.query, (err, result) => {
      if(err) {
        res.status(500).send(err);
      } else {
        result.quizzes = result.quizzes.map((quiz) => new Quiz(quiz));

        res.status(200).send(result);
      } 
    });
  }

  getQuiz(req, res){
    quizzesRepository.getQuiz(req.query, (err, result) => {
      if(err) {
        res.status(500).send(err);
      } else {
        result.quiz = new Quiz(result.quiz);
        result.questions = result.questions.map((question) => new Question(question));
        
        res.status(200).send(result);
      }
    });
  }
}

module.exports = QuizzesController;