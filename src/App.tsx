import React from "react";
import "./App.css";
import "./common/index.css";
import LoginForm from "./Pages/login/LoginForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Pages/home/HomePage";
import SignUp from "./Pages/signup/signUp";
import HomeSearch from "./Pages/search/HomeSearch";
import NavComponent from "./components/NavComponent";
import ForgotPassword from "./Pages/login/ForgotPassword";

class App extends React.Component {
  render() {
    return (
      <Router>
        <NavComponent />
        <Switch>
          <Route exact path={["/home", "/"]}>
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/forgotpassword">
            <ForgotPassword />
          </Route>
          <Route path="/search">
            <HomeSearch />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
