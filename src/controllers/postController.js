const postService = require('../services/postService');
// ✅ GET ALL POSTS
exports.getAllPosts = async (req, res) => {
  const posts = await postService.getAllPosts();
  res.json(posts);
};

// ✅ CREATE POST
exports.createPost = async (req, res) => {
  const post = await postService.createPost(req.body);

  res.status(201).json({
    success: true,
    data: post
  });
};

// ✅ GET BY ID
exports.getPostById = (req, res) => {
  res.send(`Post ID: ${req.params.id}`);
};