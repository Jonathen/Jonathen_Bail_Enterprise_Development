var express = require('express');
var controller = require('./module.controller');


  var router = express.Router();

router.get('/getModules', controller.getModules); //Get modules for a user
router.post('/addModule', controller.addModule) //Add a module


module.exports = router;
