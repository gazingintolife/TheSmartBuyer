import React from 'react';

class DiscoveryListItem extends React.Component {
    constructor(props){
        super(props);
    }

    onButtonClick = () => {
        console.log("item deleted")
    }

    render () {
        return (
            <div className = "container border border-warning">
                <a>{this.props.category_id}</a>
            </div>
        );
    }
}

export default DiscoveryListItem;