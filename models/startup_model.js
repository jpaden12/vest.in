/**
 * Created by Jamal on 9/24/2016.
 */
var node_restful = require('node-restful');
var mongoose     = node_restful.mongoose;
var bcrypt       = require('bcrypt-nodejs');

var startup_schema = new mongoose.Schema({
    Role: String,
    name:{ type: String},
    role: String,
    domain: { type: String},
    description: { type: String }

    /* Data points needed
    Rating (Created from API data and algorithm)
    Twitter, Facebook, Instagram
    Country Code
    Market Size
    Seed money and other funding recieved (pull from Angel.co and Crunchbase)
    Growth and Finances
    Online Buzz (Google Trends API or Web Scraper)
    Past Accelerators
    IPO?
     */
});

module.exports = node_restful.model('Startup', startup_schema);