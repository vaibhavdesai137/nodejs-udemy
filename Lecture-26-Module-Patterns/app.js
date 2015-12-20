
// Style 1 of module.exports
var greet1 = require('./greet1');
greet1();

// Style 2 of module.exports
var greet2a = require('./greet2');
greet2a.greet();
var greet2b = require('./greet2').greet;
greet2b();

// Style 3 of module.exports
var greet3a = require('./greet3');
greet3a.greet();
greet3a.greeting = "Some foo bar";

// Require on the same file will NOT load another file
// Node maintains a cache of the modules it has loaded
// So the require below will return the same module that greet3a is pointing to
// As a result, greet3b will see the new greeting

// This means, module.exports in any js file will be executed only once
// Any further require on same module will get the cached module
var greet3b = require('./greet3');
greet3b.greet();

// Style 4 of module.exports
// To avoid the issue of caching, simply return the Fn without the "new"
// Let the clients create an obj from that function
// You can then n no. of new objects without each jumping on one another 
var greet4a = require('./greet4');
var newGreet4a = new greet4a();
newGreet4a.greet();
newGreet4a.greeting  = "Howdy";
newGreet4a.greet();

var greet4b = require('./greet4');
var newGreet4b = new greet4b();
newGreet4b.greet();
newGreet4b.greeting  = "Wassup";
newGreet4b.greet();

// Style 5 of module.exports
// The Revealing Module Pattern 
// Beauty is you cannot change the value of "greeting" in greet5.js from here
// This is becoz the var "greeting" was not exposed in module.exports
var greet5 = require('./greet5');
console.log(greet5.greeting);
greet5();