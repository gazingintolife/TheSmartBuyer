/**
 * dashboard component renders the Dashboard Page
 * 
 */

import React from "react";
import GroceryList from "./groceryList";
import "./Dashboard.scss"
import Header from "../../Header/Header";

const dashboard = () => {
	return (
		<div>
			<Header buttonOne = "Contact" buttonTwo = "My Account" buttonLast = "Log Out" />
			<div className="container row border border-danger">
				<div className="container col grocery-list">
					<GroceryList />
				</div>
			</div>
		</div>
	);
};

export default dashboard;
