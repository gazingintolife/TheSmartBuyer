import React from "react";
import "./button.scss";

export const Button = (props) => {
	const { variant } = props;
	return (
		<div>
			<button
				className={variant === "green" ? "green-btn" : "white-btn"}
				onClick={props.onClick}
			>
				{props.buttonText}
			</button>
		</div>
	);
};
