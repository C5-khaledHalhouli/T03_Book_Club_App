const bookModel = require("../model/booksSchema");

const createBook= (req, res) => {
  const { comment, user,book } = req.body;

  const newBook = new bookModel({
    comment,
    user,
    book
  });
  newComment.save().then((result)=>{
    res.status(201).json(result)
  }).catch((err)=>{
    res.status(404).json(err)
  })
};

module.exports = {createComment}