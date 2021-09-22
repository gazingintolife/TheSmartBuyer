import React from "react";

export const Button = (props) => {
    return(
        <div>
            <button onClick = {props.onClick}>{props.buttonText}</button>
        </div>
    );
}