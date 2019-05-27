require('dotenv').config();

const pg = require('pg');
const format = require('pg-format');
const connectionString = process.env.DATABASE_URL;

const pool = new pg.Pool({
  connectionString
});

const Quiz = require('../models/quiz.js');
const Question = require('../models/question.js');

class QuizzesRepository {
  async createQuiz(data, callback){
    try{
      const quiz = await pool.query(`INSERT INTO quizzes (title) VALUES ($1) returning id`, [data.title]);

      let questions = [];
      for(let i=0; i<data.questions.length; i++){
        questions.push([quiz.rows[0].id, data.questions[i]]);
      }

      await pool.query(format(`INSERT INTO questions (quiz_id, question_text) VALUES %L`, questions));

      callback(null);
    } catch(error) {
      callback(error);
    }
  }

  async getQuizzes(params, callback){
    try{
      const quizzes = await pool.query(`SELECT quizzes.*, count(questions.*) as q_count 
        FROM quizzes join questions 
        ON quizzes.id = questions.quiz_id
        GROUP BY quizzes.id
        ORDER BY quizzes.date_created DESC LIMIT ${8} OFFSET ${(params.page - 1) * 8}`, []);

      const mappedQuizzes = await quizzes.rows.map((row) => {
        return Object.assign({ numberOfQuestions: parseInt(row.q_count) }, new Quiz(row));
      });

      const total = await pool.query(`SELECT quizzes.*
        FROM quizzes ORDER BY quizzes.date_created DESC`, []);
      
      const result = {
        quizzes: mappedQuizzes,
        total: total.rows.length
      };

      callback(null, result);
    } catch(error) {
      callback(error, null);
    }
  }

  async getQuiz(params, callback){
    try{
      const quiz = await pool.query(`SELECT * FROM quizzes WHERE id = ${params.id}`, []);
      const questions = await pool.query(`SELECT * FROM questions WHERE quiz_id = ${params.id}`, []);

      const result = {
        quiz: await new Quiz(quiz.rows[0]),
        questions: await questions.rows.map((row) => new Question(row)),
      };

      callback(null, result);
    } catch(error) {
      callback(error, null);
    }
  }
}

module.exports = QuizzesRepository;
