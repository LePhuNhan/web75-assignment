import express from 'express';
const router = express.Router();
import postController from '../controllers/postController.js';

// Post routes (GET, POST, PUT, DELETE)

// GET all posts
router.get('/', postController.getAllPosts);

// GET post by ID
router.get('/:id', postController.getPostById);

// POST create post
router.post('/', postController.createPost);

// PUT update post by ID
router.put('/:id', postController.updatePostById);

// DELETE post by ID
router.delete('/:id', postController.deletePostById);

const postRoutes = router; 

export default postRoutes;
