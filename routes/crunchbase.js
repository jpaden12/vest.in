//Script to add Organizations from the Crunchbase APi to MongoDB

var http = require('http');
var mongoose = require('mongoose');
var Company = require('../models/startup_model.js');


var options = {
	host: 'api.crunchbase.com',
	path: '/v/3/odm-organizations?user_key=afd761405c83ffecc35f1dcdc8fb245a'
};

http.request(options, function(res) {
	var str = '';
	res.on('data', function (chunk) {
    	str += chunk;
  	});
  	//the whole response has been recieved, so we just print it out here
  	res.on('end', function () {
  		var obj = JSON.parse(str);
  		// TODO Create Javascript object based on model. Write to database. 
    	console.log(JSON.stringify(obj));
  	});

	mongoose.connect('mongodb://admin-backend:hackgt2016@ds046549.mlab.com:46549/vest-in');
	//<user>:<pass>@mongo.onmodulus.net:27017/Mikha4ot

	var db = mongoose.connection();
	var company = new Company();

	//adding the JSON data to the database
	for(stuff in obj.items){
		company.name = properties.name;
		company.description = properties.short_description;
		company.domain = properties.domain; 
		
		company.insert();
		
	}
	
	
}).end();
