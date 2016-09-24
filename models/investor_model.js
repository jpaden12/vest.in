/**
 * Created by Jamal on 9/24/2016.
 */

//Based on CrunchBase People Model
var node_restful = require('node-restful');
var mongoose     = node_restful.mongoose;
var bcrypt       = require('bcrypt-nodejs');

var investor_model = new mongoose.Schema({
    type: "Investor",
    First_Name: { type: String, required: true},
    Last_Name: { type: String, required: true},
    Gender: String,
    Image: Url, 
    
    Title: String,
    Organization_Permalink: String,
    Facebook: Url, 
    Twitter: Url, 
    Linkedin: Url, //pull connections from Linkedin API
    
    City: String,
    Region: String,
    Country_Code: String,
    
    Wikipeida: Url,
    Quora: Url, 
    Youtube: Url, 
    Blog: Url, 
    Amazon: Url, 
    Angellist: Url

}); 

module.exports = node_restful.model('Investor', investor_model); 