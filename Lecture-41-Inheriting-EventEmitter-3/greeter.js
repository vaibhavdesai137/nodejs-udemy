"use strict";

var EventEmitter = require("events").EventEmitter;

class Greeter extends EventEmitter {
    
    constructor() {
        super();
        this.greeting = "Hello";
    };
    
    greet(data) {
        console.log(` ${this.greeting} ${data}`);
        this.emit("greet", data);
    };
};

module.exports = Greeter;