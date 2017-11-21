var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var handlebars = require("express-handlebars");
var express = require("express");
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controller.js");

var port = process.env.PORT || 3000;

var app = express();


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", routes);




// Import routes and give the server access to them.


// app.use("/", routes);

app.listen(port, function() {
	console.log("Listening to port " + port);
});


/* 
step 1: page loads + get current burgers from db
step 2: render burgers in appropriate places

step 3: when user adds burger, submit form to route /api/burger
step 4: server inserts burger into db

step 5: repeat steps 1 and 2

step 6: when user devours, update target to "devoured" list
step 7: repeat steps 1 and 2 (function for this makes it better)
*/