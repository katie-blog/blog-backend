const mongoose = require('mongoose');
const mongooseStringQuery = require('mongoose-string-query');
const timestamps = require('mongoose-timestamp');

const UserSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
			// enum: ['pending', 'complete', 'in progress', 'overdue'],
			// default: 'pending',
        },
        nikeName: {
            type: String,
			required: false
        },
        hobby: {
            type: String,
			required: false
        },
        description: {
            type: String,
			required: false
        }
	},
	{ minimize: false },
);

UserSchema.plugin(timestamps);
UserSchema.plugin(mongooseStringQuery);

const User = mongoose.model('User', UserSchema);
module.exports = User;