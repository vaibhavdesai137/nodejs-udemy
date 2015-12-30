
var express = require("express");
var mongoose = require('mongoose');
var viewController = require("./controllers/viewController");
var apiController = require("./controllers/apiController");

var app = express();
var port = process.env.PORT || 7777;

// connect to mongodb
var mongoUri = "mongodb://mongo:mongo@ds037175.mongolab.com:37175/node-mongo-db";
mongoose.connect(mongoUri);

// create schema
var Schema = mongoose.Schema;
var personSchema = new Schema({
    fname: String,
    lname: String,
    address: String
});
var Person = mongoose.model('Person', personSchema);

// create objects to persist
var john = Person({
    fname: "John",
    lname: "Doe",
    address: "111 ABC St.", 
}); 
var jane = Person({
    fname: "Jane",
    lname: "Doe",
    address: "111 ABC St.", 
});
 
// save to db
john.save(function (err) {
    if (err) throw err;
    console.log("Person saved");   
});
jane.save(function (err) {
    if (err) throw err;
    console.log("Person saved");   
});
 
// see if we get our users back form mongo
app.use("/", function (req, res, next) {
    Person.find({}, function (err, persons) {
       
       if (err) throw err;
       
       console.log(persons); 
    });
    
    next();
}); 
app.use("/assets", express.static(__dirname + "/public"));
app.set("view engine", "ejs");

// quick way to test mysql in middleware.
// correct way is to get data in routes and then 
// either send it to views or back to browser for ajax calls. 
app.use("/", function (req, res, next) {
   
    
    next();
    
});

// add routes to app
viewController(app);
apiController(app);

app.listen(port);
