import React from 'react'
import { connect } from 'react-redux';
import { userLoggedIn } from '../../../actions/signup';
import SignUpForm from './signUpForm';

const axios = require('axios');

class Signup extends React.Component {
    constructor(props){
        super(props);
    }    

    onSignUpSubmit = (user) => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }

        axios.post('/api/v1/customer/signup', user, options)
        .then(response => {
            this.props.userLoggedOn({
                _id: response.data.body._id,
                firstName: response.data.body.firstName,
                lastName: response.data.body.lastName
            })
            console.log(response)
        })
        .then(() => {
            console.log(this.props.firstName, this.props._id)
            return (
                this.props.history.push(`/dashboard/${this.props._id}`)
            );
        }
            
        )
        .catch((err) => {
            console.log(err)
        })
    }
    render(){
        return (
            <div>
                <h2>Let's make your life a little smoother!</h2>
                <SignUpForm onSubmit = {this.onSignUpSubmit}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Signup);