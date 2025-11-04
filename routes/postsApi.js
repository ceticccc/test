const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// All routes require authentication
router.use(postController.isAuthenticated);

// GET /api/posts - Get all posts
router.get('/', postController.getAllPosts);

// GET /api/posts/user/:userId - Get posts by user (BEFORE /:id route)
router.get('/user/:userId', postController.getPostsByUser);

// POST /api/posts - Create new post
router.post('/', postController.createPost);

// GET /api/posts/:id - Get single post
router.get('/:id', postController.getPostById);

// PUT /api/posts/:id - Update post
router.put('/:id', postController.updatePost);

// DELETE /api/posts/:id - Delete post
router.delete('/:id', postController.deletePost);

module.exports = router;