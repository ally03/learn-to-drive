import React from "react";
import { Card, CardDeck, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./homepage.css";
import blueBmw from "../../images/rangerover.jpg";
import roberthaverly from "../../images/rangerover.jpg";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <CardDeck className="cardContainer">
          <Row>
            <Col sm className="colMargin">
              <Card className="cardHeight">
                <Card.Img
                  variant="top"
                  src={roberthaverly}
                  className="carImg"
                />
                <Image src={blueBmw} alt="Avatar" className="avatar"></Image>
                <Card.Body className="cardText">
                  <Card.Title>David beckam</Card.Title>
                  <Card.Text>5 year of experience</Card.Text>
                  <Card.Text>Hyundai Creata</Card.Text>

                  <Card.Text>25 / Hour</Card.Text>
                </Card.Body>
                <Button variant="outline-primary">Book</Button>
              </Card>
            </Col>
            <Col sm className="colMargin">
              <Card className="cardHeight">
                <Card.Img
                  variant="top"
                  src={roberthaverly}
                  className="carImg"
                />
                <Image src={blueBmw} alt="Avatar" className="avatar"></Image>
                <Card.Body className="cardText">
                  <Card.Title>David beckam</Card.Title>
                  <Card.Text>5 year of experience</Card.Text>
                  <Card.Text>Hyundai Creata</Card.Text>

                  <Card.Text>25 / Hour</Card.Text>
                </Card.Body>
                <Button variant="outline-primary">Book</Button>
              </Card>
            </Col>
            <Col sm className="colMargin">
              <Card className="cardHeight">
                <Card.Img
                  variant="top"
                  src={roberthaverly}
                  className="carImg"
                />
                <Image src={blueBmw} alt="Avatar" className="avatar"></Image>
                <Card.Body className="cardText">
                  <Card.Title>David beckam</Card.Title>
                  <Card.Text>5 year of experience</Card.Text>
                  <Card.Text>Hyundai Creata</Card.Text>

                  <Card.Text>25 / Hour</Card.Text>
                </Card.Body>
                <Button variant="outline-primary">Book</Button>
              </Card>
            </Col>
            <Col sm className="colMargin">
              <Card className="cardHeight">
                <Card.Img
                  variant="top"
                  src={roberthaverly}
                  className="carImg"
                />
                <Image src={blueBmw} alt="Avatar" className="avatar"></Image>
                <Card.Body className="cardText">
                  <Card.Title>David beckam</Card.Title>
                  <Card.Text>5 year of experience</Card.Text>
                  <Card.Text>Hyundai Creata</Card.Text>

                  <Card.Text>25 / Hour</Card.Text>
                </Card.Body>
                <Button variant="outline-primary">Book</Button>
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
