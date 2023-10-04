import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Header.css"; // Import your CSS styles

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">
          <img
            src={process.env.PUBLIC_URL + "/icons/logo.svg"}
            alt="BlancPont Logo"
          />
        </Link>
      </div>
      <nav className="header-nav">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
