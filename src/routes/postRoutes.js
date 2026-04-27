const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');
const auth = require('../middleware/auth');

// ✅ GET all posts
router.get('/', postController.getAllPosts);

// ✅ Comments FIRST (important)
router.get('/:postId/comments', (req, res) => {
  res.json({
    message: `Comments for post ${req.params.postId}`
  });
});

// ✅ GET by ID
router.get('/:id', postController.getPostById);

// ✅ POST (protected)
router.post('/', auth, postController.createPost);

module.exports = router;