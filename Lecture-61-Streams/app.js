var http = require("http");
var fs = require("fs");

http.createServer(function (req, res) {
    
    var headers = {
        "Content-Type": "text/html"
    };
    res.writeHead(200, headers);
    
    // Work on chunks of data than reading entire one shot
    // Also, tricky to do templating here
    // We will need our own stream implementation since starting and 
    // ending tags for the template may be in separate streams
    // That is why we'll use templating engines later
    var body = fs.createReadStream(__dirname + "/index.html");
    body.pipe(res);
    
}).listen(7777, "127.0.0.1");
