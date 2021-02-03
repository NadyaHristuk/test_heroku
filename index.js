const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3005;

const app = express();



app.get('/artists/:id', (req, res) => {
	let artist = artists.find((artist) => artist.id == req.params.id);
	res.send(artist);
});

app.post('/artists', (req, res) => {
	let newArtist = {
		id: Date.now(),
		name: req.body.name
	};
	artists.push(newArtist);
	res.send(newArtist);
});

app.put('/artists/:id', (req, res) => {
	let artist = artists.find((artist) => artist.id == req.params.id);
	artist.name = req.body.name;
	// res.sendStatus(200);
	res.send(artist);
});

app.delete('/artists/:id', (req, res) => {
	artists = artists.filter((artist) => {
		artist.id !== Number(req.params.id);
	});
	res.sendStatus(200);
});

app.listen(PORT, () => {
	console.log('API app started!');
});

//heroku cli
//heroku create
//
