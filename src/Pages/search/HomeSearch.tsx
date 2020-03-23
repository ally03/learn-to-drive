import React from "react";
import { Link } from "react-router-dom";
import { Form, Button, Card } from "react-bootstrap";
// import "./homesearch.css";

class HomeSearch extends React.Component {
  render() {
    return (
      <div className="displayForm">
        <Card className="border">
          <Card.Body>
            <Form className="inputForm">
              <Form.Group controlId="formGroupEmail">
                <Form.Control
                  type="search"
                  name="email"
                  placeholder="Postcode"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Search
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <Link to="/">login</Link>
      </div>
    );
  }
}

export default HomeSearch;
