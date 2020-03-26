import React from "react";
import { Form, Button, Card, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./signup.css";

class SignUp extends React.Component {
  render() {
    return (
      <div className="displayForm">
        <Card className="border">
          <Card.Body>
            <Card.Title className="formTitle">Register</Card.Title>
            <Form className="inputForm">
              <Form.Group controlId="formGroupEmail">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group controlId="formGroupPassword1">
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group controlId="formGroupPassword2">
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group controlId="formGroupPassword3">
                <Form.Control
                  name="FirstName"
                  type="Text"
                  placeholder="First Name"
                />
              </Form.Group>
              <Form.Group controlId="formGroupPassword4">
                <Form.Control
                  name="LastName"
                  type="Text"
                  placeholder="Last Name"
                />
              </Form.Group>
              <Form.Group className="checkBox">
                <Form.Check
                  required
                  label="I Agree to the Todo's login policy"
                  feedback="You must agree before submitting."
                />
              </Form.Group>
              <Modal.Footer>
                <Link to="/">
                  <Button variant="success" type="submit">
                    Sign Up
                  </Button>
                </Link>
              </Modal.Footer>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default SignUp;
