var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

var db = require('../models');

const validPassword = function(password, user) {
	return bcrypt.compareSync(password, user.password);
};

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(
	new LocalStrategy(
		// Our user will sign in using an email, rather than a "username"
		{
			usernameField: 'email'
		},
		function(email, password, done) {
			db.User.findOne({ email: email }, function(err, dbUser) {
				// If there's no user with the given email
				if (!dbUser) {
					return done(null, false, {
						message: 'Incorrect email.'
					});
				}
				// If there is a user with the given email, but the password the user gives us is incorrect
				else if (!validPassword(password, dbUser)) {
					return done(null, false, {
						message: 'Incorrect password.'
					});
				}
				// If none of the above, return the user
				return done(err, dbUser);
			});
		}
	)
);

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function(user, cb) {
	cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
	cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;

// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
// const bcrypt = require('bcryptjs');

// // Load User model
// const db = require('../models/Users');

// module.exports = function(passport) {
// 	passport.use(
// 		new LocalStrategy(
// 			// { passReqToCallback: true },
// 			{ usernameField: 'email' },
// 			(email, password, done) => {
// 				// Match user
// 				db.findOne({
// 					email: email
// 				}).then(user => {
// 					if (!user) {
// 						return done(null, false, {
// 							message: 'That email is not registered'
// 						});
// 					}

// 					// Match password
// 					bcrypt.compare(password, user.password, (err, isMatch) => {
// 						if (err) throw err;
// 						if (isMatch) {
// 							return done(null, user);
// 						} else {
// 							return done(null, false, { message: 'Password incorrect' });
// 						}
// 					});
// 				});
// 			}
// 		)
// 	);

// 	passport.serializeUser(function(user, done) {
// 		done(null, user.id);
// 	});

// 	passport.deserializeUser(function(id, done) {
// 		User.findById(id, function(err, user) {
// 			done(err, user);
// 		});
// 	});
// };