import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg justify-content-center">
        <Link to="/" className="navbar-brand">
          League Summoners
        </Link>
      </nav>
    );
  }
}
