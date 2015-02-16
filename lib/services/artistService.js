'use strict';
var ArtistModel = require('./../models/artistModel');
var	q = require('q');

module.exports.save = function(artist) {
	var deffered = q.defer();
	var object = new ArtistModel();
	object.songTest.push({name: 'song', album: 'album'});
	ArtistModel(artist).save(function(err, res) {
		if (!err) {
			deffered.resolve(res);
		} else {
			deffered.reject(err);
		}
	});
	return deffered.promise;
};