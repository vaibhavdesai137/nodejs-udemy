
// size of 8 bytes = 64 bits
// raw binary data will be stored
// new object in V8 for ES6 and not node
var buf = new ArrayBuffer(8);

// interface to read/write the raw buffer
// since we are storing ints as 32 bits, we have space for 2 intgers in our buffer
var view = new Int32Array(buf);

// 32 bits for 5 and 32 bits for 10
view[0] = 5;
view[1] = 10;

// buf has no space for this
view[2] = 20;

console.log(view);

// SO starting ES6, JS can now deal with binary data since V8 can do it now and the objects/methods are exposed to the user
// Before this, Node was using its own implementation for buffers via V8
// We'll stick to the node way for the rest of this course
// but this is good to know that ES6 can deal with raw binary data

 