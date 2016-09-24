/**
 * Created by Jamal on 9/24/2016.
 */
var node_restful = require('node-restful');
var mongoose     = node_restful.mongoose;
var bcrypt       = require('bcrypt-nodejs');

var investor_model = new mongoose.Schema({
    First_Name: { type: String, required: true},
    Last_Name: { type: String, required: true},
    Title: String,
    Organization_Permalink: String,
    City: String,
    Region: String,
    Country_Code: String

}); 

module.exports = node_restful.model('Investor', investor_model); 