const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const skillSchema = new Schema({
	skill: {
		type: String,
		unique: true
	},
	practitioners: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Users'
		}
	]
});

module.exports = mongoose.model('Skills', skillSchema);
