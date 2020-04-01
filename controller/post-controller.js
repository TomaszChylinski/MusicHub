var express = require('express');

var db = require('../models');

var router = express.Router();

module.exports = function(router) {
	router.get('/api/posts', (req, res) => {
		db.Posts.find()
			.then(data => {
				res.json(data);
			})
			.catch(err => {
				res.json({ error: err });
			});
	});

	// get all posts where author is followed by user
	router.get('/api/feed/:id', (req, res) => {
		db.Follow.find({ user: req.params.id })
			.then(data => {
				let idList = [];
				for (let i = 0; i < data.length; i++) {
					idList.push(data[i].user_follows);
				}
				db.Posts.find({ author: idList }).then(response => {
					res.json({ succesful: response });
				});
			})
			.catch(err => {
				res.json({ error: err });
			});
	});

	router.post('/api/posts', (req, res) => {
		db.Posts.create(req.body)
			.then(response => {
				res.json({ successful: response });
			})
			.catch(err => {
				res.json({ error: err });
			});
	});

	router.delete('/api/posts/:id', (req, res) => {
		db.Posts.findByIdAndDelete(req.params.id)
			.then(response => {
				res.json({ successful: response });
			})
			.catch(err => {
				res.json({ error: err });
			});
	});
};
