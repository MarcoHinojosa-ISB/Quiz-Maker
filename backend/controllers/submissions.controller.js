const Answer = require('../models/answer.js');
const Question = require('../models/question.js');
const Quiz = require('../models/quiz.js');

const SubmissionsRepository = require('../repositories/submissions.repository');
const submissionsRepository = new SubmissionsRepository();

class SubmissionsController{
  createSubmission(req, res){
    submissionsRepository.createSubmission(req.body, (err) => {
      if(err) {
        res.status(500).send(err); 
      } else {
        res.status(200).send('ok');
      }
    });
  }

  getSubmissions(req, res){
    submissionsRepository.getSubmissions(req.query, (err, result) => {
      if(err) {
        res.status(500).send(err); 
      } else {
        res.status(200).send(result);
      }
    });
  }

  getSubmission(req, res){
    submissionsRepository.getSubmission(req.query, (err, result) => {
      if(err) {
        res.status(500).send(err); 
      } else {
        result.answers = result.questionsAnswers.map((qa) => new Answer({ answer_text: qa.answer_text }));
        result.questions = result.questionsAnswers.map((qa) => new Question({ question_text: qa.question_text}));
        result.quiz = new Quiz(result.quiz);
        
        res.status(200).send(result);
      }
    });
  }
}

module.exports = SubmissionsController;