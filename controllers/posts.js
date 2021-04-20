const Post = require('../models/post');

module.exports = (app) => {

  // CREATE
  app.post('/posts/new', (req, res) => {
    // INSTANTIATE INSTANCE OF POST MODEL
    const post = new Post(req.body);
    console.log("body = ", req.body)
    console.log("post = ", post)
    // SAVE INSTANCE OF POST MODEL TO DB
    post.save((err, post) => {
      // REDIRECT TO THE ROOT
      return res.redirect(`/`);
    })
  });

  // DELETE
  app.delete('/posts/new', (req, res) => {
      const post = new Post()

      post.deleteOne({'objectId': req.body})
  })

};