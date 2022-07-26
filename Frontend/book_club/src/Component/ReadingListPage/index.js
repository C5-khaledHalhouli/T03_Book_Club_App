import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux/";
import "./style.css";

const ReadingListPage = () => {
  const state = useSelector((state) => {
    return {
      userName: state.login.userName,
      isLoggedIn: state.login.isLoggedIn,
      token: state.login.token,
    };
  });

  const [book, setBook] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5000/user/readinglist", {
        headers: { Authorization: `Bearer ${state.token}` },
      })
      .then((result) => {
        setBook(result.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [state.token]);

  return (
    <div className="readingListPage">
      {book &&
        book.map((element, index) => {
          return (
            <div className="cardbook" key={index + "readingBook"}>
              <img src={`${element.book.img}`} />
              <Card style={{ width: "100%" }}>
                <Card.Body>
                  <Card.Title>{element.book.bookName}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {element.book.author}
                  </Card.Subtitle>
                  <Card.Text>{element.book.description}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          );
        })}
    </div>
  );
};
export default ReadingListPage;
