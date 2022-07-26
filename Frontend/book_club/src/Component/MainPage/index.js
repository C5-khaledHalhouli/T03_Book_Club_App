import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"
const MainPage = () => {
  const [books, setBooks] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/book")
      .then((result) => {
        setBooks(result.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
                  {element.description.split(" ").slice(0, 20).join(" ")}...see
                  more
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          );
        })}
    </div>
  );
};
export default MainPage;
