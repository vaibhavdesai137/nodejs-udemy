
console.log("PROTOTYPING USING Object.create(...)");
var personObj = {
    fname: "",
    lname: "",
    greet: function () {
        console.log(this.fname + " " + this.lname);
    }
};

var john = Object.create(personObj);
john.fname = "John";
john.lname = "Doe";
john.greet();

var jane = Object.create(personObj);
jane.fname = "Jane";
jane.lname = "Doe";
jane.greet();

console.log("");
console.log("PROTOTYPING USING function constructor(...)");
function personFn(fname, lname) {
    this.fname = fname;
    this.lname = lname;    
}

personFn.prototype.greet = function () {
    console.log(this.fname + " " + this.lname);
}

var johnFnObj = new personFn("John", "Doe");
var janeFnObj = new personFn("Jane", "Doe");
johnFnObj.greet();
janeFnObj.greet();