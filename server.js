// require('dotenv').config();
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();
const session = require('express-session');
const passport = require('./config/passport');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}
app.use(
	session({
		secret: 'secret',
		resave: true,
		saveUninitialized: true
	})
);
app.use(passport.initialize());
app.use(passport.session());
// require('./config/passport');

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

// Define API routes here

require('./controller/users')(app);
require('./controller/skills')(app);
// Send every other request to the React app
// Define any API routes before this runs
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(PORT, () => {
	console.log(`🌎 ==> API server now on port ${PORT}!`);
});
