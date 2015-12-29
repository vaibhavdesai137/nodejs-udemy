var http = require("http");
var fs = require("fs");

http.createServer(function (req, res) {
    
    var headers = {
        "Content-Type": "application/json"
    };
    res.writeHead(200, headers);
    
    var obj = {
        fname: "Vaibhav",
        lname: "Desai"
    };
    obj.foo = "bar";
    obj.bar = "foo";
    
    // Both below will send [object Object] back to the browser 
    // res.write(obj);
    // res.write(obj.toString());
    
    // Convert JS object to json string
    var jsonStr = JSON.stringify(obj); 
    res.write(jsonStr);
    res.end();
    
}).listen(7777, "127.0.0.1");
