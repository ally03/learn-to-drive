import React from "react";
import {
  Card,
  CardDeck,
  Row,
  Col,
  Image,
  Button,
  Spinner
} from "react-bootstrap";
import "./homepage.css";

interface CardData {
  firstName: string;
  exp: number;
  rating: number;
  charge: string;
  lpNo: string;
  profilePhoto: string;
  carPhoto: string;
}
interface HomePageState {
  postCode: string;
  cardData: CardData[];
  loading: boolean;
}

interface Props {}

class HomePage extends React.Component<Props, HomePageState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      postCode: "",
      cardData: [],
      loading: false
    };
  }

  componentDidMount = async () => {
    let UrlString = window.location.search;
    let postCodeUrl = UrlString.replace(/[&\\#,+()$~%.'":*?<>{}]/g, "");
    this.setState({ loading: true });
    await fetch("http://localhost:9000/learner/home", {
      method: "POST",
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
      .then(data => this.setState({ cardData: data, loading: false }));
  };
  render() {
    if (this.state.loading) {
      return (
        <div className="displayForm">
          <Spinner animation="border" variant="danger"></Spinner>
        </div>
      );
    }
    if (this.state.cardData.length > 0) {
      return (
        <div>
          <CardDeck className="cardContainer">
            <Row>
              {this.state.cardData.map((cardData: CardData) => (
                <Col sm className="colMargin" key={Math.random()}>
                  <Card>
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
        </div>
      );
    } else {
      return null;
    }
  }
}

export default HomePage;
