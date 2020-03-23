import React from "react";
import "./App.css";
import "./common/index.css";
import LoginForm from "./Pages/login/LoginForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SignUp from "./Pages/signup/signUp";
import HomeSearch from "./Pages/search/HomeSearch";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/signup">
            <SignUp />
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
