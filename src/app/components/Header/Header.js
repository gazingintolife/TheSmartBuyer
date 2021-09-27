import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Button } from "../button/button";
import "./Header.scss";
import Logo from "../../assets/logo.svg";

const Header = (props) => {
	const onLogInClick = () => {
		console.log("clicked");
		props.history.push(`/login`);
	};

	const onLogOutClick = () => {
		localStorage.clear();
		props.history.push(`/signup`);
	};

	return (
		<header className="header-container">
			<img className="brand" src={Logo} alt="" />

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
