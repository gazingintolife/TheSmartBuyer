import React from 'react'
import { Link } from 'react-router-dom';
import SignUpForm from './signUpForm';

class Signup extends React.Component {
    
    constructor(props){
        super(props);
    }

    onSignUpSubmit = (user) => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user),
        }

        fetch('/api/signup', options)
    }

    render(){
        return (
            <div>
                <SignUpForm onSubmit = {this.onSignUpSubmit}/>
                <Link to = "/login">Login</Link>
            </div>
            )
        
    }
    
}

export default Signup;