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
import { getAllDriverCard } from "../../services/ApiService";

interface CardData {
  firstName: string;
  exp: number;
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

class HomePage extends React.Component<{}, HomePageState> {
  constructor(props: {}) {
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
    const response = await getAllDriverCard(postCodeUrl);
    if (response.status === 200) {
      const responseApi = await response.json();
      this.setState({ cardData: responseApi, loading: false });
    }
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
              {this.state.cardData.map((cardData: any) => (
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
