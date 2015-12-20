
var EventEmitter = require("events").EventEmitter,
    eventNames = require("./eventsConfig").eventNames;

var emitterObj = new EventEmitter();

// register listeners
emitterObj.on(eventNames.GREET, function () {
    console.log("Greeted first time");
});

emitterObj.on(eventNames.GREET, function () {
    console.log("Greeted second time");
});

// trigger the event
emitterObj.emit(eventNames.GREET);