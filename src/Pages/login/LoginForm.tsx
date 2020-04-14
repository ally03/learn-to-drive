import React from "react";
import { Form, Button, Card, Modal } from "react-bootstrap";
import "./login.css";
import { Link, Redirect } from "react-router-dom";

interface LoginFormState {
  //can be
  email: string;
  password: string;
  loggedIn: boolean;
}
interface Props {}

class LoginForm extends React.Component<Props, LoginFormState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loggedIn: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e: any) {
    const state = this.state;
    this.setState({ ...state, [e.target.name]: e.target.value });
  }
  handleSubmit(e: any) {
    e.preventDefault();
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
    if (response.status === 200) {
      this.setState({ loggedIn: true });
    }
    // return await response;
  };

  render() {
    if (this.state.loggedIn) {
      return <Redirect push to="/search" />;
    }
    return (
      <div className="displayForm">
        <Card className="border">
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
                <Link to="/forgotpassword">
                  <Form.Text className="text-muted">Forget Password?</Form.Text>
                </Link>
              </Form.Group>
              <Modal.Footer>
                <Button variant="primary" type="submit" className="buttonColor">
                  Login
                </Button>
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
