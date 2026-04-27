const Post = require('../models/Post');

// create post
exports.createPost = async (data) => {
  const post = new Post(data);
  return await post.save();
};

// get all posts
exports.getAllPosts = async () => {
  return await Post.find();
};
