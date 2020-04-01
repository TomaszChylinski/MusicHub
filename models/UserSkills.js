const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newSkill = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'Users',
		required: true
	},
	skill: {
		type: Schema.Types.ObjectId,
		ref: 'Skills',
		required: true
	}
});

module.exports = mongoose.model('UserSkills', newSkill);
