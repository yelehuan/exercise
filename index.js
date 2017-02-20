var express = require('express');
var utility = require('utility');
var superagent = require('superagent');
var cheerio = require('cheerio');
var eventproxy = require('eventproxy');
var urll = require('url');

var app = express();


app.get('/test', function(req, res, next){
	res.sendfile(__dirname + '/dist/index.html');
	console.log('hello');
});

app.listen(3000, function(){
	console.log('connect ok');
});
