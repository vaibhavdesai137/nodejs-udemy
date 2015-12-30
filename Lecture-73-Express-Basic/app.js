
// look at express.js inside node_modules/lib/expres.js
// it is returning a fn called "createApplication"
// we are storing that in "express" var
var express = require("express");

// remember "express" is a fn
// we can invoke it
// look at the src code and you'll see the fn sets up various properties and methods
var app = express();

// check if env variable exists else set our own port
// used for setting different ports on different environments
var port = process.env.PORT || 7777;

// setup routes
// figures out the content-type automatically
app.get("/", function (req, res) {
    res.send("<html><body>Hello there</body></html>");
});

app.get("/json", function (req, res) {
    res.json({foo: "bar"});
});

app.post("/", function (req, res) {
    
});

app.delete("/", function (req, res) {
    
});

// also, the fn is creating http server internally
// so we can invoke the listen(...) method on it 
app.listen(port);

