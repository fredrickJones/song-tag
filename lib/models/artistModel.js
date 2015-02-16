'use strict'
var Mongoose = require('mongoose');

var Schema = Mongoose.Schema;

var artistSchema = new Schema({
	name: {type: String, index: true, required: true},
	bio: String,
	genres: [{type: String, unique: true}]
});

module.exports = Mongoose.model('Artist', artistSchema);