const postService = require('../services/postService');

exports.getAllPosts = async (req, res) => {
  const posts = await postService.getAllPosts();
  res.json(posts);
};


exports.createPost = async (req, res) => {
  const post = await postService.createPost(req.body);

  res.status(201).json({
    success: true,
    data: post
  });
};


exports.getPostById = (req, res) => {
  res.send(`Post ID: ${req.params.id}`);
};
