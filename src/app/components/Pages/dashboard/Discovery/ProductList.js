import React from "react";
import "./DiscoverMenu.scss";

const ProductListItem = (props) => {
	return <div className="product-list-item">{props.product}</div>;
};

const ProductList = (props) => {
	console.log(props);
	return (
		<div>
			{props?.products?.map((product, i) => (
				<ProductListItem key={i} product={product} />
			))}
		</div>
	);
};

export default ProductList;
