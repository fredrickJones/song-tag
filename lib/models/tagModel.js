'use strict'
var Mongoose = require('mongoose');

var Schema = Mongoose.Schema;

var tagSchema = new Schema({
	_id: {type: String, required: true, unique: true}
});

module.exports = Mongoose.model('Tag', tagSchema);