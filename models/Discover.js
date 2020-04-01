const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const discoverSchema = new Schema({
	firstName: {
		type: String,
	},
	lastName: {
		type: String,
	},

	friendStatus: {
		type: Boolean,
	},

	image:{
		type: String,
	}
});

module.exports = mongoose.model('Discover', discoverSchema);
