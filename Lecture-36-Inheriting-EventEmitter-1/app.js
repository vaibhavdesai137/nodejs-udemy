
var EventEmitter = require("events").EventEmitter;
var util = require("util");

function Greeter() {
    this.greeting = "Hello";
}

// Set up the prototype chain
util.inherits(Greeter, EventEmitter);

Greeter.prototype.greet = function(data) {
    console.log(this.greeting + " " + data);
    this.emit("greet", data);
};

var greeterObj = new Greeter();
greeterObj.on("greet", function (data) {
   console.log("Someone greeted with data: " + data); 
});

greeterObj.greet("Vaibhav");