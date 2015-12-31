
var express = require("express");
var app = express();

var port = process.env.PORT || 7777;

app.set("view engine", "ejs");
app.use("/assets", express.static(__dirname + "/public"));

app.get("/", function (req, res) {
    res.render("home");
}); 

app.listen(port);
