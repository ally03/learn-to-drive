import React from "react";
import {
  Navbar,
  Nav,
  Form,
  Button,
  FormControl,
  NavDropdown
} from "react-bootstrap";
import "./navComponent.css";

const NavComponent = () => {
  if (window.location.pathname !== "/home") return null;
  return (
    <div>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Post Code"
                className="mr-sm-2"
              />
              <Button variant="outline-light">Search</Button>
            </Form>
            <NavDropdown title="Sort By" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Location</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Price</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Review</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Navbar.Text>
            Signed in as: <a href="#login">Alid Didarali</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavComponent;
