import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "../Login/index";
import React,{useState,useEffect} from "react"
import signUp from "../SignUp/index"
const NavBar = () => {
  const [show, setShow] = useState(false);
  const [account, setAccount] = useState("Account")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  useEffect(()=>{
    if(localStorage.getItem("isLoggedIn")){
        setIsLoggedIn(localStorage.getItem("isLoggedIn"))
    }
  },[])
  const signOut=()=>{
    setIsLoggedIn(false)
    setAccount("Account")
    localStorage.setItem("isLoggedIn",false)
    localStorage.removeItem("token")
  }
  

  return (
    <>
      <Navbar key={"sm"} bg="light" expand={"sm"} className="mb-3">
        <Container fluid>
          <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"sm"}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${"sm"}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${"sm"}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"sm"}`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Room</Nav.Link>
                <NavDropdown
                  title={`${account}`}
                  id={`offcanvasNavbarDropdown-expand-${"sm"}`}
                >
                    {isLoggedIn?(<NavDropdown.Item onClick={()=>{signOut()}}>SignOut</NavDropdown.Item>
                ):(<>
                  <NavDropdown.Item onClick={()=>{setShow(true)}}>SignIn</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                  SignUp
                  </NavDropdown.Item>
                </>
                  )
                }
                
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Login show={show} setShow={setShow} setIsLoggedIn={setIsLoggedIn} setAccount={setAccount}/>
      <signUp show={show} setShow={setShow}/>
    </>
  );
};

export default NavBar;
