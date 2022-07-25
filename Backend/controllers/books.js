const bookModel = require("../model/booksSchema");

const createBook= (req, res) => {
  const { bookName, description,img } = req.body;

  const newBook = new bookModel({
    bookName,
    description,
    img
  });
  newBook.save().then((result)=>{
    res.status(201).json(result)
  }).catch((err)=>{
    res.status(404).json(err)
  })
};

module.exports = {createBook}