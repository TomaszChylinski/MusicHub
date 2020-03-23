var express = require('express');

var db = require('../models/');

// var router = express.Router();

module.exports = function(router) {
	router.get('/api/users', (req, res) => {
		db.users
			.find()
			.then(data => {
				res.json(data);
			})
			.catch(err => {
				res.json({ error: err });
			});
	});

	router.post('/api/users', (req, res) => {
		db.users
			.create(req.body)
			.then(response => {
				res.json({ successful: response });
			})
			.catch(err => {
				res.json({ error: err });
			});
	});

	router.delete('/api/users/:id', (req, res) => {
		db.users
			.findByIdAndDelete(req.params.id)
			.then(response => {
				res.json({ successful: response });
			})
			.catch(err => {
				res.json({ error: err });
			});
	});
};
