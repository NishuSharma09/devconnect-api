const Post = require('../models/Post');


exports.createPost = async (data) => {
  const post = new Post(data);
  return await post.save();
};


exports.getAllPosts = async () => {
  return await Post.find();
};
