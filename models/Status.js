const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const statusSchema = new Schema({
	status: {
		type: String,
	},
	date: {
		type:Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Status', statusSchema);
