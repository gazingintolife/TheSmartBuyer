import React from "react";

class InputField extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            product: '',
            error: ''
        }
    }

    onProductChange = (e) => {
        const product = e.target.value;
        this.setState(() => ({product: product}));
    }

    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.product){
            this.setState(() => ({error: "Please Enter Product Name"}))
        }
        else{
            this.setState(() => ({error: ''}));
            this.props.onSubmit({
                product: this.state.product
            })
            this.setState(() => ({
                product: ''
            }))
        }
    }

    render () {
        return (
            <div>
                <form onSubmit = {this.onSubmit}>
                    <input 
                    name = "input"
                    type = "text"
                    placeholder = "Enter Grocery Items"
                    value = {this.state.product}
                    onChange = {this.onProductChange}
                    />
                </form>
            </div>
        );
    }
}

export default InputField;