import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { userLoggedIn } from "../../../actions/signup";
import SignUpForm from "./signUpForm";
import "./signup.scss";
import File from "../../../assets/File.svg";
import Truck from "../../../assets/Truck.svg";
import Arrow from "../../../assets/Arrow.svg";

const axios = require("axios");

class Signup extends React.Component {
	constructor(props) {
		super(props);
	}

	onSignUpSubmit = (user) => {
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
		};

		axios.post("/api/v1/customer/signup", user, options)
			.then((response) => {
				this.props.userLoggedOn({
					_id: response.data.body._id,
					firstName: response.data.body.firstName,
					lastName: response.data.body.lastName,
				});
				
				localStorage.setItem("auth-token", response.data.token);
				return this.props.history.push(`/dashboard/${this.props._id}`);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	render() {
		return (
			<div className="signup-container">
				<div className="signup-left">
					<div className="flow-container">
						<div className="flow-circle">
							<img src={File} alt="" />
							<p className="mt-2">Create your grocery list</p>
						</div>
						<img className="mx-4" src={Arrow} alt="" />
						<div className="flow-circle">
							<img src={Truck} alt="" />
							<p className="mt-2">
								Receive your groceries Weekly
							</p>
						</div>
					</div>
					<h2 className="its-simple">It’s that simple!</h2>
				</div>
				<SignUpForm onSubmit={this.onSignUpSubmit} />
				{/* <Link to="/login">Login</Link> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
