import React from 'react';
import List from '../../List/list';
import InputField from './inputField';
import CheckoutButton from './CheckoutButton';
import { connect } from 'react-redux';
import { addProductToList } from '../../../actions/AddProductToList';


class GroceryList extends React.Component {

    constructor(props) {
        super(props);
    }

    onSubmit = (product) => {
        this.props.addProductToList(product);
        //console.log(product);
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
                    <CheckoutButton/>    
                </div>  
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    addProductToList: (product) => dispatch(addProductToList(product))
});

export default connect(undefined, mapDispatchToProps)(GroceryList);