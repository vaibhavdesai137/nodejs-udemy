
var util = require("util");

function Person() {
    this.fname = "Foo";
    this.lname = "Foo";
}

Person.prototype.greet = function () {
    console.log("Hello " + this.fname + " " + this.lname);
}

function Student () {
    Person.call(this);
    this.id = 100;
}

// Set up the prototype chain
util.inherits(Student, Person);

var s = new Student();
s.greet();
