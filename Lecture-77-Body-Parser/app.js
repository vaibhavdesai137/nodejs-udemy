
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

app.get("/", function (req, res) {
    res.render("index");
});

app.post("/personUrlEncodedData", urlencodedParser, function (req, res) {
    res.render("person", {uname: req.body.uname, pwd: req.body.pwd});
});

app.post("/personJsonData", jsonParser, function (req, res) {
    console.log(req.body.uname);
    console.log(req.body.pwd);
});

app.listen(port);

