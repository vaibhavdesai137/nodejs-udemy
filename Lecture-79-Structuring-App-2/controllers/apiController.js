
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function (app) {
    
    app.get("/api/person/:id", function (req, res) {
        // retrieve the person from the data source
        console.log("Fetched the person with id: " + req.params.id);
    });

    app.post("/api/person", urlencodedParser, function (req, res) {
        // create a new person in the data source
        // your ds will return a new id
        var id = 100;
        console.log("Created a new person with id: " + id);
    });

    app.delete("/api/person/:id", jsonParser, function (req, res) {
        // delete the person from the data source
        console.log("Deleted the person with id: " + req.params.id);
    });
}