import React from "react";
import { Redirect } from "react-router-dom";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import "./homesearch.css";

interface HomeSearchState {
  postCode: string;
  validSearch: boolean;
  alert: string;
}

interface Props {}

class HomeSearch extends React.Component<Props, HomeSearchState> {
  constructor(props: any) {
    super(props);
    this.state = {
      postCode: "",
      validSearch: false,
      alert: ""
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
    this.postcodeAPI();
  }
  postcodeAPI = async () => {
    const response = await fetch("http://localhost:9000/driver/search", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        postCode: this.state.postCode
      })
    });
    if (response.status === 200) {
      this.setState({ validSearch: true });
    } else if (response.status === 400) {
      this.setState({
        alert: "Please enter a valid post code"
      });
    }
    // return await response;
  };

  render() {
    if (this.state.validSearch) {
      return <Redirect push to="/" />;
    }
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
                  <Button
                    size="lg"
                    variant="primary"
                    type="submit"
                    onClick={this.handleSearch}
                  >
                    Search
                  </Button>
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
