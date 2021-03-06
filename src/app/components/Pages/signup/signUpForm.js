import React from "react";
import { Button } from "../../button/button";
import "./signup.scss";

class SignUpForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: "",
			lastName: "",
			mobile: "",
			password: "",
			error: "",
		};
	}

	onFirstNameChange = (e) => {
		const firstName = e.target.value;
		this.setState(() => ({ firstName: firstName }));
	};

	onLastNameChange = (e) => {
		const lastName = e.target.value;
		this.setState(() => ({ lastName: lastName }));
	};

	onmobileChange = (e) => {
		const mobile = e.target.value;
		this.setState(() => ({ mobile: mobile }));
	};

	onPasswordChange = (e) => {
		const password = e.target.value;
		this.setState(() => ({ password: password }));
	};

	onSubmit = (e) => {
		e.preventDefault();

		if (
			!this.state.firstName ||
			!this.state.lastName ||
			!this.state.mobile ||
			!this.state.password
		) {
			this.setState(() => ({ error: "Please fill all the fields" }));
		}else {
			this.setState(() => ({ error: "" }));
			
			this.props.onSubmit({
				fullName: this.state.firstName + " " + this.state.lastName,
				mobile: this.state.mobile,
				password: this.state.password,
			});

			this.setState(() => ({
				firstName: "",
				lastName: "",
				mobile: "",
				password: "",
			}));
		}
	};

	render() {
		return (
			<div className="signup-right">
				<h4 className="signup-head">
					Let’s Make your life <br /> a little Smoother
				</h4>
				<form className="signup-form" onSubmit={this.onSubmit}>
					<div className="names-input">
						<input
							className="signup-input-element"
							type="text"
							placeholder="First Name"
							value={this.state.firstName}
							onChange={this.onFirstNameChange}
						/>
						<input
							className="signup-input-element"
							type="text"
							placeholder="Last Name"
							value={this.state.lastName}
							onChange={this.onLastNameChange}
						/>
					</div>
					<input
						className="signup-input-element"
						type="number"
						placeholder="Phone Number"
						value={this.state.mobile}
						onChange={this.onmobileChange}
					/>
					<input
						className="signup-input-element"
						type="text"
						placeholder="Enter Your Password"
						value={this.state.password}
						onChange={this.onPasswordChange}
					/>
					<div className="agree">
						<input type="checkbox" id="TC" />
						<label for="TC">
							<p>
								{" "}
								I agree to{" "}
								<a href="/contact">
									Terms and Conditions
								</a> and <a href="/checkout">Privacy Policy</a>
							</p>
						</label>
					</div>

					<Button
						variant="green"
						onClick={this.onSubmit}
						buttonText="Sign Up"
					/>
				</form>
			</div>
		);
	}
}

export default SignUpForm;
