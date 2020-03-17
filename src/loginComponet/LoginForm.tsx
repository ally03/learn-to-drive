import React from "react";
import { Form, Button, Card, Modal } from "react-bootstrap";
import "./login.css";
import { Link } from "react-router-dom";

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
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e: any) {
    console.log("this is event", e.target.name);
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e: any) {
    e.preventDefault();
    console.log("event", e);
    this.setState({
      email: this.state.email,
      password: this.state.password
    });
    console.log("email", this.state);
    this.test_api_call();
  }
  test_api_call = async () => {
    const response = await fetch("http://localhost:9000/login", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    });
    console.log("resp", response);
    return await response;
  };

  render() {
    // console.log("responmse", test_api_call());
    return (
      <div className="displayForm">
        <Card style={{ width: "29rem", height: "25rem" }} className="border">
          <Card.Body>
            <Card.Title className="formTitle">The To Do </Card.Title>
            <Form className="inputForm" onSubmit={this.handleSubmit}>
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
                <Link to="/">
                  <Button variant="primary" type="submit">
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="signup" variant="success">
                    Signup
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

export default LoginForm;
