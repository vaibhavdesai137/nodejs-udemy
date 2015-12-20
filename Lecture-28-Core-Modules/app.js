
// Do not use "./". This means CWD
// Without that, node will understand you are trying to load a core module
// and thus look for util.js in its own core lib folder
var util = require('util');

var name = "Vaibhav";
var greeting = util.format("Hello %s", name);
util.log(greeting);

// NOTE:
// AVOID USING THE SAME NAME AS AN INBUILT CORE MODULE 
// NOTHING WRONG WITH IT, JUST ADDS UNNECESSARY CONFUSION
