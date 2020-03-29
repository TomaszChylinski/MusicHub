var express = require('express');

var db = require('../models/');

 var router = express.Router();

module.exports = function(router) {
	router.get('/api/discover', (req, res) => {
		db.discover
			.find()
			.then(data => {
				res.json(data);
			})
			.catch(err => {
				res.json({ error: err });
			});
	});

	router.post('/api/discover', (req, res) => {
		db.discover
			.create(req.body)
			.then(response => {
				res.json({ successful: response });
			})
			.catch(err => {
				res.json({ error: err });
			});
	});

	router.delete('/api/discover/:id', (req, res) => {
		db.discover
			.findByIdAndDelete(req.params.id)
			.then(response => {
				res.json({ successful: response });
			})
			.catch(err => {
				res.json({ error: err });
			});
	});
};