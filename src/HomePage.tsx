import React from "react";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Link to="./login">login</Link>
      </div>
    );
  }
}

export default HomePage;
