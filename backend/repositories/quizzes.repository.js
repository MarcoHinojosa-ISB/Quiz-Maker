require('dotenv').config();

const pg = require('pg');
const QuizModel = require('../models/quiz.js');
const QuestionModel = require('../models/question.js');
const format = require('pg-format');
const connectionString = process.env.DATABASE_URL;

const pool = new pg.Pool({
  connectionString
})

class QuizzesRepository {
  constructor(){
    this.Quiz = new QuizModel();
    this.Question = new QuestionModel();
  }

  async createQuiz(data, callback){
    try{
      const result = await pool.query(`INSERT INTO quizzes (title) VALUES (${data.title}) returning id`, []);

      const questions = data.questions.map((question) => {
        return [result.rows[0].id, question];
      });

      await pool.query(format(`INSERT INTO questions (quiz_id, question_text) VALUES %L`, questions));

      callback(null);
    } catch(error) {
      callback(error);
    }
  }

  async getQuizzes(params, callback){
    try{
      const quizzes = await pool.query(`SELECT quizzes.*, count(questions.*) as number_of_questions 
        FROM quizzes, questions 
        WHERE quizzes.id = questions.quiz_id
        GROUP BY quizzes.id
        ORDER BY quizzes.date_created DESC LIMIT ${8} OFFSET ${(params.page - 1) * 8}`, []);

      const total = await pool.query(`SELECT quizzes.*
        FROM quizzes ORDER BY quizzes.date_created DESC`, []);
      
      const result = {
        quizzes: await quizzes.rows.map((row) => this.Quiz.convertSqlToJson(row)),
        total: total.rows.length
      }

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
        quiz: await this.Quiz.convertSqlToJson(quiz.rows[0]),
        questions: await questions.rows.map((row) => this.Question.convertSqlToJson(row)),
      }

      callback(null, result);
    } catch(error) {
      callback(error, null);
    }
  }
}

module.exports = QuizzesRepository;
