const Post = require('../models/Post');

exports.getAllPosts = async (req, res) => {
  const posts = await Post.find({});
  res.render('index', {
    posts,
  });
};

exports.createPost = async (req, res) => {
  await Post.create(req.body);
  res.redirect('/');
};

exports.getPost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render('post', {
    post,
  });
};

exports.deletePost = async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.redirect('/');
};

exports.updatePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  post.title = req.body.title;
  post.detail = req.body.detail;
  await post.save();
  res.redirect(`/posts/${req.params.id}`);
};
