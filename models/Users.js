const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		firstName: {
			type: String,
			required: true
		},
		lastName: {
			type: String,
			required: true
		},
		userName: {
			type: String,
			required: true,
			trim: true,
			unique: true
		},
		email: {
			type: String,
			required: true,
			lowercase: true,
			trim: true,
			unique: true
		},
		password: {
			type: String,
			required: true
		},
		skills: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Skills'
			}
		]
	},
	{
		timestamps: true
	}
);

userSchema.pre('save', function(next) {
	if (!this.isModified('password')) {
		return next();
	}

	bcrypt.genSalt(10, (err, salt) => {
		if (err) return next(err);

		bcrypt.hash(this.password, salt, (err, hash) => {
			if (err) return next(err);

			this.password = hash;
			next();
		});
	});
});

module.exports = mongoose.model('Users', userSchema);
