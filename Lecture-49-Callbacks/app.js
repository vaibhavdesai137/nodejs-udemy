
 function greet(callback) {
     console.log("Hi there");
     callback({"name": "James Bond"});
 }
 
 // call greet with a callback
 greet(function (data) {
    console.log("I am a callback function 1: " + data.name); 
 });
 
 greet(function (data) {
    console.log("I am a callback function 2: " + data.name); 
 });