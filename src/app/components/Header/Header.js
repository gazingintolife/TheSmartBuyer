<<<<<<< HEAD
import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button } from '../button/button';
import { connect } from "react-redux";
=======
import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Button } from "../button/button";
>>>>>>> d229a7a1
import "./Header.scss";
import Logo from "../../assets/logo.svg";


const Header = (props) => {
	const onLogInClick = () => {
		console.log("clicked");
		props.history.push(`/login`);
	};

<<<<<<< HEAD
  // const _id = localStorage.getItem("user_id");
  // const firstName = localStorage.getItem("firstName");
  // const lastName = localStorage.getItem("lastName");
  
  // props.userInfo({
  //   _id: _id,
  //   firstName : firstName,
  //   lastName: lastName,
  // });
  
  const onLogInClick = () => {
    console.log("clicked")
    props.history.push(`/login`);
  }
=======
	const onLogOutClick = () => {
		localStorage.clear();
		props.history.push(`/signup`);
	};
>>>>>>> d229a7a1

	return (
		<header className="header-container">
			<img className="brand" src={Logo} alt="" />

<<<<<<< HEAD
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
          
          <Button onClick = {onLogOutClick} buttonText = "Log Out" />
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

const mapStateToProps = (state) => {
	return {
    _id: state.userReducer._id,
		user: state.userReducer.userLoggedIn
	};
};


export default connect(mapStateToProps)(withRouter(Header));

=======
			<nav className="navigation">
				<Link className="white-btn" to="/contact">
					Contact Us
				</Link>
				{localStorage.getItem("auth-token") ? (
					<div>
						<Link className="white-btn" to="/account">
							My Account
						</Link>

						<Button
							variant="white"
							onClick={onLogOutClick}
							buttonText="Log Out"
						/>
					</div>
				) : (
					<div>
						<Button
							variant="green"
							onClick={onLogInClick}
							buttonText="LogIn"
						/>
					</div>
				)}
			</nav>

			<hr />
		</header>
	);
};

export default withRouter(Header);
>>>>>>> d229a7a1
