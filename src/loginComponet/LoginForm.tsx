import React from "react";
import { Form, Button, Card, Modal } from "react-bootstrap";
import "./login.css";

class LoginForm extends React.Component {
  render() {
    return (
      <div className="displayForm">
        <Card style={{ width: "29rem", height: "25rem" }} className="border">
          <Card.Body>
            <Card.Title className="formTitle">The To Do </Card.Title>
            <Form className="inputForm">
              <Form.Group controlId="formGroupEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                {/* <Form.Label>Password</Form.Label> */}
                <Form.Control type="password" placeholder="Password" />
                <Form.Text className="text-muted">Forget Password?</Form.Text>
              </Form.Group>
              <Modal.Footer>
                <Button variant="primary" type="submit">
                  Login
                </Button>
                <Button className="signup" variant="success">
                  Signup
                </Button>
              </Modal.Footer>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default LoginForm;
