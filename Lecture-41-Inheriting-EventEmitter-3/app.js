var Greeter = require("./greeter");

var greeterObj = new Greeter();
greeterObj.on("greet", function (data) {
   console.log("Someone greeted with data: " + data); 
});

greeterObj.greet("Vaibhav");