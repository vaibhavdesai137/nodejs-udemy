
var express = require("express");
var app = express();
var cookieParser = require("cookie-parser");

var port = process.env.PORT || 7777;

// use cookies
app.use(cookieParser());

// use middleware
app.use("/assets", express.static(__dirname + "/public"));

// Custom middleware.
// Log all requests.
// No matter what url is called, this will be invoked since we specified
// the middleware at the "/" level. 
// You can use any path that you like.
// Also, next() means give the request to the next middleware
// Without next(), request will be aborted and client will keep waiting for a response before timing out.
app.use("/", function (req, res, next) {
    console.log("Got a request: " + req.url);
    console.log("Cookies: ", req.cookies);
    console.log();
    next();
})

app.get("/", function (req, res) {
    var html;
    html += "<html><head>";
    html += "<link href='/assets/style.css' type=text/css rel=stylesheet />";
    html += "</head><body>Hello!!!</body></html>"; 
    res.send(html);
});

app.listen(port);

