var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var handlebars = require("express-handlebars");

var port = process.env.PORT || 3000;

app.listen(port, function() {}


/* 
step 1: page loads + get current burgers from db
step 2: render burgers in appropriate places

step 3: when user adds burger, submit form to route /api/burger
step 4: server inserts burger into db

step 5: repeat steps 1 and 2

step 6: when user devours, update target to "devoured" list
step 7: repeat steps 1 and 2 (function for this makes it better)
*/