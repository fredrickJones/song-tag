'use strict';
var ArtistService = require('./../services/artistService');

module.exports.post = function(req, res) {
	ArtistService.save(req.body).then(function(resp) {
		res.status(200).json(resp);
	}, function(err) {
		res.status(400).json(err);
	});
};