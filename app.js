const express = require('express');
const app = express();
const ejs = require('ejs');

const PORT = 3001;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
  console.log('index');
});

app.get('/about', (req, res) => {
  res.render('about');
  console.log('about');
});

app.get('/add_post', (req, res) => {
  res.render('add_post');
  console.log('add_post');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
