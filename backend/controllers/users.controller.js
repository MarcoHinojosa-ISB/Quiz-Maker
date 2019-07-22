const jwt = require('jsonwebtoken');
const jwtsecret = require('../../jwtsecret.js');

const UsersRepository = require('../repositories/users.repository');
const usersRepository = new UsersRepository();

function generateToken(auth){
  var user = {
    id: auth.id,
    username: auth.username
  };

  return jwt.sign(user, jwtsecret.secret);
}

class UsersController{ 
  login(req, res){
    usersRepository.login(req.body, (err, result) => {
      err ? res.status(500).send(err) : res.status(200).send(generateToken(result));
    });
  }

  signup(req, res){
    usersRepository.signup(req.body, (err, result) => {
      err ? res.status(500).send(err) : res.status(200).send(generateToken(result)); 
    });
  }
}

module.exports = UsersController;