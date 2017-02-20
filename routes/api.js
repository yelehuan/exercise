exports.render = function(view) {
	return function(req, res) {
		res.render(view);
	};
}

exports.sendFile = function(view) {
	return function(req, res){
		res.sendFile(view);
	};
}

exports.redirect = function(url) {
	return function(req, res) {
		res.redirect(url);
	};
}

exports.send = function(content) {
	return function(req, res) {
		res.send(content);
	};
}