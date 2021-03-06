const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Post schema that has references to User, Like and Comment schemas
 */
const postSchema = Schema(
	{
		title: String,
		caption: String,
		image: String,
		video: String,
		author: {
			type: Schema.Types.ObjectId,
			ref: 'Users',
			required: true
		}
		// likes: [
		// 	{
		// 		type: Schema.Types.ObjectId,
		// 		ref: 'Likes'
		// 	}
		// ],
		// comments: [
		// 	{
		// 		type: Schema.Types.ObjectId,
		// 		ref: 'Comments'
		// 	}
		// ]
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model('Posts', postSchema);
