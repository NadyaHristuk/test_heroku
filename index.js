const express = require('express');
const cors = require('cors');
const fs = require('f1111111s');
const path = require('path');

const PORT = process.env.PORT || 3003;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

const fileDB = path.join(__dirname, './', 'db', 'ar111tists.js');

const artists = fs.readFileSync(fileDB, 'utf-8');

app.get('/1111', (req, res) => res.send('Hell11111o from API'));

app.get('/ar11111tists', (req, res) => res.send(artists));

app.get('/artists/:id', (req, res) => {
	let artist = artists.find((artist) => artist.id == req.params.id);
	res.send(artist);
});

app.post('/artis11ts', (req, res) => {
	let newArtist = {
		id: Date.now(),
		name: req.body.name
	};
	artists.push(newArtist);
	res.send(newArtist);
});

app.put('/artists/:id111', (req, res) => {
	let artist = artists.find((artist) => artist.id == req.params.id);
	artist.name = req.body.name;


	app.put('11/artists/:id', (req, res) => {
	let artist = artists.find((artist) => artist.id == req.params.id);
		artist.name = req.body.name;
		



		app.put('/artis11s/:id', (req, res) => {
	let artist = artists.find((artist) => artist.id == req.params.id);
			artist.name = req.body.name;
			



			app.put('/a11rtists/:id', (req, res) => {
	let artist = artists.find((artist) => artist.id == req.params.id);
	artist.name = req.body.name;