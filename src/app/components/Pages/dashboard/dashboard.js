import React from 'react';
import DiscoveryMenu from './Discovery/DiscoveryMenu';
import GroceryList from './groceryList';

const dashboard = () => {
    return (
        <div className = "container row">
            <div className = "container  col">
                <DiscoveryMenu/>
            </div>
            <div className = "container col">
                <GroceryList/>
            </div>
        </div>
    )
}

export default dashboard;