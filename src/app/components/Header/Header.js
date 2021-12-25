import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button } from '../button/button';
import { connect } from "react-redux";
import "./Header.scss";
import Logo from "../../assets/logo.svg";



const Header = (props) => {

	const onLastButtonClick = () => {
		console.log("clicked");
		console.log(props.buttonLast);
		if(props.buttonLast == "Sign Up"){
			props.history.push(`/`);
		}else if(props.buttonLast == "Login"){
			props.history.push(`/login`);
		}
		else if(props.buttonLast == "Log Out"){
			localStorage.clear();
			props.history.push(`/`);
		}	
	};

	const onAccountClick = () => {
    	props.history.push(`/account/${props._id}`);
  	}
	
	const onDashboardClick = () => {
		props.history.push(`/dashboard/${props._id}`);
	}

	return (
		<header className="header-container">
			<Link to = ""><img className="brand" src={Logo} alt="" /></Link>
			<nav className="navigation">
				{ props.user ? (
					<div className = "nav-items">
						<Button onClick = {onDashboardClick} buttonText = "Dashboard" />
						<Link className="white-btn" to="/contact">Contact</Link>
						<Button onClick = {onAccountClick} buttonText = "My Account" />
						<Button variant="green" onClick = {onLastButtonClick} buttonText = {props.buttonLast} />
					</div>
					):
					(
					<div className = "nav-items">
						<Link className="white-btn" to="/contact">Contact</Link>
					   	<Button variant="green" onClick = {onLastButtonClick} buttonText = {props.buttonLast} />
					</div>
					)}
			</nav>
		</header>
	)
}

const mapStateToProps = (state) => {
	return {
    _id: state.userReducer._id,
	user: state.userReducer.userLoggedIn
	};
};


export default connect(mapStateToProps)(withRouter(Header));