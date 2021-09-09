import React from "react";
import DiscoveryList from "./DiscoveryList";

class DepartmentList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            category: []
        }
    }

    componentDidMount(){
        fetch('/api/getMenuItems', {method: 'GET'})
    .then((res) => {
        if(res.ok){
            return res.json()
        }else{
            throw new Error("Something went wrong");
        }
    })
    .then( json => {
        this.setState(() => ({category: [...json]}))
    })
    }

    render(){
        return(
            <div>
                <DiscoveryList category = {this.state.category}/>
            </div>
        );
    }
}

export default DepartmentList;