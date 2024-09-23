const express = require('express');
const router = express.Router();

const { createBlog } = require('../../controllers/blogs/blogs')


router.route("/createBlog").post(createBlog);


module.exports = router;
