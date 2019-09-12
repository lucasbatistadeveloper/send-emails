var express = require('express');
var bodyParser = require ('body-parser');

var app = express ();

app.set('view engine', 'ejs');
app.set('views', '');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); 
module.exports = app;