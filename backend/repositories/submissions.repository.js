require('dotenv').config();

const pg = require('pg');
const format = require('pg-format');
const connectionString = process.env.DATABASE_URL;

const pool = new pg.Pool({
  connectionString
});

class SubmissionsRepository {
  async createSubmission(data, callback){
    try{
      const submission = await pool.query(`INSERT INTO submissions (quiz_id) VALUES ($1) returning id`, [data.quiz.id]);

      let answers = [];
      for(let i=0; i<data.answers.length; i++){
        answers.push([submission.rows[0].id, data.questions[i].id, data.answers[i]]);
      }

      await pool.query(format(`INSERT INTO answers (submission_id, question_id, answer_text) VALUES %L`, answers));

      callback(null);
    } catch(error) {
      callback(error);
    }
  }

  async getSubmissions(params, callback){
    try{
      const submissions = await pool.query(`SELECT submissions.id, quizzes.title, users.username 
        FROM submissions 
        JOIN quizzes ON submissions.quiz_id = quizzes.id
        LEFT JOIN users ON submissions.user_id = users.id
        ORDER BY submissions.date_created DESC LIMIT ${8} OFFSET ${(params.page - 1) * 8}`, []);

      const total = await pool.query(`SELECT submissions.*
        FROM submissions ORDER BY submissions.date_created DESC`, []);
      
      const result = {
        submissions: submissions.rows,
        total: total.rows.length
      };

      callback(null, result);
    } catch(error) {
      callback(error, null);
    }
  }
}

module.exports = SubmissionsRepository;