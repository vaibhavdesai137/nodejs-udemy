var fs = require("fs");
var zlib = require("zlib");

var readable = fs.createReadStream(__dirname + "/junk.txt");
var writable = fs.createWriteStream(__dirname + "/junkcopy.txt");

// gzip is a duplex stream
var gzip = zlib.createGzip();
var compressed = fs.createWriteStream(__dirname + "/junkcopy.txt.gz");

// Copy an entire file using pipes
readable.pipe(writable);

// Create a compressed version of the file
// Since gzip is duplex stream, 
// it can read the stream given to it, 
// apply compression on it, 
// return the compressed stream,
// then we give that compressed stream to be written to another file
readable.pipe(gzip).pipe(compressed);


// Remember, streams can be anything
// data being streamed from the internet
// data from a db
// data from any source technically


// Always find ways of using streams
// node loves streams since u deal with only a chunk at a time
// and it uses and the event mechanism internally which is what node is known for 


// ALWAYS TEND TOWARDS ASYNC FILES AND STREAMS
// USING SYNC APPROACH SHOULD BE A CONSCIOUS DECISION