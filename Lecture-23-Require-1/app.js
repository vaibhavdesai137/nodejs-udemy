var greet1 = require('./greet');
greet1();

var greet2 = require('./greet');
greet2();

console.log("Greet 1: " + greet1);
console.log("Greet 2: " + greet2);

greet1 = null;

console.log("Greet 1: " + greet1);
console.log("Greet 2: " + greet2);

// Setting greet1 to null WILL not make greet2 null as well