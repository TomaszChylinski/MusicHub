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
			db.Users.findOne({ email: email }, function(err, dbUser) {
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
