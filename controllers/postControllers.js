const Post = require('../models/Post');

exports.getAllPosts = async (req, res) => {
  let page = parseInt(req.query.page) || 1;
  const postsPerPage = 3;
  const totalPosts = await Post.find().countDocuments();
  const posts = await Post.find({})
    .sort('-dateCreated')
    .skip((page - 1) * postsPerPage)
    .limit(postsPerPage);

  let previousPage = page - 1;
  let nextPage = page + 1;

  res.render('index', {
    posts,
    currentPage: page,
    previousPage,
    nextPage,
    pages: Math.ceil(totalPosts / postsPerPage),
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
