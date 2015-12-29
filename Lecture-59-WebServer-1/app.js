var http = require("http");

// Create a server object first
// Pass it a callback that will be executed everytime a requets is received
// Bind our process to 7777 port

// When someone makes a request, it goes to the OS first
// OS will send it to node process since we are running on 7777
// Node then gives it to "http_parser" internally that gets gets all the http related stuff nicely packed in "req" object
// It also created a "res" object that is left for us to fill out 
// Be default, node will add a bunch of headers to our response
http.createServer(function (req, res) {
    var headers = {
        "Content-Type": "text/plain"
    };
    var body = "Hello World";
    
    res.writeHead(200, headers);
    res.end(body);
    
}).listen(7777, "127.0.0.1");
