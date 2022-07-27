import { useSelector, useDispatch } from "react-redux";
import { deleteRoom } from "../Redux/Reducers/room/index";
import axios from "axios";
import React, { useState,useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

const RoomTable = () => {
  const dispatch = useDispatch();
  const [bookId, setBookId] = useState("");
  const state = useSelector((state) => {
      return {
          rooms: state.room.rooms,
          books: state.book.books,
        };
    });
    const [showBook,setShowBook]=useState()
    useEffect(()=>{
       state.books.length? setShowBook(state.books[0].bookName):setShowBook("")
    },[state.books])

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      &#x25bc;
    </a>
  ));


  const CustomMenu = React.forwardRef(
    ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
      const [value, setValue] = useState("");

      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <Form.Control
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="Type to filter..."
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().startsWith(value)
            )}
          </ul>
        </div>
      );
    }
  );

  const closeClick = (roomId) => {
    dispatch(deleteRoom(roomId));
    axios
      .delete(`http://localhost:5000/room/${roomId}`)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const createClick = () => {
    axios
      .post(`http://localhost:5000/room/${bookId}`)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Book Name</th>
          <th>Operater</th>
        </tr>
      </thead>
      <tbody>
        <td></td>
        <td>
          <Dropdown>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
              {showBook}
            </Dropdown.Toggle>
            <Dropdown.Menu as={CustomMenu} >
              {state.books.length &&
                state.books.map((element, index) => {
                 
                    return (
                      <Dropdown.Item eventKey={`${index}`} onClick={(e)=>{
                        setBookId(element._id)
                        console.log(element._id);
                        setShowBook(element.bookName)
                      }} >
                        {element.bookName}
                      </Dropdown.Item>
                    );
                  
                })}
            </Dropdown.Menu>
            ;
          </Dropdown>
        </td>
        <td>
          <Button
            variant="danger"
            onClick={() => {
              createClick(bookId);
            }}
          >
            Create Room
          </Button>
        </td>

        {state.rooms &&
          state.rooms.map((element, index) => {
            return (
              <tr key={index + "tdRoom"}>
                <td>{index}</td>
                <td>{element.book.bookName}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => {
                      closeClick(element._id);
                    }}
                  >
                    Close
                  </Button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
};

export default RoomTable;