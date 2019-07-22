const QuizzesRepository = require('../repositories/quizzes.repository');
const quizzesRepository = new QuizzesRepository();

class QuizzesController{
  createQuiz(req, res){
    quizzesRepository.createQuiz(req.body, (err) => {
      err ? res.status(500).send(err) : res.status(200).send('ok');
    });
  }

  getQuizzes(req, res){
    quizzesRepository.getQuizzes(req.query, (err, result) => {
      err ? res.status(500).send(err) : res.status(200).send(result);
    });
  }

  getQuiz(req, res){
    quizzesRepository.getQuiz(req.query, (err, result) => {
      err ? res.status(500).send(err) : res.status(200).send(result);
    });
  }
}

module.exports = QuizzesController;