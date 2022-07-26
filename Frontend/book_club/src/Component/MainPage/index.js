import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { Link } from "react-router-dom";
const MainPage = ({isLoggedIn}) => {
  const [books, setBooks] = useState("");
  const [token, setToken] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:5000/book")
      .then((result) => {
        setBooks(result.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
    if (localStorage.getItem("token")) {
      setToken(JSON.parse(localStorage.getItem("token")).token);
    }
  }, []);
  const addToReadingListClick = (bookId) => {
    axios
      .post(
        `http://localhost:5000/user/readinglist/${bookId}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="mainPage">
      {books &&
        books.map((element, index) => {
          return (
            <Card style={{ width: "18rem" }} key={index + "book"}>
              <Card.Img variant="top" src={`${element.img}`} />
              <Card.Body>
                <Card.Title>{element.bookName}</Card.Title>
                <Card.Text>
                  {element.description.split(" ").slice(0, 20).join(" ")}...
                  <Link to={`/${element._id}`}>see more</Link>
                </Card.Text>
                {isLoggedIn ? (
                  <Button
                    variant="primary"
                    onClick={() => {
                      addToReadingListClick(element._id);
                    }}
                  >
                    Add to readingList
                  </Button>
                ) : (
                  <></>
                )}
              </Card.Body>
            </Card>
          );
        })}
    </div>
  );
};
export default MainPage;
