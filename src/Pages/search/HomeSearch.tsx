import React from "react";
import { Link } from "react-router-dom";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import "./homesearch.css";

class HomeSearch extends React.Component {
  render() {
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
                  />
                  <Button size="lg" variant="primary" type="submit">
                    Search
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
        <Link to="/">login</Link>
      </div>
    );
  }
}

export default HomeSearch;
