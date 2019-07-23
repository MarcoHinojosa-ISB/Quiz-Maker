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
      const submission = await pool.query('INSERT INTO submissions (quiz_id, user_id) VALUES ($1, $2) returning id', 
      [data.quiz.id, data.userId]);

      let answers = [];
      for(let i=0; i<data.answers.length; i++){
        answers.push([submission.rows[0].id, data.questions[i].id, data.answers[i]]);
      }

      await pool.query(format('INSERT INTO answers (submission_id, question_id, answer_text) VALUES %L', answers));

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

      const total = await pool.query('SELECT * FROM submissions ORDER BY date_created DESC', []);

      callback(null, {
        submissions: submissions.rows,
        total: total.rows.length
      });
    } catch(error) {
      callback(error, null);
    }
  }

  async getSubmission(params, callback){
    try{
      const questionsAnswers = await pool.query(`SELECT answers.answer_text, questions.question_text
        FROM answers 
        JOIN questions ON questions.id = answers.question_id
        WHERE answers.submission_id = ${params.id} ORDER BY answers.id`, []);
      
      const quiz = await pool.query(`SELECT quizzes.* FROM quizzes 
        JOIN submissions ON submissions.id = ${params.id} 
        WHERE quizzes.id = submissions.quiz_id`, []);

      callback(null, {
        questionsAnswers: questionsAnswers.rows,
        quiz: quiz.rows[0]
      });
    } catch(error) {
      callback(error, null);
    }
  }
}

module.exports = SubmissionsRepository;