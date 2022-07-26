import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from "axios"

const Login=({show,setShow,setIsLoggedIn,setAccount})=>{

    

    const handleClose = () => setShow(false);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

const loginClick=()=>{
axios.post("http://localhost:5000/login",{email,password}).then((result)=>{
    console.log(result,typeof(result.status));
    if(result.status===200){
        localStorage.setItem("isLoggedIn",true)
        localStorage.setItem("token",result.data.token)
        setAccount(result.data.userName)
        setIsLoggedIn(true)

    }

}).catch((err)=>{
    console.log(err);
})
handleClose()
}
    return <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Login</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email </Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            onChange={(e)=>{
setEmail(e.target.value)
            }}
            autoFocus
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" onChange={(e)=>{
setPassword(e.target.value)
            }} />
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={loginClick}>
        SignIn
      </Button>
    </Modal.Footer>
  </Modal>
}

export default Login