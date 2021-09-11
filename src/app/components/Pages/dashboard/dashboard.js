import React from "react";
import DiscoveryMenu from "./Discovery/DiscoveryMenu";
import GroceryList from "./groceryList";
import "./Dashboard.scss"

const dashboard = () => {
	return (
		<div className="container row">
			<DiscoveryMenu />
			<div className="container col grocery-list">
				<GroceryList />
			</div>
		</div>
	);
};

export default dashboard;
