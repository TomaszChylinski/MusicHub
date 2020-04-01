const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/**
 * Follow schema that has references to User schema
 */
const followSchema = Schema(
	{
		user: {
			type: Schema.Types.ObjectId,
			ref: 'Users'
		},
		user_follows: {
			type: Schema.Types.ObjectId,
			ref: 'Users'
		}
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model('Follow', followSchema);
