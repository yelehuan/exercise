var api = require('./api');
var router = require('express').Router();
var path = require('path');

router.get('/test', api.sendFile(path.join(__dirname, '../dist', 'index.html')));

router.get('/hello/:who', function(req, res){
	res.end(req.params.who);
	console.log(req.ip + ' ');
});

router.get('/baidu', api.redirect('http://www.baidu.com'));

router.get('/api', api.send({name: 'yelehuan', age: 24}));

module.exports = router;
