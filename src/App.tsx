import React from "react";
import "./App.css";
import LoginForm from "./loginComponet/LoginForm";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <LoginForm />
      </div>
    );
  }
}

export default App;
