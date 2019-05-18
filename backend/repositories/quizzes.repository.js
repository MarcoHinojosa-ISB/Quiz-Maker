const pg = require('pg');
const QuizModel = require('../models/quiz.js');
const format = require('pg-format');

const pool = new pg.Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'quiz_maker',
  password: 'postgres',
  port: 5432
});

class QuizzesRepository {
  constructor(){
    this.Quiz = new QuizModel();
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
        ORDER BY quizzes.date_created DESC LIMIT ${params.limit} OFFSET ${params.offset}`, []);

      const count = await pool.query(`SELECT quizzes.*
        FROM quizzes ORDER BY quizzes.date_created DESC`, []);
      
      let result = {
        quizzes: await quizzes.rows.map( (row) => {
          return this.Quiz.convertSqlToJson(row);
        }),
        count: count.rows.length
      }

      callback(null, result);
    } catch(error) {
      callback(error, null);
    }
  }
}

module.exports = QuizzesRepository;
