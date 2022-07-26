import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";


const Room = () => {
  const [room, setRoom] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5000/room")
      .then((result) => {
        setRoom(result.data);
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div className="roomPage">
    {room&&room.map((element,index)=>{
        return <Card>
        <Card.Header>Room {index}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.{' '}
            </p>
            <footer className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    })}
  </div>
};
export default Room
