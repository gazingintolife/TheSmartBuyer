import React from "react";

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            mobile: '',
            password: '',
            error: ''
        }
    }

    onmobileChange = (e) => {
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
            
            this.setState(() => ({
                mobile: '',
                password: ''
            }))
        }
    }


    render(){
        return(
            <div>
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
                    <button>Log In</button>
                </form>
            </div>
        )
    }
}

export default Login;