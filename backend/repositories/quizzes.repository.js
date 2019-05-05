const pg = require('pg');
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

  }

  async createQuiz(data, callback){
    try{
      const result = await pool.query('INSERT INTO quizzes (title) VALUES ($1) returning id', [data.title]);

      const questions = data.questions.map((question) => {
        return [result.rows[0].id, question];
      });

      await pool.query(format('INSERT INTO questions (quiz_id, question_text) VALUES %L', questions));

      callback(null);
    } catch(e) {
      callback(e);
    }
  }
}

module.exports = QuizzesRepository;
