import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import Logo from "../../assets/logo.svg";

const Header = () => (
	<header className="header-container">
		<img className="brand" src={Logo} alt="" />

		<nav className="navigation">
			<Link className="white-btn" to="/account">
				My Account
			</Link>
			<Link className="white-btn" to="/contact">
				Contact Us
			</Link>
			<Link className="green-btn" to="/dashboard">
				Sign Up
			</Link>
			<Link className="green-btn" to="/">
				Log out
			</Link>
		</nav>

		<hr />
	</header>
);

export default Header;
