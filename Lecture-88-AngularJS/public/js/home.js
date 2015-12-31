
angular.module("TestApp", []);

angular.module("TestApp").controller("MainController", ctrlFunc);
    
function ctrlFunc() {
    
    this.message = "Vaibhav";
    
    this.people = [
        {name: "John Doe"},
        {name: "Jane Doe"},
        {name: "Foo Doe"}
    ]
}    