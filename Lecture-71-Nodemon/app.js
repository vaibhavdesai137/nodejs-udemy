
// After globally installing nodemon, start this app.js with nodemon
// "nodemon app.js""
// nodemon watches all the files in this app using fs
// when any of the file changes, nodemon restarts the app
// Saves time as a developer and gives ease since we don't have to stop and start node everytime
// Sweet

var http = require("http");
var fs = require("fs");

http.createServer(function (req, res) {
    
    var headers = {};
    
    if (req.url === "/") {
        headers["Content-Type"] = "text/plain";
        res.writeHead(200, headers);
        res.write("Index page");
        res.end();
    } else if (req.url === "/json") {
        headers["Content-Type"] = "application/json";
        res.writeHead(200, headers);
        res.write(JSON.stringify({foo: "bar"}));
        res.end();
    } else {
        res.writeHead(404);
        res.end();
    }
    
}).listen(7777, "127.0.0.1");
