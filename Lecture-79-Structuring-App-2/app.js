
var express = require("express");
var viewController = require("./controllers/viewController");
var apiController = require("./controllers/apiController");

var app = express();
var port = process.env.PORT || 7777;

app.use("/assets", express.static(__dirname + "/public"));
app.set("view engine", "ejs");

// add routes to app
viewController(app);
apiController(app);

app.listen(port);
