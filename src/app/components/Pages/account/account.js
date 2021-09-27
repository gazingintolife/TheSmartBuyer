import React from 'react'

const myAccount = () => {
    const user = localStorage.getItem("firstName")
    return (
        <div>
            <h1> Hey {user}</h1>
            <h3> Here is your account Information </h3>
        </div>
    )
}

export default myAccount;