const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

// Create a post
router.post('/create', async (req, res) => {
  const { userID, content, mediaURL } = req.body;
  try {
    const newPost = new Post({
      user: userID,
      content,
      mediaURL
    });

    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Fetch posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().populate('user', 'username avatar').exec();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;