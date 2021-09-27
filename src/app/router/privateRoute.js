import React from 'react';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render = {
                (props) => (
                    localStorage.getItem('auth-token') ? (
                        <Component {...props} />
                    ): (
                        <Redirect
                            to = {{
                                pathname: "/signup",
                            }}
                        />
                    )
                )
            }
        />
    )
}

export default PrivateRoute;