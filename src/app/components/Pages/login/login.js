import React from "react";
import { connect } from "react-redux";
import { userLoggedIn } from "../../../actions/signup";
import "./login.scss";
import { Button } from "../../button/button";
import Header from "../../Header/Header";

const axios = require("axios").default;

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mobile: "",
			password: "",
			error: "",
		};
	}

	onMobileChange = (e) => {
		const mobile = e.target.value;
		this.setState(() => ({ mobile: mobile }));
	};

	onPasswordChange = (e) => {
		const password = e.target.value;
		this.setState(() => ({ password: password }));
	};

	onSubmit = (e) => {
		e.preventDefault();

		if (!this.state.mobile || !this.state.password) {
			this.setState(() => ({ error: "Please fill all the fields" }));
		} else {
			this.setState(() => ({ error: "" }));
			const user = {
				mobile: this.state.mobile,
				password: this.state.password,
			};
			const options = {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
			};
			axios
				.post("/api/v1/customer/login", user, options)
				.then((response) => {
					this.props.userLoggedOn({
						_id: response.data.body._id,
						firstName: response.data.body.firstName,
						lastName: response.data.body.lastName,
						userLoggedIn: true,
					});
					if (response.status === 200) {
						localStorage.setItem("auth-token", response.data.token);
						this.props.history.push(`/dashboard/${this.props._id}`);
					}
					console.log(response);
				});

			this.setState(() => ({
				mobile: "",
				password: "",
			}));
		}
	};

	render() {
		return (
			<div>
				<Header buttonOne = "Contact" buttonLast = "Sign Up"/>
				<div className="login-container">
					<form className="form-container" onSubmit={this.onSubmit}>
						<h3 className="greet-text">We have missed you!</h3>
						<input
							className="input-element"
							type="number"
							placeholder="PHONE NUMBER"
							value={this.state.mobile}
							onChange={this.onMobileChange}
						/>
						<input
							className="input-element"
							type="text"
							placeholder="PASSWORD"
							value={this.state.password}
							onChange={this.onPasswordChange}
						/>
						<Button
							variant="green"
							onClick={this.onSubmit}
							buttonText="Log In"
						/>
					</form>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		_id: state.userReducer._id,
		firstName: state.userReducer.firstName,
	};
};

const mapDispatchToProps = (dispatch) => ({
	userLoggedOn: (userData) => dispatch(userLoggedIn(userData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
