import React, { useState } from "react";
import { connect } from "react-redux";
import CaretRight from "../../../../assets/caret-up-solid.svg";
import "./DiscoverMenu.scss";
import ProductList from "./ProductList";

const DiscoveryListItem = (props) => {
	const [showProducts, setShowProducts] = useState(false);

	const onButtonClick = () => {
		console.log("item deleted");
	};

	return (
		<>
			<div
				onClick={(e) => setShowProducts(!showProducts)}
				className="discovery-list-item"
			>
				<span>{props?.item}</span>
				<span>
					<img
						className={showProducts ? "" : "caret-rotate"}
						width="15px"
						src={CaretRight}
						alt=""
					/>
				</span>
			</div>
			{showProducts && <ProductList products={props?.selectedProducts} />}
		</>
	);
};

const DiscoveryList = (props) => {
	const [products, setProducts] = useState([
		{
			category: "Category 1",
			products: ["Product 1", "Product 2"],
		},
		{
			category: "Category 2",
			products: ["Product 3", "Product 4"],
		},
		{
			category: "Category 3",
			products: ["Product 1", "Product 2"],
		},
		{
			category: "Category 4",
			products: ["Product 3", "Product 4"],
		},
	]);

	return (
		<div className="discovery-list-container">
			<h4 className="discovery-list-head">Discovery List</h4>
			{props?.category?.map((item) => (
				<DiscoveryListItem
					item={item}
					selectedProducts={
						products?.find((obj) => obj?.category === item)
							?.products
					}
				/>
			))}
		</div>
	);
};

export default DiscoveryList;
