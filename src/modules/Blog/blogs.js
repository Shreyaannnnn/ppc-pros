const mongoose = require('mongoose');
const { mongooseInstance } = require('../../../db.config');



const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, unique: true, required: true },
    thumbnail: { type: String, required: true}

});
const Blog = mongooseInstance.model('Blog', blogSchema);
module.exports = Blog;