import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav style={{ padding: "10px", background: "#333" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Student Course Portal
        </Link>
      </nav>
    );
  }
}

export default Navbar;
