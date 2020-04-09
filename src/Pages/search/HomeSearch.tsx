import React from "react";
import { Link } from "react-router-dom";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import "./homesearch.css";

interface HomeSearchState {
  postCode: string;
  validSearch: boolean;
  alert: string;
  cardData: any;
}

interface Props {}

class HomeSearch extends React.Component<Props, HomeSearchState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      postCode: "",
      validSearch: false,
      alert: "",
      cardData: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleChange(e: any) {
    this.setState({
      postCode: e.target.value
    });
  }

  handleSearch(e: any) {
    e.preventDefault();
    this.setState({
      postCode: this.state.postCode
    });
    this.postcodeApi();
  }
  postcodeApi = async () => {
    await fetch("http://localhost:9000/learner/home", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        postCode: this.state.postCode
      })
    })
      .then(response => {
        return response.json();
      })
      .then(data => this.setState({ cardData: data }));
  };

  render() {
    // if (this.state.validSearch) {
    //   return <Redirect push to="/home" />;
    // }
    console.log("data", this.state);
    return (
      <div className="displayForm">
        <Card className="searchForm">
          <Card.Body>
            <Form>
              <h1 className="searchTitle">
                Book your first driving lesson today
              </h1>
              <p className="searchText">
                Find most humble and experienced instructors near you.
              </p>
              <Row>
                <Col className="searchbox">
                  <Form.Control
                    size="lg"
                    type="search"
                    placeholder="Postcode"
                    value={this.state.postCode}
                    onChange={this.handleChange}
                  />
                  <Link to={{ pathname: "/home" + "?postcode=le45je" }}>
                    <Button
                      size="lg"
                      variant="primary"
                      type="submit"
                      onClick={this.handleSearch}
                    >
                      Search
                    </Button>
                  </Link>
                </Col>
              </Row>
              <p className="searchAlert">{this.state.alert}</p>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default HomeSearch;
