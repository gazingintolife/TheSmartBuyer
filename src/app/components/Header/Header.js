import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header-container">
    <Link to="/dashboard">SignUp</Link>

    <nav>
      <Link to="/account">My Account</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/">logout</Link>
    </nav>

    <hr />
  </header>
);

export default Header;
