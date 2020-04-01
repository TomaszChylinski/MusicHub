import mongoose from 'mongoose';

const Schema = mongoose.Schema;

/**
 * Post schema that has references to User, Like and Comment schemas
 */
const postSchema = Schema(
	{
		title: String,
		image: String,
		imagePublicId: String,
		author: {
			type: Schema.Types.ObjectId,
			ref: 'Users'
		},
		likes: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Likes'
			}
		],
		comments: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Comments'
			}
		]
	},
	{
		timestamps: true
	}
);

export default mongoose.model('Posts', postSchema);
