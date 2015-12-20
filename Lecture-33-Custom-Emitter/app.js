
var Emitter = require("./emitter");

var emitterObj = new Emitter();

// register listeneres
emitterObj.on("greet", function () {
    console.log("Greeted first time");
});

emitterObj.on("greet", function () {
    console.log("Greeted second time");
});

// trigger the event
emitterObj.emit("greet");