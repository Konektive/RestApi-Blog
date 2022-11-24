const express = require("express");
const router = express.Router();
const Post = require("../models/postsModel");

//Getting all posts
router.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
    console.log(posts);
  } catch (err) {
    res.json({ message: err.message });
  }
});
//Getting One
router.get("/:id", (req, res) => {});
//Creating One
router.post("/posts", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    text: req.body.text,
    date: req.body.date,
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err.message });
  }
});

//finding specific post
router.get("/:postId", async (res, req) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});
//Deleting One
router.delete("/:postId", async (req, res) => {
  try {
    const removePost = await Post.remove({ _id: req.params.postId });
    res.json(removePost);
  } catch (err) {
    res.json({ message: err.message });
  }
});

module.exports = router;
