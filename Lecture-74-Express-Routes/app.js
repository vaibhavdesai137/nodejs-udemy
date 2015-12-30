
var express = require("express");
var app = express();
var port = process.env.PORT || 7777;

app.get("/person/:id", function (req, res) {
    var id = req.params.id;
    res.send("<html><body>Hello " + id + "</body></html>");
});

app.listen(port);
