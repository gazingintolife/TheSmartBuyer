import React from "react";

export const Button = (props) => {
    return(
        <div>
            <button className="white-btn" onClick = {props.onClick}>{props.buttonText}</button>
        </div>
    );
}