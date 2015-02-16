var Express = require('express');
var app = Express();
var	Mongoose = require('mongoose');
var MongoUri = 'mongodb://localhost:27017/song-tag';
var BodyParser = require('body-parser');

var port = 9099

app.use(BodyParser.json());

// Controllers
var ArtistCtrl = require('./lib/controllers/artistCtrl');

Mongoose.connect(MongoUri);
Mongoose.connection.once('open', function() {
	console.log('Connected to db ' + MongoUri);
});

//routes go here
app.post('/artist', ArtistCtrl.post);


app.listen(port);

