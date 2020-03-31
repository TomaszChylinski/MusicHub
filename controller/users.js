const passport = require('passport');
const db = require('../models/');

module.exports = function(router) {
	router.get('/api/users', (req, res) => {
		db.Users.find()
			.then(data => {
				res.json(data);
			})
			.catch(err => {
				res.json({ error: err });
			});
	});

	router.post('/api/users', (req, res) => {
		db.Users.create(req.body)
			.then(response => {
				// redirect to login or home or whatever....
			})
			.catch(err => {
				res.json({ error: err });
			});
	});

	router.post('/api/login', passport.authenticate('local'), function(req, res) {
		console.log(req.user);

		// res.json(req.user);
		res.redirect('/home');
	});

	router.delete('/api/users/:id', (req, res) => {
		db.Users.findByIdAndDelete(req.params.id)
			.then(response => {
				res.json({ successful: response });
			})
			.catch(err => {
				res.json({ error: err });
			});
	});
};
