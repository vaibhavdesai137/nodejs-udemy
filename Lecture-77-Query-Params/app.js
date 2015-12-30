
var express = require("express");
var app = express();

var port = process.env.PORT || 7777;

// middlewares
app.use("/assets", express.static(__dirname + "/public"));

// set templating engine as ejs
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("index");
});

app.get("/person", function (req, res) {
    res.render("person", {name: "Vaibhav", qParamFoo: req.query.foo });
});

app.listen(port);

