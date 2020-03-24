import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import "./homesearch.css";

interface HomeSearchState {
  postCode: string;
  validSearch: boolean;
}

interface Props {}

class HomeSearch extends React.Component<Props, HomeSearchState> {
  constructor(props: any) {
    super(props);
    this.state = {
      postCode: "",
      validSearch: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleChange(e: any) {
    this.setState({
      postCode: e.target.value
    });
    console.log("postcode", this.state);
  }

  handleSearch(e: any) {
    e.preventDefault();
    this.setState({
      postCode: this.state.postCode
    });
    console.log("postcodeSearch", this.state);
    this.postcodeAPI();
  }
  postcodeAPI = async () => {
    console.log("state info", this);
    const response = await fetch("http://localhost:9000/driver/search", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        postCode: this.state.postCode
      })
    });
    console.log("response", response.status);
    if (response.status === 200) {
      this.setState({ validSearch: true });
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
                <Col className="searchbox" onClick={this.handleSearch}>
                  <Form.Control
                    size="lg"
                    type="search"
                    placeholder="Postcode"
                    value={this.state.postCode}
                    onChange={this.handleChange}
                  />
                  <Button size="lg" variant="primary" type="submit">
                    Search
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default HomeSearch;
