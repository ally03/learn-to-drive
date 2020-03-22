import React from "react";
import { Card, CardDeck, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./homepage.css";
import rangerover from "./image/rangerover.jpg";
import blueBmw from "./image/blueBmw.jpg";
import roberthaverly from "./image/roberthaverly.jpg";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <CardDeck className="cardContainer">
          <Row>
            <Col lg>
              <Card className="cardHeight">
                <Card.Img variant="top" src={blueBmw} />
                <Image src={blueBmw} alt="Avatar" className="avatar"></Image>
                <Card.Body className="cardText">
                  <Card.Title>David beckam</Card.Title>
                  <p>5 year of experience</p>
                  <p>Hyundai Creata</p>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </Col>
            <Col lg>
              <Card className="cardHeight">
                <Card.Img variant="top" src={rangerover} />
                <Image src={blueBmw} alt="Avatar" className="avatar"></Image>
                <Card.Body className="cardText">
                  <Card.Title>David beckam</Card.Title>
                  <p>5 year of experience</p>
                  <p>Hyundai Creata</p>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </Col>
            <Col lg>
              <Card className="cardHeight">
                <Card.Img variant="top" src={roberthaverly} />
                <Image src={blueBmw} alt="Avatar" className="avatar"></Image>
                <Card.Body className="cardText">
                  <Card.Title>David beckam</Card.Title>
                  <p>5 year of experience</p>
                  <p>Hyundai Creata</p>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </CardDeck>
        <Link to="./login">login</Link>
      </div>
    );
  }
}

export default HomePage;
