const jwt = require('jsonwebtoken');
const jwtsecret = require('../../jwtsecret.js');

const express = require('express');
const UsersRepository = require('../repositories/users.repository.js');

const userRoutes = express.Router();
const usersRepository = new UsersRepository();

userRoutes.post('/login', (req, res) => {
  usersRepository.login(req.body, (err, result) => {
    err ? res.status(500).send(err) : res.status(200).send(generateToken(result));
  });
});

userRoutes.post('/signup', (req, res) => {
  usersRepository.signup(req.body, (err, result) => {
    err ? res.status(500).send(err) : res.status(200).send(generateToken(result)); 
  });
});

function generateToken(auth){
  var user = {
    id: auth.id,
    username: auth.username
  };

  return jwt.sign(user, jwtsecret.secret);
}

module.exports = userRoutes;