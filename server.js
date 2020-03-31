// Requiring necessary npm packages
var express = require('express');
var session = require('express-session');
// Requiring passport as we've configured it
var passport = require('./config/passport');
var cors = require('cors');

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 3001;
var db = require('./models');

// Creating express app and configuring middleware needed for authentication
var app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
} else {
	app.use(express.static('public'));
}

// We need to use sessions to keep track of our user's login status
app.use(
	session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

const mongoose = require('mongoose');
const MONGODB_URI =
	process.env.MONGODB_URI || 'mongodb://localhost:27017/musichub';
mongoose
	.connect(MONGODB_URI, { useNewUrlParser: true })
	.then(() => {
		console.log('🗄 ==> Successfully connected to mongoDB.');
	})
	.catch(err => {
		console.log(`Error connecting to mongoDB: ${err}`);
	});

// Requiring our routes
require('./controller/users')(app);
require('./controller/skills')(app);
require('./controller/user-skills')(app);

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(PORT, () => {
	console.log(`🌎 ==> API server now on port ${PORT}!`);
});
