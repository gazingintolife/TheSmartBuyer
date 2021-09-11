import React from "react";
import "./DiscoverMenu.scss"

const DiscoveryListItem = (props) => {
	const onButtonClick = () => {
		console.log("item deleted");
	};

	return (
		<div className="discovery-list-item">
      {props.item}
      <img width="30px" src="images/logo.png" alt="" />
		</div>
	);
};

export default DiscoveryListItem;
