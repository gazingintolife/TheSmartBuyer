import axios from 'axios';
import React, { useState } from 'react'
import { Button } from '../../button/button';

class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            body: '',
            name: '',
            err: ''
        }
    }

    onNameChange = () => {
        const name = e.target.value;
		this.setState(() => ({ name: name }));
    }

    onEmailChange = () => {
        const email = e.target.value;
		this.setState(() => ({ email: email }));
    }

    onBodyChange = () => {
        const body = e.target.value;
		this.setState(() => ({ body: body }));
    }

    onSubmit = (e) => {
        e.preventDefault();

        if (
			!this.state.email ||
			!this.state.body ||
            !this.state.name
		) {
			this.setState(() => ({ error: "Please fill all the fields" }));
		} else {
			this.setState(() => ({ error: "" }));
            const customerQuery = {
                email : this.state.email,
                body : this.state.body,
                name: this.state.name
            } 
			axios.post("/api/v1/contact", customerQuery)
            .then((res) => (console.log(res)))
			this.setState(() => ({
				email: "",
				body: "",
                name: ""
			}));
		}
    }
    
    render(){
        return (
            <div>
                <h1> How can we help? </h1>
                <form>
                    <input
                        type = "text"
                        placeholder = "Name"
                        value = {this.state.name}
                        onChange = {this.onNameChange}
                    />
                    <input
                        type = "email"
                        placeholder = "Email"
                        value = {this.state.email}
                        onChange = {this.onEmailChange}
                    />
                    <input
                        type = "text"
                        placeholder = "How can we help?"
                        value = {this.state.body}
                        onChange = {this.onBodyChange}
                    />
                    <Button onClick = {this.onSubmit} buttonText = "Submit"/>
                </form>
            </div>
        )
    }
}

export default contact;