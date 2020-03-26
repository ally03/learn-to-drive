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
    console.log("state", this.state);
    // console.log("this is event", e.target.name);
    // this.state.userinfo[e.target.name] = e.target.value;
    // console.log("state", this.state);

    // this.setState({
    //   userinfo[e.target.name]= e.target.value,
    // });
  }
  handleSubmit(e: any) {
    e.preventDefault();
    console.log("event", e);
    // this.setState({
    //   email: this.state.email,
    //   password: this.state.password
    // });

    console.log("handle submit state", this.state);
    this.test_api_call();
  }
  test_api_call = async () => {
    console.log("state info", this);
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
    console.log("response", response.status);
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
      // {console.log(this.state)}
      // {this.state.loggedIn ? (<Redirect push to="/sample" />):null}
      // {props.status}
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
                <Form.Text className="text-muted">Forget Password?</Form.Text>
              </Form.Group>
              <Modal.Footer>
                <Button variant="primary" type="submit">
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
