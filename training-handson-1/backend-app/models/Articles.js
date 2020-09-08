const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    commenter: {
        type: String,
        required: true,
    },
    title: String,
    comment: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
    _id: false,
});

const articleSchema = new Schema({
    author: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    abstract: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    imageUrl: String,
    comments: [commentSchema],
}, {
    timestamps: true,
});

mongoose.model('Article', articleSchema);