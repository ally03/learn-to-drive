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
import { Link } from "react-router-dom";
import { getAllDriverCard } from "../services/ApiService";

interface CardData {
  firstName: string;
  exp: number;
  charge: string;
  lpNo: string;
  profilePhoto: string;
  carPhoto: string;
}

async function priceSort() {
  let UrlString = window.location.search;
  let postCodeUrl = UrlString.replace(/[&\\#,+()$~%.'":*?<>{}]/g, "");
  const response = await getAllDriverCard(postCodeUrl);
  if (response.status === 200) {
    const cardData = await response.json();
    cardData.sort((nextCard: CardData, prevCard: CardData) => {
      let firstPrice = nextCard.charge.replace(/[&\\#,+()$~£%:*?<>{}]/g, "");
      let SecondPrince = prevCard.charge.replace(/[&\\#,+()$~£%:*?<>{}]/g, "");
      if (firstPrice > SecondPrince) {
        return 1;
      }
      if (firstPrice < SecondPrince) {
        return -1;
      }
      return 0;
    });
    console.log(cardData);
  }
}

const NavComponent = () => {
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
              <NavDropdown.Item onClick={priceSort}>Price</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Review</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Navbar.Text>
            Signed in as: <Link to="./login">Alid Didarali</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default NavComponent;
