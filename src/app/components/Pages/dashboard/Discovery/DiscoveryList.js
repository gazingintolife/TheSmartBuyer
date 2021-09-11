import React from "react";
import { connect } from "react-redux";
import DiscoveryListItem from "./DiscoveryListItem";
import "./DiscoverMenu.scss"

const DiscoveryList = (props) => {
	console.log(props.category);
	return (
    <div className="discovery-list-container">
      <h4 className="discovery-list-head">Discovery List</h4>
      <div className="discovery-list">
	{props?.category?.map((item) => (
    <DiscoveryListItem item={ item}/>
			))}
      </div>
		
		</div>
	);
};

export default DiscoveryList;
