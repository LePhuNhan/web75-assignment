import Post from '../models/postModel.js';

// Get all posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('author');
    if (!posts) {
      return res.status(404).json({ message: 'There is no Post' });
    }
    res.json(posts);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};

// Get post by ID
const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate('author');
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};

// Create a new post
const createPost = async (req, res) => {
  try {
    const newPost = new Post(req.body);
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};

// Update post by ID
const updatePostById = async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(updatedPost);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};

// Delete post by ID
const deletePostById = async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    if (!deletedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};

export default {
  getAllPosts,
  getPostById,
  createPost,
  updatePostById,
  deletePostById,
};
