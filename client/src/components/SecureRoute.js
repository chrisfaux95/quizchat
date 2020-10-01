import React from 'react';
import {Route, useLocation, Redirect} from 'react-router-dom';

export default function SecureRoute({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                localStorage.getItem("nickname") ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location },
                            }}
                        />
                    )
            }
        />
    );
}