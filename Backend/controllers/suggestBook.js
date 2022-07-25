const suggestBooksModel = require("../model/suggestBooks");

const addSuggestBook = (req, res) => {
  const { bookName, user } = req.body;

  const newSuggestBook = new suggestBooksModel({
    bookName,
    user,
  });
  newSuggestBook.save().then((result)=>{
    res.status(201).json(result)
  }).catch((err)=>{
    res.status(404).json(err)
  })
};

module.exports = {addSuggestBook}