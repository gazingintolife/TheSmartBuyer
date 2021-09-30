import React from 'react'
import Header from '../../Header/Header';

const myAccount = () => {
    const user = localStorage.getItem("firstName")
    return (
        <div>
            <Header buttonLast = "Log Out"/>
            <h1> Hey {user}</h1>
            <h3> Here is your account Information </h3>
        </div>
    )
}

export default myAccount;