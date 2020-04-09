import React from "react";
import { Form, Button, Card, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

class ForgotPassword extends React.Component {
  render() {
    return (
      <div className="displayForm">
        <Card className="border">
          <Card.Body>
            <Card.Title className="formTitle">Forgot Password</Card.Title>
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
                  name="New password"
                  type="password"
                  placeholder="New Password"
                />
              </Form.Group>
              <Modal.Footer>
                <Link to="/login">
                  <Button variant="success" type="submit">
                    Submit
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

export default ForgotPassword;
