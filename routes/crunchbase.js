var http = require('http');

var options = {
	host: 'api.crunchbase.com',
	path: '/v/3/odm-organizations?user_key=afd761405c83ffecc35f1dcdc8fb245a',
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
}).end();
