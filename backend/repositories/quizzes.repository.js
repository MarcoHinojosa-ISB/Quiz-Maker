const pg = require('pg');
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

  createQuiz(data, callback){
    pool.query('INSERT INTO quizzes (title) VALUES ($1) returning id', [data.title], (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null);
      }
    });
  }
}

module.exports = QuizzesRepository;
