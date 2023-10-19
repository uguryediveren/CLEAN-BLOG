const express = require('express');
const app = express();
const ejs = require('ejs');
const methodOverride = require('method-override');
const postConroller = require('./controllers/postControllers');
const pageConroller = require('./controllers/pageControllers');

const PORT = 3001;

// Middlewares
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

// Routes
app.get('/', postConroller.getAllPosts);
app.post('/posts', postConroller.createPost);
app.get('/posts/:id', postConroller.getPost);
app.delete('/posts/:id', postConroller.deletePost);
app.put('/posts/:id', postConroller.updatePost);

app.get('/about', pageConroller.getAboutPage);
app.get('/add_post', pageConroller.getAddPostPage);
app.get('/posts/edit/:id', pageConroller.getEditPage);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
