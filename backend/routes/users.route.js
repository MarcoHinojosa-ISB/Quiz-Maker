const express = require('express');
const userRoutes = express.Router();

const UsersController = require('../controllers/users.controller.js');
const usersController = new UsersController();

userRoutes.post('/login', usersController.login);
userRoutes.post('/signup', usersController.signup);

module.exports = userRoutes;