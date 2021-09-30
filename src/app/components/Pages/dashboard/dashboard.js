import React from "react";
import DiscoveryMenu from "./Discovery/DiscoveryMenu";
import GroceryList from "./groceryList";
import "./Dashboard.scss"
import Header from "../../Header/Header";

const dashboard = () => {
	return (
		<div>
			<Header buttonOne = "Contact" buttonTwo = "My Account" buttonLast = "Log Out" />
			<div className="container row border border-danger">
				<DiscoveryMenu />
				<div className="container col grocery-list">
					<GroceryList />
				</div>
			</div>
		</div>
	);
};

export default dashboard;
