import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <>
        <nav className="NavbarItems">
          <h1 className="navbar-logo">
            React-Kredi<i className="fab fa-react"></i>
          </h1>
        </nav>
      </>
    );
  }
}

export default Footer;
