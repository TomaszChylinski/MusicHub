var express = require('express');

var db = require('../models');

var router = express.Router();

module.exports = function(router) {
	router.get('/api/news', (req, res) => {
		db.news
			.find()
			.then(data => {
				res.json(data);
			})
			.catch(err => {
				res.json({ error: err });
			});
	});

	router.post('/api/news', (req, res) => {
		db.news
			.create(req.body)
			.then(response => {
				res.json({ successful: response });
			})
			.catch(err => {
				res.json({ error: err });
			});
	});

	router.delete('/api/news/:id', (req, res) => {
		db.news
			.findByIdAndDelete(req.params.id)
			.then(response => {
				res.json({ successful: response });
			})
			.catch(err => {
				res.json({ error: err });
			});
	});
};
