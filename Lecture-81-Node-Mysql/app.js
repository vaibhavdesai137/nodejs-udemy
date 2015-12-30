
var express = require("express");
var mysql = require("mysql");
var viewController = require("./controllers/viewController");
var apiController = require("./controllers/apiController");

var app = express();
var port = process.env.PORT || 7777;

app.use("/assets", express.static(__dirname + "/public"));
app.set("view engine", "ejs");

// quick way to test mysql in middleware.
// correct way is to get data in routes and then 
// either send it to views or back to browser for ajax calls. 
app.use("/", function (req, res, next) {
   
    var connection = mysql.createConnection({
        host     : '127.0.0.1',
        user     : 'root',
        password : '',
        database : 'node-mysql-db'
    }); 
    
    var sql = " SELECT People.ID, Firstname, Lastname, Address " +  
              " FROM People INNER JOIN PersonAddresses " +
              " ON People.ID = PersonAddresses.PersonID " +
              " INNER JOIN Addresses ON PersonAddresses.AddressID = Addresses.ID";
    connection.connect();
    connection.query(sql, function(err, rows, fields) {
        if (err) throw err;
        //console.log('Fname is: ', rows);
        rows.forEach(function (row) {
            console.log('FName: ' + row.Firstname + ', LName: ' + row.Lastname);    
        });
        
    });
    
    next();
    
});

// add routes to app
viewController(app);
apiController(app);

app.listen(port);
