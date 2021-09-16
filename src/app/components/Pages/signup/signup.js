import React from 'react'
import { Link } from 'react-router-dom';
import SignUpForm from './signUpForm';

const signup = () => {
    
    const onSignUpSubmit = (user) => {

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user),
        }

        fetch('/api/signup', options)
    }
    
    return (
        <div>
            <SignUpForm onSubmit = {onSignUpSubmit}/>
            <Link to = "/login">Login</Link>
        </div>
    )
}

export default signup;