import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
        <>
        
        <nav className="bg-blue-300 p-4">
        <Link to="/" className="text-blue-950 text-lg font-semibold">
          Student Course Portal
        </Link>
      </nav>
      </>
    );
  }
}

export default Navbar;
