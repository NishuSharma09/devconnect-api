const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');
const auth = require('../middleware/auth');
router.get('/', postController.getAllPosts);

router.get('/:postId/comments', (req, res) => {
  res.json({
    message: `Comments for post ${req.params.postId}`
  });
});

router.get('/:id', postController.getPostById);

router.post('/', auth, postController.createPost);

module.exports = router;
