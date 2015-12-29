var http = require("http");
var fs = require("fs");

http.createServer(function (req, res) {
    
    var headers = {
        "Content-Type": "text/html"
    };
    
    // specify encoding since we are going to manipulate the string
    var body = fs.readFileSync(__dirname + "/index.html", "utf8");
    var message = "Hello World";
    
    // kinda templating :D
    body = body.replace("{Message}", message);
    
    res.writeHead(200, headers);
    res.write(body);
    res.end();
    
}).listen(7777, "127.0.0.1");
