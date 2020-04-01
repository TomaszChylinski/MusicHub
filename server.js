
// require('dotenv').config();
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const logger = require("morgan");
var axios = require("axios");
var cheerio = require("cheerio");

// Requiring passport as we've configured it
var passport = require('./config/passport');

const cors = require('cors');

const app = express();
app.use(cors());


var db = require("./models")
// Define middleware here

// Use morgan logger for logging requests
app.use(logger("dev"));

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


// Define API routes here
require('./controller/discover')(app);
require('./controller/users')(app);
require('./controller/skills')(app);
require('./controller/user-skills')(app);


require('./controller/status')(app);
require('./controller/musicnews')(app);


// $('#scrapeArticlesButton').on("click", function(event) {
app.get("/news", function (req, res) {
	console.log("IAM HERE ")
	// First, we grab the body of the html with axios
	axios.get("https://www.billboard.com/news").then(function (response) {
		// Then, we load that into cheerio and save it to $ for a shorthand selector
		var $ = cheerio.load(response.data);

		var newsScraped = [];
		$("h3.content-title").each(function (i, element) {
			// Save an empty result object
			var result = {};

			// Add the text and href of every link, and save them as properties of the result object
			result.title = $(this).text();
			// working in the broswer having issue in the running - result.summary =  $(this).nextElementSibling.innerText;
			result.link = $(this).children().attr("href");

			result.image = $(this).parent().parent().find(".image-container img").attr("src");


			newsScraped.push(result);
		});

		res.json(newsScraped)
	
	});
});



// Send every other request to the React app
// Define any API routes before this runs

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(PORT, () => {
	console.log(`🌎 ==> API server now on port ${PORT}!`);
});
