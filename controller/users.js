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

	router.post(
		'/login',
		passport.authenticate('local'),
		function(req, res) {
			res.json(req.user);
		}
		// function(req, res, next) {
		// 	// call passport authentication passing the "local" strategy name and a callback function
		// 	passport.authenticate('local', function(error, user, info) {
		// 		// this will execute in any case, even if a passport strategy will find an error
		// 		// log everything to console
		// 		console.log(error);
		// 		console.log(user);
		// 		console.log(info);

		// 		if (error) {
		// 			res.status(401).send(error);
		// 		} else if (!user) {
		// 			res.status(401).send(info);
		// 		} else {
		// 			next();
		// 		}

		// 		res.status(401).send(info);
		// 	})(req, res);
		// }
		// {
		// 	successRedirect: '/home',
		// 	failureRedirect: '/login',
		// 	failureFlash: true
		// }

		// function to call once successfully authenticated
		// function(req, res) {
		// 	res.status(200).send('logged in!');
		// }
	);

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
