import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";


class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="" variant="light">
        <Navbar.Brand className="px-5">My Favorite Books</Navbar.Brand>
        <NavItem>
          <Link to="/">Home</Link>
          <Link to="/about" className="px-2">About</Link>
        </NavItem>
        {/* PLACEHOLDER: render a navigation link to the about page */}
      </Navbar>
    )
  }
}

export default Header;
