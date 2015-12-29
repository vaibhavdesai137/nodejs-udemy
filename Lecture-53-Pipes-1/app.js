var fs = require("fs");

var readable = fs.createReadStream(__dirname + "/junk.txt");
var writable = fs.createWriteStream(__dirname + "/junkcopy.txt");

// Copy an entire file using pipes
readable.pipe(writable);