const express = require('express');
const passport = require('passport');
const db = require('../models/');

const { forwardAuthenticated } = require('../config/auth');

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
				res.redirect('/login');
			})
			.catch(err => {
				res.json({ error: err });
			});
	});

	// Login Page
	router.get('/login', forwardAuthenticated, (req, res) => res.render('login'));

	// Register Page
	router.get('/register', forwardAuthenticated, (req, res) =>
		res.render('register')
	);

	// router.post('/api/login', passport.authenticate('local'), function(req, res) {
	// 	res.json(req.user);
	// });

	router.post('/api/login', passport.authenticate('local'), function(req, res) {
		console.log(req.user);

		res.json(req.user);
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
