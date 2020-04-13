import React from "react";
import { Card, CardDeck, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./homepage.css";

interface HomePageState {
  postCode: string;
  cardData: any;
}

interface Props {}

class HomePage extends React.Component<Props, HomePageState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      postCode: "",
      cardData: []
    };
  }

  componentDidMount = async () => {
    let UrlString = window.location.search;
    let postCodeUrl = UrlString.replace(/[&\\#,+()$~%.'":*?<>{}]/g, "");
    console.log("postcode", postCodeUrl);
    await fetch("http://localhost:9000/learner/home", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        postCode: postCodeUrl
      })
    })
      .then(response => {
        return response.json();
      })
      .then(data => this.setState({ cardData: data }));
  };
  render() {
    console.log("state", this.state.cardData);
    if (this.state.cardData.length > 0) {
      return (
        <div>
          <CardDeck className="cardContainer">
            <Row>
              {this.state.cardData.map((cardData: any) => (
                <Col sm className="colMargin" key={Math.random()}>
                  <Card className="cardHeight">
                    <Card.Img
                      variant="top"
                      src={cardData.carPhoto}
                      className="carImg"
                    />
                    <Image
                      src={cardData.profilePhoto}
                      alt="Avatar"
                      className="avatar"
                    ></Image>
                    <Card.Body className="cardText">
                      <Card.Title>{cardData.firstName}</Card.Title>
                      <Card.Text>{cardData.exp} year of experience</Card.Text>
                      <Card.Text>{cardData.lpNo}</Card.Text>

                      <Card.Text>{cardData.charge} / Hour</Card.Text>
                    </Card.Body>
                    <Button variant="outline-primary">Book</Button>
                  </Card>
                </Col>
              ))}
            </Row>
          </CardDeck>
          <Link to="./login">login</Link>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default HomePage;
