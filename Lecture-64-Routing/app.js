var http = require("http");
var fs = require("fs");

http.createServer(function (req, res) {
    
    var headers = {};
    
    if (req.url === "/") {
        headers["Content-Type"] = "text/plain";
        res.writeHead(200, headers);
        res.write("Index page");
        res.end();
    } else if (req.url === "/api") {
        headers["Content-Type"] = "application/json";
        res.writeHead(200, headers);
        res.write(JSON.stringify({foo: "bar"}));
        res.end();
    } else {
        res.writeHead(404);
        res.end();
    }
    
}).listen(7777, "127.0.0.1");
