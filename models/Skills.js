const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const skillSchema = new Schema({
	skill: {
		type: String,
		unique: true
	}
});

module.exports = mongoose.model('Skills', skillSchema);
