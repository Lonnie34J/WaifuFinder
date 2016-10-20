//dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//routing

require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);


//Listen for port
app.listen(port, function () {
	console.log('App listening on PORT ' + port);
});