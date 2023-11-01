const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose
  .connect(
    'mongodb+srv://uguryed:0Ib9qcibj84U62ZD@cluster0.eq0axux.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('DB CONNECTED');
  })
  .catch((err) => {
    console.log(err);
  });

const PostSchema = new Schema({
  title: String,
  detail: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
