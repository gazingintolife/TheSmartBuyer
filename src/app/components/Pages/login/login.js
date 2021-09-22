import React from "react";
import { connect } from "react-redux";
import { userLoggedIn } from "../../../actions/signup";
import { Button } from "../../button/button";

const axios = require('axios').default;

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            mobile: '',
            password: '',
            error: ''
        }
    }

    onMobileChange = (e) => {
        const mobile = e.target.value;
        this.setState(() => ({mobile:mobile}))
    }

    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState(() => ({password:password}))
    }

    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.mobile || !this.state.password){
            this.setState(() => ({error: 'Please fill all the fields'}));
        }
        else {
            this.setState(() => ({error: ''}));
            const user = {
                mobile: this.state.mobile,
                password: this.state.password
            }
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            axios.post('/api/v1/customer/login',user, options)
            .then(response => {
                this.props.userLoggedOn({
                    _id: response.data.body._id,
                    firstName: response.data.body.firstName,
                    lastName: response.data.body.lastName
                })
                if(response.status === 200){
                    localStorage.setItem('auth-token',response.data.token);
                    this.props.history.push(`/dashboard/${this.props._id}`)
                }
                console.log(response)
            }
            )

            this.setState(() => ({
                mobile: '',
                password: ''
            }))
        }
    }


    render(){
        return(
            <div>
                <h2>We have missed you</h2>
                <form onSubmit = {this.onSubmit}>
                    <input 
                        type = "number"
                        placeholder = "Enter Your Number"
                        value = {this.state.mobile}
                        onChange = {this.onMobileChange}
                    />
                    <input 
                        type = "text"
                        placeholder = "Enter Your Password"
                        value = {this.state.password}
                        onChange = {this.onPasswordChange}
                    />
                    <Button onClick = {this.onSubmit} buttonText = "Log In" />
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        _id: state.userReducer._id,
        firstName: state.userReducer.firstName
    })
}

const mapDispatchToProps = (dispatch) => ({
    userLoggedOn: (userData) => dispatch(userLoggedIn(userData)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);