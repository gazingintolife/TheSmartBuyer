import React from "react";
import "./DiscoverMenu.scss";

const ProductListItem = (props) => {
	return <div className="product-list-item">{props.product}</div>;
};

const ProductList = (props) => {
	console.log(props);
	return (
		<>
			{props?.products?.map((product) => (
				<ProductListItem product={product} />
			))}
		</>
	);
};

export default ProductList;
