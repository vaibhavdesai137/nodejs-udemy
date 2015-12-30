
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var port = process.env.PORT || 7777;

// application/json parser
var jsonParser = bodyParser.json();

// application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({extended: false});

// middlewares
app.use("/assets", express.static(__dirname + "/public"));

// set templating engine as ejs
app.set("view engine", "ejs");

// REST STYLE

app.get("/api/person/:id", function (req, res) {
    // retrieve the person from the data source
    console.log("Fetched the person with id: " + req.params.id);
});

app.post("/api/person", urlencodedParser, function (req, res) {
    // create a new person in the data source
    // your ds will return a new id
    var id = 100;
    console.log("Created a new person with id: " + id);
});

app.delete("/api/person/:id", jsonParser, function (req, res) {
    // delete the person from the data source
    console.log("Deleted the person with id: " + req.params.id);
});

app.listen(port);

