import React from 'react';
import { withRouter } from 'react-router';
import List from '../../List/list';
import InputField from './inputField';
import { connect } from 'react-redux';
import { addProductToList } from '../../../actions/AddProductToList';
import { Button } from '../../button/button';


class GroceryList extends React.Component {

    constructor(props) {
        super(props);
    }

    onCheckoutClick = () => {
        this.props.history.push(`/checkout/${this.props._id}`)
    }

    onSubmit = (product) => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product),
        }
        console.log(product);
        fetch('/api/currentOrder', options)
        .then(res => res.json())
        .then(json => {
            this.props.addProductToList(json);
        })
    }

    render() {
        return (
            <div>
                <div className = "container">
                    <List/>
                </div>
                <div className = "container border border-warning">
                    <InputField onSubmit = {this.onSubmit} />    
                </div>          
                <div className = "container border border-warning">
                      <Button variant = "white" buttonText = "checkout" onClick = {this.onCheckoutClick}/>
                </div>  
            </div>
        );
    }
}

const mapStateToProps = (state) => {
	return {
    _id: state.userReducer._id,
	user: state.userReducer.userLoggedIn
	};
};

const mapDispatchToProps = (dispatch) => ({
    addProductToList: (product) => dispatch(addProductToList(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(GroceryList));