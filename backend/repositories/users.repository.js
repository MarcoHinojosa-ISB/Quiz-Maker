require('dotenv').config();

const bcrypt = require('bcryptjs');
const pg = require('pg');
const connectionString = process.env.DATABASE_URL;

const pool = new pg.Pool({
  connectionString
});

class UsersRepository {
  async login(data, callback){
    try{
      let user = await pool.query('SELECT * FROM users WHERE username = $1', [data.username]);
  
      if(user.rows.length === 0) {
        callback('username does not exist', null);
      } else {
        bcrypt.compare(data.password, user.rows[0].password, function(error, isPasswordMatch){
          if(error) {
            callback('Server error', null);
          } else if(!isPasswordMatch) {
            callback('Password is invalid', null);
          } else {
            callback(null, user.rows[0]);
          }
        });
      }
    } catch(error) {
      callback(error, null);
    }
  }
  
  async signup(data, callback){
    bcrypt.hash(data.password, 10, async function(error, hash){
      if(error) {
        callback(error, null);
      } else {
        try {
          let user = await pool.query('INSERT INTO users (username, password) VALUES ($1, $2) returning *', [data.username, hash]);
          
          callback(null, user.rows[0]);
        } catch(error) {
          if(error.code === '23505') {
            callback('username already exists', null);
          } else {
            callback('server error', null);
          }
        }
      }
    });
  }
}

module.exports = UsersRepository;