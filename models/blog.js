const mongoose = require('mongoose');
const mongooseStringQuery = require('mongoose-string-query');
const timestamps = require('mongoose-timestamp');

const BlogSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
			// enum: ['pending', 'complete', 'in progress', 'overdue'],
			// default: 'pending',
        },
        categoryIds: {
            type: String,
			required: false
        },
        tags: {
            type: String,
			required: false
        },
        comments: {
            type: String,
			required: false
        }
	},
	{ minimize: false },
);

BlogSchema.plugin(timestamps);
BlogSchema.plugin(mongooseStringQuery);

const Blog = mongoose.model('Blog', BlogSchema);
module.exports = Blog;