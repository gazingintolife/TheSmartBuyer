import React from 'react';
import GroceryList from './groceryList';

const dashboard = () => {
    return (
        <div className = "container row">
            <div className = "container  col">
                <h1> This is dashboard </h1>
            </div>
            <div className = "container col">
                <GroceryList/>
            </div>
        </div>
    )
}

export default dashboard;