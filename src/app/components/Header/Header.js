import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button } from '../button/button';
import { connect } from "react-redux";
import "./Header.scss";
import Logo from "../../assets/logo.svg";


const Header = (props) => {
	const onLogInClick = () => {
		console.log("clicked");
		props.history.push(`/login`);
	};

  // const _id = localStorage.getItem("user_id");
  // const firstName = localStorage.getItem("firstName");
  // const lastName = localStorage.getItem("lastName");
  
  // props.userInfo({
  //   _id: _id,
  //   firstName : firstName,
  //   lastName: lastName,
  // });
  
	const onLogOutClick = () => {
		localStorage.clear();
		props.history.push(`/signup`);
	};

  const onAccountClick = () => {
    props.history.push(`/account/${props._id}`)
  }

  return (
    <header className="header-container">
    
    <img className="brand" src={Logo} alt="" />
  
      <nav className="navigation">
        <Link className="white-btn" to="/contact">Contact</Link>
        { props.user ? (
          <div>
          <Button onClick = {onAccountClick} buttonText = "My Account" />
          
          <Button variant="white" onClick = {onLogOutClick} buttonText = "Log Out" />
          </div>
        ):
        (
          <div>
            <Button variant="green" onClick = {onLogInClick} buttonText = "Log In" />
          </div>
        )}
      </nav>
  
      <hr />
    </header>
  )
};

const mapStateToProps = (state) => {
	return {
    _id: state.userReducer._id,
		user: state.userReducer.userLoggedIn
	};
};


export default connect(mapStateToProps)(withRouter(Header));

