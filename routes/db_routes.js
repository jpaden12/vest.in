var express = require('express');
var router = express.Router();

//Models
var Startup = require('../models/startup_model.js');
var Investor = require('../models/invetstor_model.js');

//Adding the routes
Startup.methods(['get', 'put', 'post', 'delete']);
Investor.methods(['get', 'put', 'post', 'delete']); 


module.exports = router;
