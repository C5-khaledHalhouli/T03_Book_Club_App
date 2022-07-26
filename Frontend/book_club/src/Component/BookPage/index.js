import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./style.css";
const BookPage = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:5000/book/${bookId}`)
      .then((result) => {
        setBook(result.data.result[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="bookPage">
      <div className="imgBook">
        <img src={`${book && book.img}`} className="imgBook" />
      </div>
      <div className="bookInfo">
        <h2>{book && book.bookName}</h2>
        <h3>{book && book.author}</h3>
        <p>{book && book.description}</p>
      </div>
    </div>
  );
};

export default BookPage;
