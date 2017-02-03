var express = require('express');
var utility = require('utility');
var superagent = require('superagent');
var cheerio = require('cheerio');
var eventproxy = require('eventproxy');
var urll = require('url');

var cnodeUrl = 'https://cnodejs.org/';

//var app = express();

// app.get('/', function(req, res, next){
// 	// res.send('hello world');
// 	// var q = req.query.q;
// 	// var md5Value = 'no query';
// 	// if(q != undefined)
// 	// 	var md5Value = utility.md5(q);
// 	// res.send(md5Value);
// 	superagent.get(cnodeUrl).end(function(err, sres){
// 			if(err){
// 				return next(err);
// 			}

// 			var items = [];
// 			var $ = cheerio.load(sres.text);
// 			$('.pull-right').each(function(idx, element){
// 				var $element = $(element);
// 				var href = url.resolve('https://cnodejs.org/', $element.attr('href'));
// 				items.push(href);
// 				// var $element = $(element);
// 				// items.push({
// 				// 	title: $element.attr('title'),
// 				// 	href: $element.attr('href')
// 				// });
// 			});

// 			res.send(items);
// 		});
// });

// superagent.get(cnodeUrl).end(function(err, res){
// 			if(err){
// 				return console.error(err);
// 			}

// 			var items = [];
// 			var $ = cheerio.load(res.text);
// 			$('.pull-right').each(function(idx, element){
// 				var $element = $(element);
// 				var hreff = urll.resolve(cnodeUrl, $element.attr('href'));
// 				items.push(hreff);
// 				// var $element = $(element);
// 				// items.push({
// 				// 	title: $element.attr('title'),
// 				// 	href: $element.attr('href')
// 				// });
// 			});

// 			console.log(items);
// 		});

// app. listen(8000, function(){
// 	console.log("app is listening at port 8000");
// });
// 
// lesson6 fibonacci
	var fibonacci = function(n) {
		if(typeof n != 'number'){
			throw new Error('n should be Number');
		}

		if(n < 0){
			throw new Error('n should >=0 ');
		}

		if(n > 10) {
			throw new Error('n should <=10');
		}

		if(n === 0){
			return 0;
		}

		if(n === 1){
			return 1;
		}

		return fibonacci(n -1) + fibonacci(n - 2);
	};

	exports.fibonacci = fibonacci;

	if(require.index === module){
		var n = Number(process.argv[2]);
		console.log('fibonacci(' + n + ') is', fibonacci(n));
	}

