import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button } from '../button/button';
import "./Header.scss";
import Logo from "../../assets/logo.svg";

const onLogOutClick = () => {
  return (console.log("LogOut clicked"));
}

const onLogInClick = () => {
  return (<Redirect to = "/login"/>)
}

const Header = () => {

  return (
    <header className="header-container">
    
    <img className="brand" src={Logo} alt="" />
  
      <nav className="navigation">
        <Link className="white-btn" to="/contact">Contact</Link>
        { localStorage.getItem('auth-token') ? (
          <div>
          <Link className="white-btn" to="/account">My Account</Link>
          
          <Button className="green-btn" onclick = {onLogOutClick} buttonText = "Log Out" />
          </div>
        ):
        (
          <div>
            <Button className="green-btn" onClick = {onLogInClick} buttonText = "Log In" />
          </div>
        )}
         
      </nav>
  
      <hr />
    </header>
  )
};

export default Header;

