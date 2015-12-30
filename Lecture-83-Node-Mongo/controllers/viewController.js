
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function (app) {
    
    app.get("/", function (req, res) {
       res.render("index"); 
    });
    
}