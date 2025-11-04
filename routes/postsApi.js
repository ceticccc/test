const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// All routes require authentication
router.post('/', postController.isAuthenticated, postController.createPost);
router.put('/:id', postController.isAuthenticated, postController.updatePost);
router.delete('/:id', postController.isAuthenticated, postController.deletePost);

// public routes
router.get('/', postController.getAllPosts);
router.get('/user/:userId', postController.getPostsByUser);
router.get('/:id', postController.getPostById);

module.exports = router;