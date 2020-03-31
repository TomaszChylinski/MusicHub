var express = require('express');

var db = require('../models/');

 var router = express.Router();

module.exports = function(router) {
	router.get('/api/status', (req, res) => {
		db.status
			.find()
			.then(data => {
				res.json(data);
			})
			.catch(err => {
				res.json({ error: err });
			});
	});

	router.post('/api/status', (req, res) => {
		db.status
			.create(req.body)
			.then(response => {
				res.json({ successful: response });
			})
			.catch(err => {
				res.json({ error: err });
			});
	});

	router.delete('/api/status/:id', (req, res) => {
		db.status
			.findByIdAndDelete(req.params.id)
			.then(response => {
				res.json({ successful: response });
			})
			.catch(err => {
				res.json({ error: err });
			});
	});
};