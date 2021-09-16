import React from 'react';

class ListItem extends React.Component {
    constructor(props){
        super(props);
    }

    onButtonClick = () => {
        console.log("item deleted")
    }

    render () {
        // console.log(this.props.product);
        return (
            <div className = "container border border-warning">
                <div className = "row">
                    <div className = "col p-3">
                        {this.props.product}
                    </div>
                    <div className = "col p-3">
                        <button className = "btn btn-light" onClick = {this.onButtonClick} >Delete</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListItem;