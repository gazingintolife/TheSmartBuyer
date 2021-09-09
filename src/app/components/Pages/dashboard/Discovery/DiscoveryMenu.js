import React from "react";
import DepartmentList from "./DepartmentList";

class DiscoveryMenu extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <DepartmentList/>
            </div>
        )
    }
}

export default DiscoveryMenu;