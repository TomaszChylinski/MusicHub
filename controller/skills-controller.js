var express = require('express');

var db = require('../models');

module.exports = function(router) {
	router.post('/api/skills', (req, res) => {
		db.Skills.create(req.body)
			.then(response => {
				res.json({ successful: response });
			})
			.catch(err => {
				res.json({ error: err });
			});
	});
};
