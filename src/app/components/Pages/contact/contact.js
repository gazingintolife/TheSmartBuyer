import axios from "axios";
import React, { useState } from "react";
import { Button } from "../../button/button";
import Header from "../../Header/Header";
import {connect} from "react-redux";
import "./contact.scss";

class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			body: "",
			name: "",
			err: "",
		};
	}

	onNameChange = (e) => {
		const name = e.target.value;
		this.setState(() => ({ name: name }));
	};

	onEmailChange = (e) => {
		const email = e.target.value;
		this.setState(() => ({ email: email }));
	};

	onBodyChange = (e) => {
		const body = e.target.value;
		this.setState(() => ({ body: body }));
	};

	buttonLast = () => {
		const buttonLast = this.props.user ? ("Log Out"):("Sign Up")
		console.log(buttonLast);
		return buttonLast;
	}

	onSubmit = (e) => {
		e.preventDefault();

		if (!this.state.email || !this.state.body || !this.state.name) {
			this.setState(() => ({ error: "Please fill all the fields" }));
		} else {
			this.setState(() => ({ error: "" }));
			const customerQuery = {
				email: this.state.email,
				body: this.state.body,
				name: this.state.name,
			};
			axios
				.post("/api/v1/contact", customerQuery)
				.then((res) => console.log(res));
			this.setState(() => ({
				email: "",
				body: "",
				name: "",
			}));
		}
	};

	render() {
		return (
			<div>
				<Header buttonLast = {this.buttonLast()} />
				<div className="contact-container">
					<div className="find-products">
						Can’t find the products You love? <br />
						Need help with your order?
						<br />
						Wish to understand Better how our service works?
					</div>
					<h1 className="contact-heading"> How can we help? </h1>
					<p className="fill-out">
						Fill out the form below and we <br /> will reach out to you
						shortly and <br /> do our best to help you
					</p>
					<form className="form-container">
						<input
							type="text"
							placeholder="Name"
							value={this.state.name}
							className="contact-input-element"
							onChange={this.onNameChange}
						/>
						<input
							type="email"
							placeholder="Email"
							value={this.state.email}
							className="contact-input-element"
							onChange={this.onEmailChange}
						/>
						<textarea
							rows="5"
							type="text"
							placeholder="How can we help?"
							value={this.state.body}
							className="contact-input-element"
							onChange={this.onBodyChange}
						/>
						<Button
							variant="green"
							onClick={this.onSubmit}
							buttonText="Submit"
						/>
					</form>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
	user: state.userReducer.userLoggedIn
	};
};

export default connect(mapStateToProps)(Contact);
