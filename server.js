// require('dotenv').config();
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const errorHandler = require('errorhandler');

//Configure app
app.use(cors());
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'passport-tutorial', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

if(!isProduction) {
  app.use(errorHandler());
}

//Error handlers & middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if(!isProduction) {
	app.use((err, req, res) => {
	  res.status(err.status || 500);
  
	  res.json({
		errors: {
		  message: err.message,
		  error: err,
		},
	  });
	});
  }
  
  app.use((err, req, res) => {
	res.status(err.status || 500);
  
	res.json({
	  errors: {
		message: err.message,
		error: {},
	  },
	});
  });
  
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

const mongoose = require('mongoose');
//Configured mongoose promise's to global
mongoose.promise = global.Promise;

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
	mongoose.set('debug', true);

// Define API routes here
require('./models/Users');
require('./config/passport');
app.use(require('./routes'));
// require('./controller/users')(app);
// require('./controller/skills')(app);
require('./controller/status')(app);
// Send every other request to the React app
// Define any API routes before this runs
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(PORT, () => {
	console.log(`🌎 ==> API server now on port ${PORT}!`);
});

