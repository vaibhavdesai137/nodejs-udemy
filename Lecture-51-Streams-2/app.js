var fs = require("fs");

// Same as prev example but we are specifying the buffer size as well
// 16 KB in this case
var readable = fs.createReadStream(__dirname + "/junk.txt", {
    encoding: "utf8",
    highWaterMark: 16 * 1024 
});

var i = 0;
readable.on("data", function(chunk) {
    console.log("Chunk #: " + ++i +  ", chunk size: " + chunk.length); 
    //console.log(chunk);
});