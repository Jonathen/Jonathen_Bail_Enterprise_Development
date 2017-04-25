  var express = require('express');
  var controller = require('./user.controller');

  var router = express.Router();

  router.post('/login', controller.login); //Login user
  router.post('/register', controller.register); //Register a user


  module.exports = router;
