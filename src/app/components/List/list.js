import React from 'react';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // console.log(this.props.product);
        return (
            <div>
                {
                    this.props.product.length === 0 ?
                    (
                        <p>No Data</p>
                    ): 
                    (   
                        this.props.product.map((product) => (<ListItem key= {product._id} {...product}/>))
                    )
                }
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        product: state.reducer
    }
}



export default connect(mapStateToProps, undefined)(List);