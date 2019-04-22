//Dependencies
var express    = require("express");
var bodyParser = require("body-parser");
var path       = require("path");

//variable instance of express
var app        = express();

//Let Heroku set the port or use a default
var port = process.env.PORT || 3000;

//Let app know json and text will come through
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

//For serving of static html
app.use(express.static("app/public"));

//API and HTML routes
require("./app/routing/api-routes")(app);
require("./app/routing/html-routes")(app);

app.listen(port, () => console.log("Listening on port: " + port));