require('dotenv').config();

const pg = require('pg');
const format = require('pg-format');
const connectionString = process.env.DATABASE_URL;

const pool = new pg.Pool({
  connectionString
});

class QuizzesRepository{
  async createQuiz(data, callback){
    try{
      const quiz = await pool.query('INSERT INTO quizzes (title) VALUES ($1) returning id', [data.title]);

      let questions = [];
      for(let i=0; i<data.questions.length; i++){
        questions.push([quiz.rows[0].id, data.questions[i]]);
      }

      await pool.query(format('INSERT INTO questions (quiz_id, question_text) VALUES %L', questions));

      callback(null);
    } catch(error) {
      callback(error);
    }
  }

  async getQuizzes(params, callback){
    try{
      const quizzes = await pool.query(`SELECT quizzes.*, count(questions.*) AS question_count 
        FROM quizzes 
        JOIN questions ON quizzes.id = questions.quiz_id
        GROUP BY quizzes.id
        ORDER BY quizzes.date_created DESC LIMIT ${8} OFFSET ${(params.page - 1) * 8}`, []);
      const total = await pool.query('SELECT * FROM quizzes', []);
      
      callback(null, {
        quizzes: quizzes.rows,
        total: total.rows.length
      });
    } catch(error) {
      callback(error, null);
    }
  }

  async getQuiz(params, callback){
    try{
      const quiz = await pool.query('SELECT * FROM quizzes WHERE id = $1', [params.id]);
      const questions = await pool.query('SELECT * FROM questions WHERE quiz_id = $1', [params.id]);

      callback(null, {
        quiz: quiz.rows[0],
        questions: questions.rows
      });
    } catch(error) {
      callback(error, null);
    }
  }
}

module.exports = QuizzesRepository;
