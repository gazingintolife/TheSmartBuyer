import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button } from '../button/button';

const onLogOutClick = () => {
  return (console.log("LogOut clicked"));
}

const onLogInClick = () => {
  return (<Redirect to = "/login"/>)
}

const Header = () => {

  return (
    <header className="header-container">
    
      <img src="C:\Users\Avinash\Desktop\thesmartbuyer\src\public\assets\img\logo_transparent.svg" />
  
      <nav>
        <Link to="/contact">Contact</Link>
        { localStorage.getItem('auth-token') ? (
          <div>
          <Link to="/account">My Account</Link>
          
          <Button onclick = {onLogOutClick} buttonText = "Log Out" />
          </div>
        ):
        (
          <div>
            <Button onClick = {onLogInClick} buttonText = "Log In" />
          </div>
        )}
         
      </nav>
  
      <hr />
    </header>
  )
};

export default Header;

