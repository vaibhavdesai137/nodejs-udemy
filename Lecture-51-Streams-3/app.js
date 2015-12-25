var fs = require("fs");

var readable = fs.createReadStream(__dirname + "/junk.txt", {
    encoding: "utf8",
    highWaterMark: 16 * 1024 
});

var writable = fs.createWriteStream(__dirname + "/junkcopy.txt");

// Copy an entire file in chunks
// Sweet!!!
var i = 0;
readable.on("data", function(chunk) {
    i++;
    console.log("Read chunk #: " + i +  ", chunk size: " + chunk.length);
    writable.write(chunk);    
    console.log("Wrote chunk #: " + i +  ", chunk size: " + chunk.length);
    console.log();
});