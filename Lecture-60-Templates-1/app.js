var http = require("http");
var fs = require("fs");

http.createServer(function (req, res) {
    
    var headers = {
        "Content-Type": "text/html"
    };
    var body = fs.readFileSync(__dirname + "/index.html");
    
    res.writeHead(200, headers);
    res.write(body);
    res.end();
    
}).listen(7777, "127.0.0.1");
