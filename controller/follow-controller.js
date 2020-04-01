var express = require('express');

var db = require('../models');

module.exports = function(router) {
	router.post('/api/users/follow/:id', (req, res) => {
		db.Follow.create({
			user: req.params.id,
			user_follows: req.body.user_follows
		})
			.then(response => {
				res.json({ successful: response });
			})
			.catch(err => {
				res.json({ error: err });
			});
	});

	router.get('/api/users/follow/:id', (req, res) => {
		db.Follow.find({ user: req.params.id })
			.populate('user')
			.populate('user_follows')
			.then(data => {
				res.json(data);
			});
	});

	router.delete('/api/users/follow/:id', (req, res) => {
		db.Follow.findOneAndDelete({
			user: req.params.id,
			user_follows: req.body.user_follows
		}).then(data => {
			res.json(data);
		});
	});
};
