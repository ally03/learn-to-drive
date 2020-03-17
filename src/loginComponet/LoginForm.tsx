import React from "react";
import { Form, Button, Card, Modal } from "react-bootstrap";
import "./login.css";

// const test_api_call = async () => {
//   const response = await fetch("http://localhost:9000/login", {
//     method: "POST", // *GET, POST, PUT, DELETE, etc.
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({ email: "hafiz@gmail.com", password: "1232131" }) // body data type must match "Content-Type" header
//   });
//   return await response.json(); // parses JSON response into native JavaScript objects
// };

interface LoginFormState {
  //can be
  //email: string
  //password: string
  [key: string]: string;
}
interface Props {}

class LoginForm extends React.Component<Props, LoginFormState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e: any) {
    console.log("this is event", e.target.name);
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div className="displayForm">
        <Card style={{ width: "29rem", height: "25rem" }} className="border">
          <Card.Body>
            <Card.Title className="formTitle">The To Do </Card.Title>
            <Form className="inputForm">
              <Form.Group controlId="formGroupEmail">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
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
