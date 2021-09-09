import React from "react";
import { connect } from "react-redux";
import DiscoveryListItem from "./DiscoveryListItem";

class DiscoveryList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.category)
        return (
            <div>
                {
                    this.props.category.map((category) => (<DiscoveryListItem key= {category._id} {...category}/>))    
                }
            </div>
        );
    }
}


export default DiscoveryList;