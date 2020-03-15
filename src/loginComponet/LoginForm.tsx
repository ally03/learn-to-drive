import React from "react";
import { Form, Button, Row, Col, Container, Modal } from "react-bootstrap";
import "./login.css";

class LoginForm extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Modal.Dialog>
            <Modal.Title className="text-center">The To Do </Modal.Title>
            <Form className="displayText">
              <Form.Group controlId="formGroupEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                {/* <Form.Label>Password</Form.Label> */}
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Text className="text-muted">Forget Password?</Form.Text>
              <Button variant="primary">Primary</Button>{" "}
              <Button variant="success">Success</Button>{" "}
              {/* <Form.Label>Forget Password</Form.Label> */}
            </Form>
          </Modal.Dialog>
        </Container>
      </div>
    );
  }
}

export default LoginForm;
