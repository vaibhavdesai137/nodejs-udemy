
var greet1 = require('./greet1');
var greet2 = require('./greet2');
var greet3 = require('./greet3');

// Notes:
// Both export and module.exports point to same object
// Changes made to one will reflect in other
// Only gotcha is when you change on of them using the "=" directly
// In that case, node will create a new object and both won't be the same anymore

// TO AVOID CONFUSION, STICK to USING MODULE.EXPORTS EVERYWHERE
// ABSOLUTELY NO REASON TO USE EXPORTS DIRECTLY 
