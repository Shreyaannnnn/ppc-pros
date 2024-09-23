const Blog = require('../../modules/Blog/blogs');

const createBlog = async (req, res) => {
    const { title, content, thumbnail } = req.body;

    try {
        // Create a new Blog instance
        const newBlog = new Blog({ title, content, thumbnail });

        // Save the new blog to the database
        await newBlog.save();

        return res.status(201).json({ message: 'Blog post created successfully', blog: newBlog });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = {
    createBlog,
};
