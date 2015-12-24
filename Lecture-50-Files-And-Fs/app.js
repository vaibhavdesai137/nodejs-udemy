
var fs = require("fs");

// sync approach to reading file
// ok to do this during server startup for reading config files
// don't do this during a client req
// it will block all other requests
var greet = fs.readFileSync(__dirname + "/greet.txt");
console.log("Greet file sync 1...");
console.log(greet);
console.log();

fs.readFile(__dirname + "/greet.txt", "utf8", function(err, data) {
    if (err) {
       console.log(err); 
    } else {
        console.log(data);
    }
});

greet = fs.readFileSync(__dirname + "/greet.txt", "utf-8");
console.log("Greet file sync 2...");
console.log(greet);
console.log();

