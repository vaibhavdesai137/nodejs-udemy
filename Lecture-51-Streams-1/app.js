var fs = require("fs");

// createReadStream returns a ReadStream obj
var readable = fs.createReadStream(__dirname + "/junk.txt", {
    encoding: "utf8" 
});

// Count how many chunks needed to read full file
var i = 0;

// ReadStream inherits from Stream.Readable
// Stream.Readable inherits from Stream
// Stream inherits from EventEmitter
// Thus, we can listen to events
// on(data) is the event emitted by ReadStream everytime it reads data from the stream

// No. of chunks needed will depend on size of the buffer on the OS
// Becase we encoded to "utf8", chunk is now a string and hence you can call "length" on it
readable.on("data", function(chunk) {
    console.log("Chunk #: " + ++i +  ", chunk size: " + chunk.length); 
    //console.log(chunk);
});