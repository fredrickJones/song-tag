'use strict'
var Mongoose = require('mongoose');

var Schema = Mongoose.Schema;

var songSchema = new Schema({
	name: {type: String, required: true},
	album: {type: String, required: true},
	genres: String,
	releasedOn: {type: Date},
	isExplicit: {type: Boolean},
	artist: {type: Schema.Types.ObjectId, ref: 'Artist'},
	tag: [{type: String, ref: 'Tag'}]
});

module.exports = Mongoose.model('Song', songSchema);