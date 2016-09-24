/**
 * Created by Jamal on 9/24/2016.
 */
var node_restful = require('node-restful');
var mongoose     = node_restful.mongoose;
var bcrypt       = require('bcrypt-nodejs');

var startup_schema = new mongoose.Schema({
    name:{ type: String, required: true},
    domain: { type: String, required: false},
    description: { type: String, required: false},
    
});