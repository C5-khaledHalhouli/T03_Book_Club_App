import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const SignUp = ({ showSignUp, setShowSignUp }) => {
  const handleClose = () => setShowSignUp(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [massage, setMassage] = useState("");

  const signUpClick = () => {
    axios
      .post("http://localhost:5000/user", {
        userName,
        password,
        email,
        role: "62dee1336f963dac570dbe6d",
      })
      .then((result) => {
        console.log(result);

        setMassage("create account successfully");
      })
      .catch((err) => {
        console.log(err);
      });

    setTimeout(() => {
      handleClose();
    }, 2000);
  };
  return (
    <Modal show={showSignUp} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Sign up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>userName </Form.Label>
            <Form.Control
              type="text"
              placeholder="user123"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
        </Form>
        {massage}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={signUpClick}>
          SignUp
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SignUp;
