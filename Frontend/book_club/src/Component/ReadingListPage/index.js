import axios from "axios";
import React, { useState, useEffect } from "react";

const ReadingListPage = () => {
  const [token, setToken] = useState("");
  const [book, setBook] = useState("");
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(JSON.parse(localStorage.getItem("token")).token);
      axios
        .get("http://localhost:5000/user/readinglist", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((result) => {
          console.log(result);
          setBook(result.data.result);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <div className="readingListPage">
      {book && book.map((element, index) => {
        return <div className="carbook" key={index+"readingBook"}>
            <img src={``}/>
            <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
        </div>
      })}
    </div>
  );
};
