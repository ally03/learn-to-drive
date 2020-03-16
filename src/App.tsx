import React from "react";
import "./App.css";
import LoginForm from "./loginComponet/LoginForm";

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
