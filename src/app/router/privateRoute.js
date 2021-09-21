import React from 'react';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({children, ...rest}) => {
    return (
        <Route
            {...rest}
            render = {
                ({location}) => (
                    localStorage.getItem('auth-token') ? (
                        children
                    ): (
                        <Redirect
                            to = {{
                                pathname: "/signup",
                                state: { from: location}
                            }}
                        />
                    )
                )
            }
        />
    )
}

export default PrivateRoute;